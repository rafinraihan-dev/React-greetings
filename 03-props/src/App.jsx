import React from 'react'
import Navbar from "./components/navbar";
import Card from "./components/card";

const App = () => {
  return (
    <div>
        {Navbar()}
        <div className='flexcards'>
        <Card /> {/*Ekhane problem hocche giye je ami ekadhik card banaite hoile same structure abar amar likhte hobe app.jsx e .abar div nite hobe abar same code likhte hobe .So thats not the solution .So what we can use is props .  */}

        <Card user="Premium Jacket" para="High Quality Fabrics.And More comfortable then you wear before." img="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <Card user="Basic T-shirt" para="High Quality Fabrics.And More comfortable then you wear before." img="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <Card user="Classic Jeans" para="High Quality Fabrics.And More comfortable then you wear before." img="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
    </div>
  )
}

export default App
