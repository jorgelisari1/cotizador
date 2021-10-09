import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {CardCobertura} from '../../Components/Continuar/CardCobertura';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import '../../styles/tabsCoverturas.scss'
import img_theft from '../../assets/img/icon_theft.png';
import img_damage from '../../assets/img/icon_damage.png';
import img_perdidaTotal from '../../assets/img/icon_perdidatotal.png';

const LabelTab = ({text}) => ( <React.Fragment><span className ="labelTab">{text}</span></React.Fragment>);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const dataCovertura  = [
  {img: img_theft,
  name:'Llanta robada',
  desc:'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
  check: false
  },
  {img: img_damage,
  name:'Choque y/o pasarte la luz roja',
  desc:'',
  check: false
  },
  {img: img_perdidaTotal,
  name:'Atropello en la vía evitamiento',
  desc:'',
  check: false
  },
] 

export const TabsCoberturas = ({count, monto, setMonto}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="box">
      <div className="text-add-remove-coverage">
        Agrega o quita coberturas
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="wrapped label tabs example"
        sx={{ borderBottom: 1, borderColor: 'divider'  }}
        className="tabs"
      >
        <Tab label= {<LabelTab text= "PROTEGE A TU AUTO"/>} />
        <Tab label={<LabelTab text= "PROTEGE A LOS QUE TE RODEAN"/>}/>
        <Tab label={<LabelTab text= "MEJORA TU PLAN"/>} />
      </Tabs>
     
        <TabPanel value={value} index={0} dir={theme.direction} className="tabs">
        {
          
          dataCovertura.map((elem)=>{
            return <CardCobertura key={elem.img} img={elem.img} name={elem.name} desc={elem.desc} count={count} check={elem.check} monto={monto} setMonto={setMonto}/>
          })
        }
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className="tabs">
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className="tabs">
          Item Three
        </TabPanel>
    </Box>
  );
}

TabsCoberturas.propTypes =  { 
                                count: PropTypes.number,
                                monto: PropTypes.number,
                                setMonto: PropTypes.func,
                            };
LabelTab.propTypes =  { text: PropTypes.string }