let nameInp=document.getElementById("name");
let emailInp=document.getElementById("email");
let phoneNum=document.getElementById("phNo");
let textFeild=document.getElementById("address");
let pincode=document.getElementById("pin");
let btn=document.getElementById("submit");
let nErr=document.getElementById("nameErr");
let pErr=document.getElementById("phoneErr");
let eEEr=document.getElementById("emailErr");
let txtErr=document.getElementById("textErr");
let pnErr=document.getElementById("pinErr");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name=nameInp.value;
    let email=emailInp.value;
    let phone=phoneNum.value;
    let address=textFeild.value;
    let pinC=pincode.value;

    console.log(name,email,phone,address,pinC);


    const namePattern = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const phonePattern = /^[6-9][0-9]{9}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const pinPattern = /^\d{6}$/;

     if(namePattern.test(name)){
        console.log("name is valid");
        nErr.innerText="Valid name";
        nErr.style.color="green";
     }
     else{
         nErr.innerText="Enter valid Name";
        nErr.style.color="red";
     }

     if(phonePattern.test(phone)){
        pErr.innerText="valid Phone Number"
        pErr.style.color="green"
     }
     else{
        pErr.innerText="Enter valid Phone Number"
        pErr.style.color="red"
     }

     if(emailPattern.test(email)){
        eEEr.innerText="valid Email";
        eEEr.style.color="green";
     }
     else{
        eEEr.innerText="Enter valid Email";
        eEEr.style.color="red";
     }

     if(address.length>150){
        txtErr.innerText="Your message exceeds the 150 character limit."
        txtErr.style.color="red";
     }

     if(pinPattern.test(pinC)){
        pnErr.innerText="valid pincode";
        pnErr.style.color="green";
     }
     else{
        pnErr.innerText="Enter valid pincode";
        pnErr.style.color="red";
     }
})

