import { TrackChangesTwoTone } from '@material-ui/icons';
import React,{useState} from 'react';
import Button from './Button';
import DropDown from'./DropDown';

export const Form_signin = ({formTitle,onChange,showLoginFOrm,seccessPage}) => {
    const[fName,setfName]=useState("");
    const[lName,setlName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[education,setEducation]=useState("");
    const  readPro={
        
        fName:fName,
        
        lName:lName,
        
        email:email,
        
        password:password
    }
        
            
        

    const  handleTabs=()=>{
        onChange();
    }
    const eduFunc=(e)=>{
        if(e.target.value=="null"){
            setShowLocation(false);
        }else{
            setShowLocation(true)
        }
    }
    const showdone=()=>{
        seccessPage()
    }
    const [showLocation,setShowLocation]=useState(false);
    return (
        <div className="mainTab sign-form">
            <div className="buttons">
                <Button btnTitle="ورود"  chengeTab={handleTabs}/>
                <Button btnTitle="ثبت نام" classes={showLoginFOrm ?"btn":"btn__active"}  />
            </div>
             <h1 className="form__title titlesign">{formTitle}</h1>
             <form className="form_control form_sign" action="Enter.jsx">
                 <input type="text" placeholder="نام" name="fName" value={fName} onChange={(e)=>setfName(e.target.value)}/><input type="text" value={lName} placeholder="نام خانوادگی" name="lName" onChange={(e)=>setlName(e.target.value)}/>
                 <input type="email" className="email" placeholder="پست الکترونیک" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                 {/* <input type="email" placeholder="نام کاربری" className="" /> */}
                 <input type="password" placeholder="رمز عبور" className="pass" id="id_password" name="password" vlaue={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <br />
                 
                 <select type="select" className="select__degree" onClick={eduFunc} name="education" vlaue={education} onChange={(e)=>setEducation(e.target.value)}>
                    <option value="null" >...</option>  
                    <option value="bacheler" >دیپلم</option>
                    <option value="bacheler" >کارشناسی</option>
                    <option value="bacheler" >کارشناسی ارشد</option>
                    <option value="bacheler" >دکتری</option>
                 </select>
                 {showLocation &&<input type="" placeholder="محل تحصیلات" setShowLocation={showLocation} name="lEducation"/>}
                 <DropDown/>
                 <Button classes="btn__submit btn__join" typeButton="submit" btnTitle="ثبت نام"  chengeTab={showdone} />
             </form>
        </div>
    )
}
export default Form_signin;