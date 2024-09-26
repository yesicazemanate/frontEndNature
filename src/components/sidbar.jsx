import React from 'react'
import {
   Card,
   Typography,
   List,
   ListItem,
 } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export const Sidbar = () => {
  const navigate= useNavigate()
  const handleCalculadora = ()=>{
navigate('/verhuella')
  }
  const handleRetos=()=>{
    navigate('/veretos')
  }
  return (
    <>
     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
     
        <ListItem onClick={handleCalculadora}>
       Calculadora
        </ListItem>
     
        <ListItem onClick={handleRetos}>
   Retos
        </ListItem>
        <ListItem>
          Log Out
        </ListItem>
      </List>
    </Card>
    </>
  )
}
