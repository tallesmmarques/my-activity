import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core'

import api from '../../services/api';
import NameBox from './NameBox'
import TopBar from '../../components/TopBar'


function Home () {
  const [users, setUsers] = useState([])
  const [removed, setRemoved] = useState(0)
  
  useEffect(() => { //preencer users
    api.get('user').then(response => {
      setUsers(response.data)
      setRemoved(0)
    })
  }, [removed])

  async function handleRemove(itemId) {
    await api.delete(`user/${itemId}`).then(() => {
        setRemoved(1)
    })
  }
  
  return (
    <Box className="home">
      <TopBar/>
      
      <Box mt={12}>
        <Grid
          item
          container
          justify='center'
          direction='column'
          alignItems='center'
        >
          {users.map(user => 
            <NameBox 
              key={user._id}
              id={user._id}
              onRemove={handleRemove}
              name={user.name}
              activity={user.activity}
              birth={user.birth}
            />
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;