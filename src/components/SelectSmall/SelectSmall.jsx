import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectSmall({ title, apiUrl, idSelect, value, setValue }) {
  const [options, setOptions] = useState([]);

  const getOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(apiUrl, getOptions);
        const data = await response.json();
        setOptions(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOptions();
  }, [apiUrl]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menuItems = options.map((option) => ({
    value: option[`${title}Id`],
    label: option[`${title}Nombre`],
  }));

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{title}</InputLabel>
      <Select
        labelId="demo-select-small"
        id={`${idSelect}`}
        value={value}
        label={title}
        onChange={handleChange}
      >
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.value} value={menuItem.value}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectSmall;