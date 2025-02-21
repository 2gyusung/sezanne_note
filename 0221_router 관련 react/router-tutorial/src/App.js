import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router'
import './App.scss'
import Profile from './pages/Profile'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Layout from './Layout'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Mypage from './pages/Mypage'


const App = () => {
  return (
   <Routes>
    <Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path={'/about'} element={<About/>}/>
    <Route path={'/profiles/:username'} element={<Profile/>}/>
    </Route>
    
    <Route path={'/articles'} element={<Articles/>}>
    <Route path={':id'} element={<Article/>}/> 
    </Route>
   <Route path={'/login'} element={<Login/>}/>
   <Route path={'/mypage'} element={<Mypage/>}/>
   <Route path={'*'} element={<NotFound/>}/>
    
   </Routes>
  )
}

export default App
