import React from "react";
import { Autocomplete, TextField } from "@mui/material";
const states = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];
const AutocompleteList = () => {
  return (
    <div>
      <Autocomplete
        sx={{ width: 300 }}
        options={states}
        renderInput={(params) => (
          <TextField {...params} label="List of States" />
        )}
      />
    </div>
  );
};

export default AutocompleteList;
