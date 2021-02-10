import React from 'react'
import { ListGroup } from 'react-bootstrap'

import User from './User'

const UsersList = ({ users }: any) => {
  return (
    <ListGroup className="users">
      {users.length > 0 ? (
        users.map((user: any) => (
          <User
            key={user.id}
            name={user.name}
            image={user.image}
          />
        ))
      ) : (
        <h5 className="no-users">No Users</h5>
      )}
    </ListGroup>
  )
}

export default UsersList
