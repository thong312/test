import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField, Typography, FormControlLabel, Switch, Button, DialogActions, Alert, AlertTitle, Dialog, DialogTitle, DialogContent, DialogContentText, Card } from '@mui/material';

function Add() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const baseURL = 'https://64901c9c1e6aa71680ca9a2f.mockapi.io/Players';
  const formik = useFormik({
    initialValues: {
      name: '',
      nation: '',
      club: '',
      age: '',
      clip: '',
      info: '',
      img: '',
      top: false,
    },
    onSubmit: (values) => {
      fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required.').min(2, 'Must be 2 characters or more'),
      nation: Yup.string().required('Required.').min(2, 'Must be 2 characters or more'),
      club: Yup.string().required('Required.').min(2, 'Must be 2 characters or more'),
      age: Yup.number().integer().typeError('Please type a number.'),
      info: Yup.string().required('Required.').min(10, 'Must be 10 characters or more'),
      clip: Yup.string().required('Required.').min(10, 'Must be 10 characters or more'),
      img: Yup.string().required('Required.').min(10, 'Must be 10 characters or more'),
    }),
  });

  return (
    <Card sx={{ backgroundColor: '#f5f5f5', padding: '1rem', marginBottom: '45px' }}>
       <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'4rem'
            }}
          >
            ADD CHARACTERS
          </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <Typography variant="caption" color="error">{formik.errors.name}</Typography>}
        <TextField
          margin="dense"
          name="nation"
          label="Game"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.nation}
          onChange={formik.handleChange}
        />
        {formik.errors.nation && <Typography variant="caption" color="error">{formik.errors.nation}</Typography>}
        <TextField
          margin="dense"
          name="club"
          label="Nation"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.club}
          onChange={formik.handleChange}
        />
        {formik.errors.club && <Typography variant="caption" color="error">{formik.errors.club}</Typography>}
        <TextField
          margin="dense"
          name="img"
          label="URL of image"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.img}
          onChange={formik.handleChange}
        />
        {formik.errors.img && <Typography variant="caption" color="error">{formik.errors.img}</Typography>}
        <TextField
          margin="dense"
          name="age"
          label="Age"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {formik.errors.age && <Typography variant="caption" color="error">{formik.errors.age}</Typography>}
        <TextField
          margin="dense"
          name="clip"
          label="Intro video"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.clip}
          onChange={formik.handleChange}
        />
        {formik.errors.clip && <Typography variant="caption" color="error">{formik.errors.clip}</Typography>}
        <TextField
          multiline
          rows={2}
          margin="dense"
          name="info"
          label="Information"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.info}
          onChange={formik.handleChange}
        />
        {formik.errors.info && (
          <Typography variant="caption" color="error" display="block">
            {formik.errors.info}
          </Typography>
        )}
        <br />
        <Button variant="contained" size="small" type="submit" style={{ width: '150px' }}>
          Add
        </Button>
        <Button variant="outlined" component={Link} to="/dashboard" style={{ width: '150px' }}>
          Dashboard
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">Congratulation</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Alert severity="success">
                <AlertTitle>Adding successful!</AlertTitle>
              </Alert>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                Dashboard
              </Link>
            </Button>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Card>
  );
}

export default Add;
