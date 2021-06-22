import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar, IconImage } from './styled';
import Button from '@material-ui/core/Button';
import { goBack, goToLogin } from "../../routes/coordinator"
import { useHistory } from 'react-router';
import icon from "../../assets/icon.png"

const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token){
            logout()
            setRightButtonText("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }
    return (
        <AppBar position="static">
            <StyledToolBar>
                <IconImage src={icon} onClick={() => goBack(history)}/>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header