import React from 'react';
import Button from './Button';
import Form from './Form_signin';

const Succsess = ({readPro,...props}) => {
    if(!props.showInfo){
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modalheader">
                    <h4 className="modaltitile">ثبت نام با موفقیت انجام شد</h4>
                </div>
               <div className="modal-body">
                   نام:<h3>{props.readPro}</h3>
                   نام خانوادگی:<h3>{props.readPro}</h3>
                    نام کاربر:<h3>{props.readPro}</h3>
                    رمزعبور:<h3>{props.readPro}</h3>
               </div>
               <div className="modal-footer">
              
               </div>
            </div>
           
        </div>
    )
}
export default Succsess; 