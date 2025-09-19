import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmDelete = ({ itemType, itemName, open, close, handleDelete }) => {
  //   const [open, setOpen] = useState(false);

  return (
    <Box>
      <Dialog open={open} onClose={close} aria-labelledby="delete-dialog-title">
        <DialogTitle>Confirm Delete Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Do you want to delete the selected ${itemType}: ${itemName} `}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConfirmDelete;
