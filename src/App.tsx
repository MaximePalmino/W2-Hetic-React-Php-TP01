import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import WritePost from './components/WritePost';
import axios from 'axios';
import PostsList from './components/PostsList';

const App: React.FC = () => {

  // REGISTER
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const [type, setIsType] = useState<string>('')
  const [responseData, setResponseData] = useState<string[]>([])

  // Write post
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [author, setNewAuthor] = useState<string>('authorcccc') 

  const data = new URLSearchParams({
    username: email,
    password: password,
    type: type,
    title: title,
    content: content,
    author: "l'auteur"
  })

  const headers = new Headers({
    'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  })

  const response = () => {
    // if (email && password != '') {
      fetch('http://localhost:2345/', {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: data,
        mode: 'cors',
      })
    .then(res => res.text())
    .then(data => {
      setResponseData(prev => [...prev, data])
      if (responseData != []) {
        console.log(responseData)}

      }
      ).catch(error => console.log(error));
    // }
  }

  useEffect(() => {
  response()
    console.log(isValid)
  }, [email, password])


  useEffect(() => {
    response()

    console.log(type)
  }, [title])

  useEffect(() => {
    axios.get('http://localhost:2345/getPost.php')
    .then(res=> console.log(res.data))
    .catch(err => console.log(err))
  })

  //   fetch('http://localhost:2345/writePost.php')
  //   .then(response => response.json())
  //   .then(data => console.log(data));  
    
  // })
  return (


    <div className="App">
  
      <Subscribe setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} type={type} />
      <Login setEmail={setEmail} setPassword={setPassword} email={email} password={password} setIsType={setIsType} />
      <WritePost setTitle={setTitle} setContent={setContent} setIsType={setIsType} />
      <PostsList />
    </div>

  );
}

export default App;
