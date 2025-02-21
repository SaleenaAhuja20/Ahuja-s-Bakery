// send messgae js
let msgBtn = document.querySelector(".submit-btn");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

msgBtn.addEventListener("click", () => {

    if(userName.value === "" || email.value === "" || subject.value === ""|| message.value === ""){
        alert("⚠️ Please fill out all the fields.");
    }else if (!email.value.includes("@")){
        alert("⚠️ Email must contain '@'.");
    }else if (!email.value.endsWith("@gmail.com")){
        alert("⚠️ Please enter a valid Gmail address (example@gmail.com).");
    }else{
        alert("✅ Message sent successfully!");
}
});