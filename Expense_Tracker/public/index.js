
let editmode=false;
let currenteditid=null;
let originalListItem=null;
window.addEventListener('DOMContentLoaded',()=>{
    loadExpense();
    const Ul=document.querySelector('ul');
    const form=document.getElementById('formOnExpense');
    form.addEventListener('submit',async function (event){
        
         event.preventDefault();
         const myObj={
            amount:form.amt.value,
            category:form.cate.value,
            description:form.desc.value
        };
        try {
            let response;
            if(editmode){
                response=await fetch(`http://localhost:3000/expense/updateExpense/${currenteditid}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(myObj)
                });
                if(!response.ok){
                    throw new Error('Update is not successful');
                }
            }
            else{
                response=await fetch('http://localhost:3000/expense/addexpense',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(myObj)
            });
            if(!response.ok){
                throw new Error('Failed to add the data in the dataBase');
            }
            }
            form.reset();
            await loadExpense();
            exiteditMode();
        } catch (error) {
            if(originalListItem){
                Ul.appendChild(originalListItem);
            }
            console.log(error);
        }
    })
async function loadExpense(){
    let response=await fetch('http://localhost:3000/expense/getValues');
    let expenses=await response.json();

    Ul.innerHTML='';
    expenses.forEach((eachExpense,index) => {
        const newLi=document.createElement('li');
        newLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2', 'shadow', 'rounded');
        newLi.textContent=`${eachExpense.amount} - ${eachExpense.category} - ${eachExpense.description}`;

        const btn1=document.createElement('button');
        btn1.textContent="Delete";
        btn1.classList.add('btn','btn-danger','ms-2');
        btn1.onclick=(event)=>deletefunction(eachExpense.id,event);
        const btn2=document.createElement('button');
        btn2.textContent="Edit";
        btn2.classList.add('btn','btn-danger','ms-2');
        btn2.onclick=(event)=>editfunction(eachExpense.id,eachExpense,event);

        newLi.appendChild(btn2);
        newLi.appendChild(btn1);
        Ul.appendChild(newLi);
        
    });
async function deletefunction(id,event){
    try {
        let response=await fetch(`http://localhost:3000/expense/deleteValue/${id}`,{
            method:'DELETE'
        });
    if(!response.ok){
        throw new Error('File not Deleted');
    }
    const delElement=event.target.parentElement
    Ul.removeChild(delElement);
    loadExpense();
    } catch (error) {
        console.log(error);
    }
    
}

function editfunction(id,expense,event){
    editmode=true;
    currenteditid=id;

    const listItem=event.target.closest('li');
    originalListItem=listItem.cloneNode(true);
    listItem.remove();
    
    form.amt.value=expense.amount;
    form.cate.value=expense.category;
    form.desc.value=expense.description;


    
    form.querySelector('button[type="submit"]').textContent='Update';
}

}
function exiteditMode(){
    editmode=false;
    currenteditid=null;
    originalListItem=null;
    form.querySelector('button[type="submit"]').textContent='Add';
}
})

