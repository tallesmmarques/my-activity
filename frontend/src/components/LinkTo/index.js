import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

function LinkTo({content, to}) {
  return (
    <Link 
      to={to} 
      component={RouterLink}
      color='inherit' 
    >
      {content}
    </Link>
  );
}

export default LinkTo;