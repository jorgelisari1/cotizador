import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import phone from '../assets/img/phone.png';
import { SectionMessage } from '../Components/Login/SectionMessage';
import { getInfo } from '../controller'
import '../styles/index.scss';
import { withStyles } from '@material-ui/styles';

const GreenCheckbox = withStyles({
    root: {
        color: '#43B748',
        '&$checked': {
            color: '#43B748',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#A3ABCC',
            fontFamily: 'Lato',
        },
        '& label': {
            color: '#A3ABCC',
            fontFamily: 'Lato'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #C5CBE0',
                borderRadius: '0px 4.02778px 4.02778px 0px'
            },
            '&:hover fieldset': {
                borderColor: '#C5CBE0',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#A3ABCC',
            },
        },
    },
})(TextField);

const CssTextField2 = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#A3ABCC',
            fontFamily: 'Lato',
        },
        '& label': {
            color: '#A3ABCC',
            fontFamily: 'Lato',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#C5CBE0',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #C5CBE0',
                borderRadius: '4.02778px 4.02778px 4.02778px 4.02778px',
            },
            '&:hover fieldset': {
                borderColor: '#C5CBE0',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#A3ABCC',
            },
        },
    },
})(TextField);

export const Login = () => {
    const history = useHistory();
    const [placa, setPlaca] = useState('');
    const [doc, setDoc] = useState('');
    const [celular, setCelular] = useState('');
    const [error, setError] = useState(false);
    const [errorDoc, setDocError] = useState(false);
    const [errorCliente, setErrorCliente] = useState(false);
    const [labelInput, setLabelInput] = useState("");
    const [labelDoc, setLabelDoc] = useState("");
    const [labelCelular, setLabelCelular] = useState("");
    const [checked, setChecked] = useState(true);
    const [user, setUserState] = useState({});

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        let mounted = true;
        getInfo('Luis', placa)
            .then((info) => {
                if (mounted) {setUserState(info)}
            })
            .catch((e) => console.error(e))
        return function cleanup() {
            mounted = false;
        };
    }, [placa]);

    const Cotizar = (e) => {
        e.preventDefault();
        if (/^[0-9]{8,}$/.test(doc) && doc !== "") {
            if (/\d{9,}/.test(celular)) {
                if (/^([A-Za-z]{2,3}-{0,1}\d{3})$/.test(placa)) {
                    setError(false);
                    history.replace({
                        pathname: `cotizador/continuar/`,
                        state: { placa: user.body }
                    });
                } else {
                    setError(true);
                    setLabelInput("El número de  Placa es invalido.")
                }
            } else {
                setLabelCelular("Por favor ingresa un número de celular valido ")
                setErrorCliente(true);
            }
        } else {
            setLabelDoc('El número de documento es invalido.');
            setDocError(true)
        }
    };

    return (
        <section className="content">
            <article className="content__header">
                <div className="content__header__logo" >
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="imagenPhone" > <img className="phone2" src={phone} alt="phone" /> <p className="Roboto mobile-login">Llámanos</p> </div>
                </div>
                <SectionMessage />
            </article>
            <article className="div-login" id="login" >
                <div className="phoneDesktop" >
                    <p className="Roboto">¿Tienes alguna duda?</p>
                    <img className="phone" src={phone} alt="phone" />
                    <p className="Roboto fontPhone" >(01) 411 6001</p>
                </div>
                <div className="form-login" >
                    <div className="center-text" > Déjanos tus datos </div>
                    <div className="divForm" >
                        <div className="dni" >
                            <div> DNI</div>
                            <div> <KeyboardArrowDownIcon className="Icondni"></KeyboardArrowDownIcon></div>
                        </div>
                        <CssTextField className="input-form2"
                            id="doc"
                            type="text"
                            label="Nro. de doc"
                            variant="outlined"
                            helperText={labelDoc}
                            error={errorDoc}
                            onChange={(e) => setDoc((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <div style={{ marginTop: '8px' }}>
                        <CssTextField2 className="input-form"
                            id="celular"
                            type="text"
                            variant="outlined"
                            label="Celular"
                            helperText={labelCelular}
                            error={errorCliente}
                            onChange={(e) => setCelular((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <div style={{ marginTop: '8px' }}>
                        <CssTextField2 className="input-form"
                            id="placas"
                            type="text"
                            label="Placa"
                            variant="outlined"
                            helperText={labelInput}
                            error={error}
                            onChange={(e) => setPlaca((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <div className="div-terms">
                        <GreenCheckbox checked={checked} onChange={handleCheck} name="checkedG" />
                        <p className="terms">Acepto la  <span className="span"> política de Protección de Datos Personales</span> y los  <span className="span">Términos y Condiciones.</span></p>
                    </div>
                    <button className="btn-login" type="button" onClick={(e) => Cotizar(e)} > COTÍZALO </button>
                </div>
            </article>
        </section>)};