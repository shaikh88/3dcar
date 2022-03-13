import Head from 'next/head'
import { useEffect, useState } from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Animation from '../components/Animation';


export default function App() {

  const themes = ['light' , 'dark']
  const [theme, setTheme] = useState('dark')
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => setLoading(true),[]);

  const sendEmail = async() => {
    let res = await fetch('/api/sendemail',{
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify("Hello there I am the response")
    })
    let result  = await JSON.parse(res);
    console.log(result);
  }

  return (
    <>
     <Head> 
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ='true'/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet"/> 
    </Head> 
    <Body />
    </>
  )
}
