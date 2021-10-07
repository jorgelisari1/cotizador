import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import '../styles/card.scss';


export const Gas = () =>{
  return (
    <div className= "content-gas">
      <div>¿Tu auto es a gas?</div>
      <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="no">
      <FormControlLabel value="si" control={<Radio color="primary" />} label="Sí" />      
        <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}
     