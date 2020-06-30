import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import LinkTo from '../LinkTo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar() {
  const classes = useStyles()

  return (
    <div>
      <AppBar className={classes.root} >

        <Toolbar>
          <LinkTo to='/' content={
            <Typography variant='h5'>
              My Activity
            </Typography>
          } />
          <span className={classes.title}></span>
          
          <LinkTo to='/register' content={
            <Button
              color='inherit' 
              variant='outlined'
            >add your activity
            </Button>
          } />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;