import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { TypeChanged } from '../actions/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [type, setType] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    dispatch(TypeChanged(type));
  };


  return (
     <List className={classes.root}>
      <ListItem>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'pizza'}>pizza</MenuItem>
          <MenuItem value={'burger'}>burger</MenuItem>
          <MenuItem value={'chicken'}>chicken</MenuItem>
        </Select>
      </FormControl>
      </ListItem>
      <ListItem>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
     Apply
    </Button>
      </ListItem>
 
    </List>
  );
}