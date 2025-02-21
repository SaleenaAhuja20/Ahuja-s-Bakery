// send messgae js
let msgBtn = document.querySelector(".submit-btn");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

msgBtn.addEventListener("click", () => {
    if(userName.value === "" || email.value === "" || subject.value === ""|| message.value === ""){
        alert("please fill the information");
} else{
    
    alert("you message has been sent");
}
});