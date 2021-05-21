import React from 'react';
import Button from './Button';
const Enter = props => {
    if(!props.show){
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modalheader">
                    <h4 className="modaltitile">ورود با موفقیت انجام شد</h4>
                </div>
               <div className="modal-body">
                  ورود شما با موفقیت انجام شد
               </div>
               <div className="modal-footer">
               <Button classes="btn__close" chengeTab={props.onClose} btnTitle="بازگشت به صفحه اصلی" typeButton="submit"/>
               </div>
            </div>
           
        </div>
    )
}
export default Enter; 