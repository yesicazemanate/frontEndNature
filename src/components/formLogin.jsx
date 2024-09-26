import  { useState, useEffect } from 'react'
import {Card,Input,Button,Typography,} from "@material-tailwind/react";
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const FormLogin = () => {
  const navigate= useNavigate()
   const[email, setEmail]=useState()
   const[password, setPassword]=useState()
   const [error, setError]= useState()
   const handleSubmit=async()=>{
      try{
        const response= await axios.post('http://localhost:3000/user/login',{email,password})
        console.log(response);
        if (response.data && response.data.token) {
          Cookies.set('token', response.data.token, { expires: 7 });
          setError(false);
         
            navigate('/verhuella');
          
        } else {
          setError(true);
        }
      } catch(error) {
        setError(true);
        console.log(error);
      }
    
      
   }
   const handle=()=>{
    navigate('/register')
   }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  return (
   <>
      <div className="h-[100vh] flex justify-center items-center bg-green-400">
        <div className='font-bold mx-2 text-center'>
          <div className='border rounded-md p-6 bg-white'>
            <h1 className='text-center text-2xl'>Nature Flow</h1>
            <img src={logo} alt="logo" className='w-1/2 mx-auto -mb-10'/>
            <div>
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='mt-AUTO'>
                    <h1 className='text-left mb-3 mt-2'>Correo Electronico</h1>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correoelectronico" className="w-11/12  focus:!border-green-500 bg-white" 
                    labelProps={{ className: "before:content-none after:content-none", }}/>
                  </div>
                  <div>
                    <h1 className='text-left mb-3 mt-'>Contrasena</h1>
                    <Input size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contrasena" className="w-11/12 focus:!border-green-500 bg-white"
                    labelProps={{ className: "before:content-none after:content-none", }}/>
                    {error && (<Typography className='text-red-500 font-normal'>Usuario o contraseña incorrectos</Typography>)}
                    <button className="mt-6 bg-green-400  w-11/12 p-2 rounded-lg text-white" type='submit'>Iniciar sesion</button>
                    <button onClick={handle} color="blue-gray" className="-mb-3">¿No tienes cuenta registrate?</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
