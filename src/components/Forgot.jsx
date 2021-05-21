import React from 'react';
import Button from './Button';
const Forgot = props => {
    if(!props.showForget){
        return null
    }
    console.log("hleoo");
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modalheader">
                    <h4 className="modaltitile">بازیابی کلمه عبور</h4>
                </div>
               <div className="modal-body">
                  <form className="form_control">
                      <input type="email" className="email_input"/>
                      <Button classes="btn__close" chengeTab={props.onClose} btnTitle="بازیابی" typeButton="submit"/>
                  </form>
               </div>
               <div className="modal-footer">
               </div>
            </div>
           
        </div>
    )
}
export default Forgot; 