import React, { useEffect, useState } from 'react';
import './App.css';
import Subscribe from './components/Subscribe';

const App: React.FC= () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  useEffect(() => {

    const data = new URLSearchParams({
      username: email,
      password: password
    })

    const headers = new Headers({
      'Authorization': `Basic ${btoa(`${email} ${password}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    fetch('http://localhost:2345/', {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      body: data,
      mode: 'cors',
    }
  ).then(res => res.json())
  .then(data => console.log(data));
  }, [email])



  return (
    <div className="App">
      <Subscribe setEmail={setEmail} setPassword={setPassword} email={email} password={password} />
    </div>
  );
}

export default App;
