import React from 'react';
export const Button = ({classes,btnTitle,typeButton,chengeTab}) => {
    return (
            <div className="buttons">
                <button className={`btn ${classes}`} type={typeButton} onClick={chengeTab}>{btnTitle}</button>
            </div>
    )
}
export default Button;
