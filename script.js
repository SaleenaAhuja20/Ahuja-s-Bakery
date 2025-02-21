let msgBtn = document.querySelector(".submit-btn");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

userName = null;
email = null;
subject = null;
message = null;
msgBtn.addEventListener("click", () => {
    if(userName != null && email != null && subject != null && message != null){
    alert("you message has been sent");
} else{
    alert("please fill the information");
}
});