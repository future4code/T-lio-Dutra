import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar, IconImage } from './styled';
import Button from '@material-ui/core/Button';
import { goBack, goToLogin } from "../../routes/coordinator"
import { useHistory } from 'react-router';
import icon from "../../assets/icon.png"




const Header = () => {
    const history = useHistory()
    return (
        <AppBar position="static">
            <StyledToolBar>
                <IconImage src={icon} onClick={() => goBack(history)}/>
                <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header