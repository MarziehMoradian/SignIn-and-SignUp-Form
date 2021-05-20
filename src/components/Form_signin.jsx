import React,{useState} from 'react';
import Button from './Button';

export const Form_signin = ({formTitle,showSignFOrm,onChange,showLoginFOrm}) => {
    const  handleTabs=()=>{
        onChange();
    }
    const [showLocation,setShowLocation]=useState(false);
    const showfiled=()=>{
        setShowLocation(!showLocation);
    }
    return (
        <div className="mainTab sign-form">
            <div className="buttons">
                <Button btnTitle="ورود"  chengeTab={handleTabs}/>
                <Button btnTitle="ثبت نام" classes={showLoginFOrm ?"btn":"btn__active"}  />
            </div>
             <h1 className="form__title titlesign">{formTitle}</h1>
             <form className="form_control form_sign">
                 <input type="text" placeholder="نام" /><input type="text" placeholder="نام خانوادگی" />
                 <input type="email" className="email" placeholder="پست الکترونیک"/><br />
                 <input type="password" placeholder="پسورد" className="pass" id="id_password"/>
                 <br />
                 <select type="select" className="select__degree" >
                 <option value="bacheler" onClick={showfiled}>دیپلم</option>
                 <option value="bacheler" onClick={showfiled}>کارشناسی</option>
                 <option value="bacheler" onClick={showfiled}> کارشناسی ارشد</option>
                 <option value="bacheler" onClick={showfiled}>دکتری</option>
                 </select>
                 {showLocation &&<input type="text" placeholder="محل تحصیلات" setShowLocation={showLocation}/>}
                 <Button classes="btn__submit btn__join" typeButton="submit" btnTitle="ثبت نام"/>
             </form>
        </div>
    )
}
export default Form_signin;