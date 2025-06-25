
let loadingdate=null;
window.addEventListener('DOMContentLoaded',()=>{
    if(loadingdate){
        document.getElementById('date').value=loadingdate;
        onSearch();
    }  
})
document.getElementById('searchbtn').addEventListener('click',onSearch);
const date=document.getElementById('date');
async function onSearch(){  
    try {
        if(!date.value){
            throw new Error('No date has been selected');
        }
        const checkifthedateexists= await fetch(`http://localhost:3000/student/findifexist/${date.value}`);
        const response=await checkifthedateexists.json();

        if(response.isPresentInTheDataBase){
            const attendanceTableStudents=await fetch('http://localhost:3000/student/attendencesheet');
            const data=await attendanceTableStudents.json();
            const students=data;
            //console.log(data);
            const studentlist=document.getElementById('StudentList');
            studentlist.innerHTML='';
            students.forEach(student=>{
                const formatteddate= new Date(student.date).toISOString().split('T')[0];
                //console.log('Checking backend date:', formatteddate, 'against input:', date.value);
                if(formatteddate==date.value){
                const row=document.createElement('div');
                row.className = 'card p-3 mb-3 shadow-sm';
                row.innerHTML=`
                <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">${student.name}</h6>
                <span class="text-uppercase">${student.status === 'present'?'✅ Present':'❌ Absent'}</span>
                `;
                studentlist.appendChild(row);
                }
            }
        )

        }else{
            const studentsNames=await fetch('http://localhost:3000/student/getstudents');
            const data=await studentsNames.json();
            const students=data;
            const studentlist=document.getElementById('StudentList');
            studentlist.innerHTML='';
            students.forEach(student => {
            const row=document.createElement('div');
            row.className = 'd-flex justify-content-between align-items-center border p-3 mb-2 rounded bg-white';
            row.innerHTML=`
            <strong>${student.name}</strong>
            <label class="form-check-label me-2"><input type="radio" name="status-${student.id}" value="present"> Present</label>
            <label class="form-check-label"><input type="radio" name="status-${student.id}" value="absent"> Absent</label>
            `;
            studentlist.appendChild(row);
        });
        const submitbtn=document.createElement('button');
        submitbtn.textContent="Mark Attendence";
        submitbtn.className = 'btn btn-success mt-3';
        submitbtn.onclick= async ()=>{
            await submitfunction(date.value,students);
            loadingdate=date.value;
            await onSearch();
        };
        studentlist.appendChild(submitbtn);
        }
    } catch (error) {
        console.error(error);
    }
}

async function submitfunction(date,students){
    try {
        for(const student of students){
            const selectedradio=document.querySelector(`input[name=status-${student.id}]:checked`);
            if(!selectedradio){
                continue;
            }
            const myObj={
                student_id:student.id,
                date:date,
                status:selectedradio.value
            };

            let response= await fetch(`http://localhost:3000/student/addtodatabase`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(myObj)
            });
            if(!response.ok){
                throw new Error('failed to store in the database');
            }
            // else if(response.ok){
            //     console.log('value inserted successfully');
            // }
        }
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('fetchbtn').addEventListener('click',fetchingValues);

async function fetchingValues(){
    try {
        const response=await fetch('http://localhost:3000/student/gettingReport');
        const data=await response.json();
        const students=data;
        //console.log(data);
        const studentList=document.getElementById('StudentList');
        studentList.innerHTML=''
        for(const student of students){
            const row=document.createElement('div');
            row.className = 'd-flex justify-content-between align-items-center border p-3 mb-2 rounded bg-light';
            row.innerHTML=`
            <span>${student.name}</span>
            <span>${student.presentdays}/${student.totaldays}</span>
            <span>${student.averageAttendence}</span>
            `;
            studentList.appendChild(row);
        }

    } catch (error) {
        console.error(error);
    }
}