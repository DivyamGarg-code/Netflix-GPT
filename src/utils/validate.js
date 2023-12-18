export const checkValidData=(email,password)=>{
    // if(loginState=="Sign Up" ){
    //     if(name.length===0 || email.length===0 || password.length===0) return "Please fill all the fields";
    // }
    const isEmailValid=/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
    if(email.length===0 || password.length===0) return "Please fill all the fields";
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password must contain [6,20] characters with at least one numeric digit, one uppercase and one lowercase letter";
    return null;
}