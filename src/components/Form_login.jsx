import React from 'react';
import Button from './Button';
export const Form_login = ({formTitle,showSignFOrm,onChange,showLoginFOrm}) => {
    const  handleTabs=()=>{
        onChange();
    }
    return (
        <div className="mainTab">
            <div className="buttons">
                <Button btnTitle="ورود"  classes={showSignFOrm ?"":"btn__active" } />
                <Button btnTitle="ثبت نام"  chengeTab={handleTabs}/>
            </div>
            <h1 className="form__title">{formTitle}</h1>
            <form className="form_control">
                <input type="email" placeholder="پست الکترونیک" className="input_email"/><br />
                <input type="password" placeholder="پسورد" className="input_pass" id="id_password"/>
                <br />
                <p className="forget_title"><a href="">فراموش کردید؟</a></p>
                <Button typeButton="submit" classes="btn__submit" btnTitle="ورود" />
            </form>
        </div>
    )
}
export default Form_login;