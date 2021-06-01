let nameInput= document.getElementById("input-name")

let dateInput=document.getElementById("input-date")

let amountInput=document.getElementById("input-amount")

let btnIn = document.getElementById("add-btn")

let tableInput=document.getElementById("table-in")

let dateInputShow=document.getElementById("table-date")

let amountShow=document.getElementById("table-amount")

let removeItem=document.getElementById("remove-btn")

let tables=document.getElementById("table-out")

let alertMessage=document.getElementById("messages")





//function starts here//


btnIn.addEventListener("click",function(e){

   if(nameInput.value=="" ||  dateInput.value=="" || amountInput.value=="" ){
      let mainMsg=alertMessage.innerHTML=`<div class=" text-center alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hello there!</strong> You should check in on some of those fields below.
     
    </div>`   
    
    setTimeout(()=>{
       mainMsg=alertMessage.innerHTML=""
    },4000)
   
   }else{
    e.preventDefault()

    // for name input
 let nameNewInput=document.createElement("p");
  nameNewInput.innerHTML=nameInput.value
  tableInput.appendChild(nameNewInput)

     //time for date:

let dateNewInput=document.createElement("p")

  dateNewInput.innerHTML= dateInput.value

dateInputShow.appendChild(dateNewInput)

    // time for amount:
 
  let  newAmountShow =document.createElement("p")

     newAmountShow.innerHTML=amountInput.value
  
    amountShow.appendChild(newAmountShow);

       // clear input field//


       nameInput.value=""
       dateInput.value=""
       amountInput.value=""

       // delete button function

    let  delTable=document.createElement("p")
      
      removeItem.appendChild(delTable)
       
       delTable.innerHTML="<button class='btn btn-dark'>X</button>"

delTable.addEventListener("click",function(){

     tableInput.removeChild(nameNewInput)
      dateInputShow.removeChild(dateNewInput)
     amountShow.removeChild(newAmountShow);
     removeItem.removeChild(delTable)
     
})



   }

 

})


//and that is it
