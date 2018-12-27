
const API_URL = 'http://localhost:3000/api/v1/';

export default class FlatbookAdapter {

  static getToken() {
    return localStorage.getItem('jwt');
  }

  static loginUser = (username, password, setCurrentUser) => {
    fetch(`${API_URL}/login`, {
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
