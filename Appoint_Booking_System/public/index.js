
//this is the manual way if sending the data to the server


let isEditMode=false;
let currentEditUser=null;
window.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('formSumbitted');
    const appointmentList=document.getElementById('listOrder')
    loadappointment();

form.addEventListener('submit',async function (event) {
    event.preventDefault();
    const data ={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value
    };
    try {
        let response;
        if(isEditMode){
            response=await fetch(`http://localhost:8000/submit/${currentEditUser}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            });
        }
        else{
        response=await fetch('http://localhost:8000/submit',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
        });
    }
        
    if(!response.ok){
        throw new error('Failed to sumbit the form');
    }
    form.reset();
    loadappointment();
    exitEditmode();
    } catch (error) {
        console.log('ERROR : ', error);
         alert('Error booking appointment');
    }
});
async function loadappointment(){
    try {
        const response=await fetch('http://localhost:8000/submit');
        const appointment=await response.json();

        appointmentList.innerHTML='';
        appointment.forEach((user,index) => {
            const li=document.createElement('li');
            li.textContent=`${user.name} - ${user.email} - ${user.phone}`
            
            const editbtn=document.createElement('button');
            editbtn.textContent='Edit';
            editbtn.onclick= ()=> editFunction(user.id,user);
            li.appendChild(editbtn);
            deletebtn=document.createElement('button');
            deletebtn.textContent='Delete';
            deletebtn.onclick=()=>deleteFunction(user.id);
            li.appendChild(deletebtn);

            appointmentList.appendChild(li);

        });
    } catch (error) {
         console.error('Error loading appointments:', error);
    }
}
function editFunction(id,user){
    isEditMode=true;
    currentEditUser=id;

    form.name.value=user.name;
    form.email.value=user.email;
    form.phone.value=user.phone;

    form.querySelector('[type="submit"]').value='Update';
}
function exitEditmode(){
    isEditMode=false;
    currentEditUser=null;
    form.querySelector('[type="submit"]').value="Add";
}
async function deleteFunction(id){
    try {
        let response=await fetch(`http://localhost:8000/submit/${id}`,{
        method:'DELETE'
    });
    if(response.ok){
        loadappointment();
    }
    } catch (error) {
        console.error(error);
    }
}
})
