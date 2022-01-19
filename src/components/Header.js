import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {
    createTheme, makeStyles,ThemeProvider
} from "@material-ui/core/styles"
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles((theme) => ({
   title: {
       flex: 1,
       color: "gold",
       fontFamily: "Montserrat",
       fontWeight: "bold",
       cursor: "pointer",
   }
}))

function Header(){

    const classes = useStyles();
    const history = useHistory();

    const { currency,setCurrency } = CryptoState();

    console.log(currency); 

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',

            },
            type:"dark",
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
       <AppBar color='transparent' position='static'>
           <Container>
               <Toolbar>
                   <Typography onClick={()=> history.push("/")}
                    className={classes.title}
                    variant='h6'
                    >
                       Crypto Hunter
                   </Typography>
                   <Select variant='outlined' style={{
                       width: 100,
                       height: 40,
                       marginRight: 15,
                   }}
                   value={currency}
                   onChange={(e) => setCurrency(e.target.value)}
                   >
                       <MenuItem value={"USD"}>USD</MenuItem>
                       <MenuItem value={"INR"}>INR</MenuItem>
                   </Select>
               </Toolbar>
           </Container>

       </AppBar>
       </ThemeProvider>
    )
}

export default Header