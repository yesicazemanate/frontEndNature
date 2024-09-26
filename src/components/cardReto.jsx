import React ,{useEffect, useState}from 'react'
import {
   Card,
   CardBody,
   CardFooter,
   Typography,
   Button,
 } from "@material-tailwind/react";
 import axios from 'axios';
export const CardReto = () => {
   const [data, setData]= useState()
   const[semilla, setSemilla]= useState()
   const[retoño, setRetoño]= useState()
   const [menor, setMenor]=useState()
   const [adulto, setAdulto]=useState()
   const [sumaPuntaje, setSumaPuntaje]= useState()
  useEffect(()=>{
const datos=async()=>{
const response= await axios.get('https://backendnature-2.onrender.com/tree/')

let sumaTotal = 0;

response.data.forEach((data) => {
  sumaTotal += data.points;
});
if(sumaTotal<30){
   setMenor(false);
   setRetoño(false);
   setSemilla(true);
   setAdulto(false);
}else if (sumaTotal >= 100) {
   setMenor(false);
   setRetoño(false);
   setSemilla(false);
   setAdulto(true);
 } else if (sumaTotal >= 60) {
   setRetoño(false);
   setSemilla(false);
   setAdulto(false);
   setMenor(true);
 } else if (sumaTotal >= 30) {
   setSemilla(false);
   setAdulto(false);
   setMenor(false);
   setRetoño(true);
 }
setSumaPuntaje(sumaTotal);
}

datos()
  },[data])
  console.log(sumaPuntaje);
  return (
   <>
   <Card className="mt-6 w-96">
      <Typography>Puntaje:</Typography>
      {sumaPuntaje}
      <>
     {semilla&&(

      <img src='/semilla.png'/>
     )
      }
</>
<>
     {retoño&&(

      <img src='/retoño.png'/>
     )
      }
</>
<>
     {menor&&(

      <img src='/menor.png'/>
     )
      }
</>
<>
     {adulto&&(

      <img src='/image.png'/>
     )
      }
</>
     

   
    </Card>
   </>
  )
}
