import React from 'react';
import { Box, Paper, makeStyles } from '@material-ui/core';

import FormName from './FormName'
import TopBar from '../../components/TopBar'

const useStyles = makeStyles(theme => ({
  paper: {
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    },
    [theme.breakpoints.up('sm')]: {
      width:450
    },
    [theme.breakpoints.up('lg')]: {
      width:600
    },
    margin: 'auto',
    padding: 20
  }
}))

function Register() {
  const classes = useStyles()

  return (
    <Box>
      <TopBar/>
  
      <Box mt={18}>
        <Paper className={classes.paper} variant='outlined'>
          <FormName/>
        </Paper>
      </Box>
    </Box>
  )
}

export default Register;