import React, { useState } from 'react'
import {
   Card,
   Input,
   Button,
   Typography,
 } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
export const Water = ({setConsumoWater, consumoWater, setwater, handleSubmit}) => {

 const navigate = useNavigate()

 const handle=async(e)=>{
  navigate('/verhuella')
  handleSubmit(e)
 }

  return (
  <>
   <Card className="mt-6 w-96">
   <Typography variant="h4" color="blue-gray">
       Agua
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Consumo de agua 
          </Typography>
         
          <Typography variant="h6" color="blue-gray" className="-mb-3">
         Consumo(Litros)
          </Typography>
          <Input
            size="lg"
            value={consumoWater}
            onChange={(e)=>setConsumoWater(e.target.value)}
            type='number'
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         
          
        </div>
       
        <Button className="mt-6 bg-light-green-700 " fullWidth onClick={(e)=>handle(e)}>
   Guardar
        </Button>
        
      </form>
    </Card>
  </>
  )
}
