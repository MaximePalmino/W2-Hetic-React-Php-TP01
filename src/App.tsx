import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Subscribe from './components/Subscribe';


const App: React.FC = () => {

  // REGISTER
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(true)
  const [type, setIsType] = useState<string>('')
  const [token, setToken] = useState<any>()


  const data = new URLSearchParams({
    username: email,
    password: password,
    type: type
  })

  const headers = new Headers({
    'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  })

  const response = () => {

    fetch('http://localhost:2345/', {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      body: data,
      mode: 'cors',
    }
  ).then(res => res.text()).then(data => 
    console.log(data)
    // setToken(data)
    )
    .catch(error => console.log(error));


  }
  

  useEffect(() => {

    response()
    // setTimeout(() => {
    //   console.log([...token])
    // }, 1000)

  }, [email])



  return (
    <div className="App">
      <Subscribe setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} type={type} />
      {/* <Login setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} /> */}
    </div>
  );
}

export default App;
