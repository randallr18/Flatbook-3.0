import { setCurrentUser } from '../redux/actions'

cons API_URL = 'http://localhost:3000/api/v1/';

export default class FlatbookAdapter {

  static loginUser = (username, password, setCurrentUser) => {
    fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accepct: 'application/json'
        },
        body: JSON.stringify({user: { username, password } })
      })
      .then(response => response.json())
      .then(({user, jwt}) => {
        localStorage.setItem('jwt', jwt)
        setCurrentUser(user)
      })
    }


}
