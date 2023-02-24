import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Login from './components/login/login';
import ErrorPage from './components/error-page/error';
import Homepage from './components/home/homepage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ErrorPage />
            }></Route>
          <Route
            path='login'
            element={
              <Login />
            }></Route>
          <Route
            path='home'
            element={
              <Homepage />
            }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
