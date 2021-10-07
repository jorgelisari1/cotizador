import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: '2019',
    label: '2019',
  },
  {
    value: '2020',
    label: '2020',
  },
  {
    value: '2021',
    label: '2021',
  },
  {
    value: '2022',
    label: '2022',
  },
];

const currencies2 = [
  {
    value: 'Ford',
    label: 'Ford',
  },
  {
    value: 'Porsche',
    label: 'Porsche',
  },
  {
    value: 'Toyota',
    label: 'Toyota',
  },
  {
    value: 'BMW',
    label: 'BMW',
  },
];

export const Selects= () => {
  const [currency, setCurrency] = React.useState('2019');
  const [currency2, setCurrency2] = React.useState('Ford');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange2 = (event) => {
    setCurrency2(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
    
      <div style={{ marginBottom:'25px'}}>
        <TextField
          id="outlined-select-currency"
          select
          label="Año"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Marca"
          value={currency2}
          onChange={handleChange2}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
