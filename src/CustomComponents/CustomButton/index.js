import React from 'react';
import Button from '@mui/material/Button';
// import "./styles.css";

const CustomButton = (props) => {
    return (
        <Button {...props} title={props?.btnTitle} className={props.btnType==='primary'?"primaryBtn":(props.btnType==="secondary"?"secondaryBtn":"errorBtn")}>{props?.btnName}</Button>
    )
}

export default CustomButton
