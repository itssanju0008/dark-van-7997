document.querySelector("#loginaccount").addEventListener("submit",login)
let loginarr=JSON.parse(localStorage.getItem("signup"))||[];
console.log(loginarr)

function login(){
    event.preventDefault();
    let loginobj={
        email:document.querySelector("#email1").value,
        pass:document.querySelector("#password1").value,
    }
    if(loginobj.email===""||loginobj.pass===""){
    alert("Fill up")
    }
    checkdata(loginobj)
    
    
}
function checkdata(el){
  for(let i=0;i<loginarr.length;i++){
    if(el.email===loginarr[i].email && el.pass===loginarr[i].pass){
      alert("Login Successfull");
    }else{
        alert("invalid email or password")
    }
  }
}

let loginn="passed"
localStorage.setItem("pass",JSON.stringify(loginn))