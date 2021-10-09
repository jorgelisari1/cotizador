/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../styles/card.scss';


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
                border: 0
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5
            }
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff"
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600]
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3
        }
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500
        })
    }
}));

export const CardCobertura = (props) => {
    console.log(props.check, 'hchehhe')
    const [valor, setValor] = React.useState(props.check);
    const [open, setOpen] = React.useState(false);
    const change = () =>{
        setValor(!valor)
        if( props.name === 'Choque y/o pasarte la luz roja'){
            if(!valor){
                props.setMonto(props.monto+20);
            }else{
                props.setMonto(props.monto-20);
            }   
          
         }
        if( props.name === 'Llanta robada'){
            if(!valor){
                props.setMonto(props.monto+15);
            }else{
                props.setMonto(props.monto-15);
            }   
          
         }
         if(props.name === 'Atropello en la vía evitamiento'){
            if(!valor){
                props.setMonto(props.monto+50);
            }else{
                props.setMonto(props.monto-50);
            }  
         }
        };
   
    useEffect(() => {
        if(props.count > 16000 && props.name === 'Choque y/o pasarte la luz roja' && valor){
            setValor(false);
            props.setMonto(props.monto-20);
         }
         
      }, [props.count]);

    
    return (<React.Fragment>
        <div className="cardCovertura">
            <img src={props.img} alt={props.name} />
            <div className="text-name-covertura">{props.name}</div>
            <div >
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} />}
                    label=""
                    onChange={() => {change()}}
                    checked={valor}
                />
            </div>
        </div>
        <div className="vermas">
            <div></div>
            {
                (!open) ?
                    <div className="text-vermas-close">VER MÁS <KeyboardArrowDownIcon onClick={() => { setOpen(true) }} /> </div> :
                    <div >
                        <div className="text-vermas-desc">{props.desc}
                        </div>
                        <div className="text-vermas-open">
                            VER MENOS <KeyboardArrowUpIcon onClick={() => { setOpen(false) }} />
                        </div>
                    </div>
            }


        </div>
    </React.Fragment>);
}
