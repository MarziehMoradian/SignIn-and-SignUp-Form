import React,{useState} from 'react';
import Button from './Button';
import Enter from './Enter';
import Fogot from './Forgot';
export const Form_login = ({formTitle,showSignFOrm,onChange,pageEnter,pageForget}) => {
    const  handleTabs=()=>{
        onChange();
    }
   const onAdd=()=>{
       pageEnter();
    }
    const fogorPage=()=>{
        pageForget();
    }

    return (
        <div className="mainTab">
            <div className="buttons">
                <Button btnTitle="ورود"  classes={showSignFOrm ?"":"btn__active" }  />
                <Button btnTitle="ثبت نام"  chengeTab={handleTabs}/>
            </div>
            <h1 className="form__title">{formTitle}</h1>
            <form className="form_control">
                <input type="email" placeholder="پست الکترونیک" className="input_email"/><br />
                <input type="password" placeholder="پسورد" className="input_pass" id="id_password"/>
                <br />
                <button className="forget_title"  onClick={fogorPage}> فراموش کردید؟</button>
                <Button typeButton="submit" classes="btn__submit" btnTitle="ورود" chengeTab={onAdd}/>
                
            </form>
        </div>
    )
}
export default Form_login;