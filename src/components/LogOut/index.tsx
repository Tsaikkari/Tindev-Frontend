import LocalStorage from '../../local-storage'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const styles = {
  customButton: {
    backgroundColor: '#6f42c1',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
  },
}

const LogOut = () => {
  const history = useHistory()
  const deleteTokenFromLocalStorage = () => {
    LocalStorage.removeToken()
    history.push('/')
  }

  return (
    <Button
      style={styles.customButton}
      onClick={() => deleteTokenFromLocalStorage()}
    >
      Log Out
    </Button>
  )
}
export default LogOut
