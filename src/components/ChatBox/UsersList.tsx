import React from 'react'
import { ListGroup } from 'react-bootstrap'

import User from './User'

const UsersList = ({ users }: any) => {
  return (
    <ListGroup className="users">
      {users.length > 0 ? (
        users.map((user: any) => (
          <User name={user.name} createdAt={user.createdAt} />
        ))
      ) : (
        <h5 className="no-users">No Users</h5>
      )}
    </ListGroup>
  )
}

export default UsersList
