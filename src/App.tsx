import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Subscribe from './components/Subscribe';


const App: React.FC = () => {

  // REGISTER
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const [type, setIsType] = useState<string>('')


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
    if (email && password != '') {
      fetch('http://localhost:2345/', {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: data,
        mode: 'cors',
      })
    .then(res => res.text())
    .then(data => 
      
      setIsValid(true)
      // setToken(data)
      ).catch(error => console.log(error));

    }


  }
  console.log(isValid)

  useEffect(() => {

    response()
    console.log(isValid)

  }, [email, password])



  return (
    <div className="App">
  
      <Subscribe setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} type={type} />
      {/* <Login setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} /> */}

      {isValid  && (
        <>
          <h1>hye</h1>
        </>
      )}
    </div>
  );
}

export default App;
