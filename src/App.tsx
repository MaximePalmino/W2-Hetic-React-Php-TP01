import React, { useEffect, useState } from 'react';
import './App.css';
import Subscribe from './components/Subscribe';

const App: React.FC= () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(true)
  const [type, setIsType] = useState<string>('')

  const data = new URLSearchParams({
    username: email,
    password: password,
    type: type
  })

  const headers = new Headers({
    'Authorization': `Basic ${btoa(`${email} ${password}`)}`,
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
  ).then(res => res.json())
  .then(data => 
    console.log(data)
    // setIsValid(false)
    ).catch(error => console.log(error));
  }

  useEffect(() => {

    response()

  }, [email, password])



  return (
    <div className="App">
      {isValid && (
      <Subscribe setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} />
      )}
    </div>
  );
}

export default App;
