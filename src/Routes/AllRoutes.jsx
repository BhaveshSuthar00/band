import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from '../Components/Main'
import Login from '../Components/Login'
import Signin from '../Components/Signin'
import Flat from '../Components/Flat'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Main />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/signin"  element={<Signin />} />
        <Route path="/flat/:id"  element={<Flat />} />
    </Routes>
  )
}

export default AllRoutes