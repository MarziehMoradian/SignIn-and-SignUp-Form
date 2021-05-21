import React,{useState} from 'react';
import Button from './Button';
import Form_login from './Form_login';
import Form_signin from './Form_signin';
import Enter from './Enter';
import Forgot from './Forgot';
import Succesee from './Succsess';

export const Main = () => {
    const [showSignFOrm,setShowSignForm]=useState(false);
    const [showLoginFOrm,setShowLoginForm]=useState(true);
    const [show,setShow]=useState(false);
    const [showForget,setShowForget]=useState(false);
    const [showInfo,setShowInfo]=useState(false);
    const changeTabs=()=>{
        setShowLoginForm(!showLoginFOrm);
        setShowSignForm(!showSignFOrm);
    }
   const Enterp=()=>{
       setShow(true);
       setShowLoginForm(false);
       setShowSignForm(false);
   }
   const forgetPass=()=>{
        setShowForget(true);
        setShowLoginForm(false);
        setShowSignForm(false);
   }
   const doneJoin=()=>{
        setShowInfo(true)
        setShowLoginForm(false);
        setShowSignForm(false);
   }
   
    return (
        <div className="main">
        
            {showLoginFOrm &&<Form_login formTitle="خوش آمدید" onChange={changeTabs} showSignFOrm={showSignFOrm} pageEnter={Enterp} pageForget={forgetPass}/>}
            {showSignFOrm &&<Form_signin formTitle="رایگان ثبت نام کنید" showLoginFOrm={showLoginFOrm} onChange={changeTabs} seccessPage={doneJoin}/>}               
            {show &&<Enter show={show} onClose={()=>setShow(false)}/>}
            {showForget &&<Forgot showForget={showForget} onClose={()=>setShowForget(false)} />}
            {showInfo && <Succesee showInfo={showInfo} />}
        </div>
    )
}

export default Main;
