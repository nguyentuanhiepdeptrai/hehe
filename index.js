let formSignIn = document.querySelector("form")

formSignIn.addEventListener("submit", (event) =>{
    event.preventDefault() 
    if(!formSignIn.userName.value){
        // console.log("missing user name")
        errMess("errName", "missing user name")
    }
    
    if(!formSignIn.userEmail.value){
        // console.log("missing user email")
        errMess("errEmail", "missing user email")
    }

    if(!formSignIn.userPass.value){
        // console.log("missing user pass")
        errMess("errPass", "missing pass")
    }

    if(!formSignIn.userConfirm.value){
        // console.log("missing confirm pass")
        errMess("errConfirm", "missing confirm")
    }
})
    let errMess = (queryId, mess) =>{
    let query = document.getElementById(queryId)
    query.innerHTML += mess

}

let Local = [
    {
        Email: "hiimhiep7a3@gmail.com",
        Phone: "0914513298",
        Password: "aloalo",
        Username: "Hiep"
    },
    {
        Email: "abcd@gmail.com",
        Phone: "0911962796",
        Password: "aloalalo",
        Username: "Yolo"
    },
    {
        Email: "huanhoahong@gmail.com",
        Phone: "0912345678",
        Password: "aloaloalo",
        Username: "Hehehe"
    },
]
localStorage.setItem("UserLocal", JSON.stringify(Local))


let SignIn = document.querySelector('form')
SignIn.addEventListener("submit", (ev) => {
    ev.preventDefault()
    let a = Local.find(local => local.Email == SignIn.email.value)
     console.log(a)
    if (a == undefined){
        document.getElementById("wrong").innerHTML += "Please enter an email address or phone number"
    }
    else if(SignIn.pass.value == a.Password)
    { window.location.href = "https://www.youtube.com"} 
    else {
        document.getElementById("wrong").innerHTML += "Please enter an email address or phone number"
    }
    document.querySelector("form").reset()
})