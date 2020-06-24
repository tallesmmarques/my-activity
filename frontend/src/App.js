import React, { useState, useEffect } from 'react';
import api from './services/api';
import NameBox from './components/nameBox'
import FormName from './components/formName'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => { //preencer users
    api.get('user').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <>
      <div className="names">
        {users.map(user => 
          <NameBox 
            key={user._id}
            name={user.name}
            activity={user.activity}
            birth={user.birth}
          />
        )}
      </div>
      
      <div className="createName">
          <FormName/>
      </div>
    </>
  );
}

export default App;
