import React, { useState } from 'react'
import {
   Card,
   Input,
   Checkbox,
   Button,
   Typography,
 } from "@material-tailwind/react";
export const Energy = ({setEnergia, consumoEnergia,setGas,setEnergy }) => {

 const handleClick=()=>{
  setGas(true)
  setEnergy(false)
 }

  return (
  <>
   <Card className="mt-6 w-96">
   <Typography variant="h4" color="blue-gray">
         Energía
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Consumo de energía generada 
          </Typography>
         
          <Typography variant="h6" color="blue-gray" className="-mb-3">
         Consumo(kilovatio)
          </Typography>
          <Input
          value={consumoEnergia}
          onChange={(e)=>setEnergia(e.target.value)}
            size="lg"
            type='number'
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         
          
        </div>
       
        <Button className="mt-6 bg-light-green-700 " fullWidth onClick={handleClick}>
          siguiente
        </Button>
        
      </form>
    </Card>
  </>
  )
}

