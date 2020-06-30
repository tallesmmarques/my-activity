import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  makeStyles,
  Container
} from '@material-ui/core'
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormName() {
  const [formData, setFormData] = useState({
    name: '',
    activity: '',
    birth: ''
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData({ ...formData, [name]: value })
  }
  
  async function handleSubmit() {
    const data = formData

    await api.post('user', data)
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography variant="h4">
          Criar Personagem
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}> {/*name*/}
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                label="Nome Completo"
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}> {/*activity*/}
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Atividade"
                name="activity"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}> {/*birth*/}
              <TextField
                variant="outlined"
                required
                fullWidth
                name="birth"
                label="Nascimento"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                defaultValue="2020-04-05"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Criar
          </Button>
          
        </form>
      </div>
    </Container>
  );
}