import React, { useState } from 'react'
import {
   Card,
   Input,
   Button,
   Typography,
 } from "@material-tailwind/react";
export const Gas = ({consumoGas,setConsumoGas,setwater,setGas}) => {
const handleClick=()=>{
  setwater(true)
  setGas(false)
}

  return (
  <>
   <Card className="mt-6 w-96">
   <Typography variant="h4" color="blue-gray">
    Gas
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Consumo de gas
          </Typography>
         
          <Typography variant="h6" color="blue-gray" className="-mb-3">
         Consumo(metros cúbicos)
          </Typography>
          <Input
            size="lg"
            type='number'
            value={consumoGas}
            onChange={(e)=>setConsumoGas(e.target.value)}
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
