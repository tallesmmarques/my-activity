import React, { useState, useEffect } from 'react'
import { Container, Box } from '@material-ui/core'

import api from '../../services/api';
import NameBox from './NameBox'
import FormName from './FormName'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => { //preencer users
    api.get('user').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <Box className="home">
      {users.map(user => 
        <NameBox 
          key={user._id}
          name={user.name}
          activity={user.activity}
          birth={user.birth}
        />
      )}

      <Container>
        <FormName/>
      </Container>

    </Box>
  );
}

export default Home;