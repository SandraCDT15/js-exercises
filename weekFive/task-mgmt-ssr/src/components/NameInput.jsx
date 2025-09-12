import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

const NameInput = ({ name, value, onChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="name-input" sx={{ marginLeft: 0, marginTop: 3 }}>
        Name
      </InputLabel>
      <OutlinedInput
        sx={{
          width: { xs: 250, md: 300, lg: 350 },
          marginLeft: 0,
          marginTop: 3,
        }}
        id="name-input"
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default NameInput;
