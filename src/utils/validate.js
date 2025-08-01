export const checkValidateData=(email,password,name,isSignInForm)=>{


const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
const isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)

if(email.length===0 &&  password.length ===0 ) return "Enter the form details"
if(name.length ===0 && isSignInForm ===false) return "Enter the Name"
if(email.length ===0) return "Enter the email"
if(password.length ===0) return "Enter the password"
if(!isNameValid && isSignInForm ===false) return "Name is Not Valid"
if(!isEmailValid) return "Email Id is not valid"
if(!isPasswordValid) return "Password is not valid"

    return null;
}