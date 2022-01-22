import Head from 'next/head'
import { useEffect, useState } from 'react';
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

  {/* <Head> */}
  {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet"/> */}
  {/* </Head> */}
  return (
    <div className="dark wholebody">
       {loading && <Animation/> }
       <h6>Shaikh Manik</h6>
       <p>Use mouse to move in space</p>
    </div>
  )
}
