import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import CoursesOpen from './pages/CoursesOpen'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Pricing from './pages/Pricing'
import FarmerMotion from './FarmerMotion.jsx'
import { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import Cursor from './components/Cursor/Cursor.jsx'
import PageLoding from './PageLoding/PageLoding.jsx'
function App() {
  const location = useLocation();
  const [loding,setLoding] = useState(false)

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 1000);
  }, []);
  return (
    <>
    {loding ? <PageLoding/>: <>
      <Cursor/>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<FarmerMotion><Home/></FarmerMotion> } />
        <Route path='/about' element={<FarmerMotion><About/></FarmerMotion>} />
        <Route path='/pricing' element={<FarmerMotion><Pricing/></FarmerMotion>} />
        <Route path='/contact' element={<FarmerMotion><Contact/></FarmerMotion>} />
        <Route path='/courses' element={<FarmerMotion><Courses/></FarmerMotion>} />
        <Route path='/coursesopen/cours/:id' element={<FarmerMotion><CoursesOpen/></FarmerMotion>} />
        <Route path='/login' element={<FarmerMotion><Login/></FarmerMotion>} />
        <Route path='/signup' element={<FarmerMotion><SignUp/></FarmerMotion>} />
      </Routes>
    </>}
    </>
  )
}

export default App
