import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const AddTripModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');

  const handleAdd = () => {
    if (name.length) {
      props.handleAdd(name);
      setName('');
    }
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.toggleOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Trip</DialogTitle>
      <DialogContent>
        <DialogContentText>What do you want to name this Trip?</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          onChange={handleNameInput}
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.toggleOpen(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Lets Belt!
        </Button>
      </DialogActions>
    </Dialog>
  );
};
