import { Button } from "@mui/material";

const FormButton = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ width: { xs: 250, md: 300, lg: 350 }, marginTop: 3 }}
    >
      {text}
    </Button>
  );
};

export default FormButton;
