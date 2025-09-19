import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

const TextInput = ({ id, name, placeholder, value, onChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="name-input" sx={{ marginLeft: 0, marginTop: 3 }}>
        {placeholder}
      </InputLabel>
      <OutlinedInput
        sx={{
          width: { xs: 250, md: 300, lg: 350 },
          marginLeft: 0,
          marginTop: 3,
        }}
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default TextInput;
