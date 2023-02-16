import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function SelectSmall(props) {
    const [valor, setValor] = React.useState('');
  
    const handleChange = (event) => {
      setValor(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">{props.title}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={valor}
          label={props.title}
          onChange={handleChange}
        >
          {props.menuItems.map((menuItem) => (
            <MenuItem key={menuItem.value} value={menuItem.value}>{menuItem.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  export default SelectSmall;