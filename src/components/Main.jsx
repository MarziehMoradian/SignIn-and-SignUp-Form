import React,{useState} from 'react';
import Button from './Button';
import Form_login from './Form_login';
import Form_signin from './Form_signin';

export const Main = () => {
    const [showSignFOrm,setShowSignForm]=useState(false);
    const [showLoginFOrm,setShowLoginForm]=useState(true);
    const changeTabs=()=>{
        setShowLoginForm(!showLoginFOrm);
        setShowSignForm(!showSignFOrm);
        
        
    }
    // const handleChenge=()=>{
    //     onChange()
    // }
    return (
       <div className="main">
           
               {/* <div className="buttons">
               <Button btnTitle="ورود" chengeTab={handleChenge} chengeTab={onChange} />
               <Button btnTitle="ثبت نام" />
               </div> */}
              {showLoginFOrm &&<Form_login formTitle="خوش آمدید" onChange={changeTabs} showSignFOrm={showSignFOrm}/>}
              {showSignFOrm &&<Form_signin formTitle="رایگان ثبت نام کنید" showLoginFOrm={showLoginFOrm} onChange={changeTabs}/>}               
           {/* <div className="mainTab">
                <div className="buttons">
                    <Button btnTitle="ورود"/>
                    <Button btnTitle="ثبت نام" />
               </div>
               <Form_login formTitle="خوش آمدید"/>
           </div> */}
       </div>
    )
}

export default Main;
