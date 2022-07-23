document.querySelector("#createaccount").addEventListener("submit",signup)
let signarr=[]
function signup(){
    event.preventDefault();
    let signobj={
        email:document.querySelector("#email").value,
        pass:document.querySelector("#password").value,
        fname:document.querySelector("#fname").value,
        lname:document.querySelector("#lname").value,
        academ:document.querySelector("#academic").value,
        cpass:document.querySelector("#cpassword").value,
    }
    if(signobj.email===""||signobj.pass===""||signobj.fname===""||signobj.lname===""||signobj.academ==="academic title"||signobj.cpass===""){
      alert("Fill all fields")
    }else if(signobj.cpass!==signobj.pass){
        alert("fill the correct password")
    }
    else{
      signarr.push(signobj)
    localStorage.setItem("signup",JSON.stringify(signarr));
    alert("Signup successfull")
    }

    
    
}
