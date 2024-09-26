import React, { useEffect, useState ,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidbar } from '../components/sidbar'
import { Button } from '@material-tailwind/react'
import { CardHuella } from '../components/cardHuella'
import axios from 'axios'
import Cookies from 'js-cookie';
import { MyContext } from '../context'

export const VerRegistroHuella = () => {
   const navigate = useNavigate()
   const {setIdUser}=useContext(MyContext)
   const token = Cookies.get('token')
   console.log(token)

   useEffect(()=>{
      if(token){
         const data=async()=>{
            const response = await axios.post('http://localhost:3000/user/decode',{},{
               headers: {
                  'Authorization': `Bearer ${token}`
                }
            }
            )
            console.log(response)
            setIdUser(response.data.id)
          }
          data()
      }
   },[token])

   const handleClick = async()=>{
      navigate('/calculator')
   }
  
  return (
    <>
    <div className='flex -flex-row'>
<Sidbar/>
<div className='flex flex-col'>
   <Button className='bg-light-green-700' onClick={handleClick}>Calcular Huella</Button>
<div className='m-5'>
   Promedio de 40 a 60 Kilogramos de CO2 por semana
</div>
<div className='flex flex-wrap justify-center gap-6'>
<CardHuella/>
</div>
</div>
    </div>
    </>
  )
}
