import React, { useEffect, useState , useContext} from 'react'
import {
   Card,
   CardBody,
   CardFooter,
   Typography,
   Button,
 } from "@material-tailwind/react";
 import axios from 'axios'
 import { MyContext } from '../context'

export const CardHuella = () => {
   const [data, setData]= useState()
   const {idUser, setIdUser}=useContext(MyContext)
console.log(idUser)
   useEffect(()=>{

      const getHuella =async()=>{
        try{
           const response = await axios.get(`https://backendnature-2.onrender.com/${idUser}`)
           setData(response.data)
           console.log(response.data);
        }catch(error){
           console.log(error);
        }
     }
     if(idUser){
       getHuella()
     }
   },[idUser])
  return (
   <>
   {data&&data.map((data)=>(
      <>
      <Card className="mt-6 w-96 p-4 m-4">
      
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Calculo de huella de carbono
        </Typography>
        <Typography>
         Total Transporte:
        </Typography>
        <Typography>
      {data.transport[0].total}
        </Typography>
        <Typography>
         Total Energía:
        </Typography>
        <Typography>
      {data.energy[0].total}
        </Typography>
        <Typography>
         Total Gas:
        </Typography>
        <Typography>
      {data.gas[0].total}
        </Typography>
        <Typography>
         Total Agua:
        </Typography>
        <Typography>
      {data.water[0].total}
        </Typography>
        <Typography>
         Emisiones Totales:
        </Typography>
        <Typography>
      {data.emissions}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </>
   )

   )}
 
   </>
  )
}
