import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
 
export function Retos() {
  const [open, setOpen] = React.useState(false);
  const [data, setData]= useState()
  const datas = async()=>{
    try{
        const response = await axios.get('http://localhost:3000/challenge/')
       setData(response.data)
    }catch(error){
        console.log(error)
    }
}
  const handleOpen = () => {
datas()
    setOpen(!open);
  }






  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
    Generar Reto
      </Button>{
data&&(
    <>
    <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Reto Generado</DialogHeader>
         <DialogBody>
            Descripción: 
       {data.description}
        </DialogBody>
        <DialogBody>
            Categoria: 
       {data.category}
        </DialogBody>
        <DialogBody>
            Puntos: 
       {data.points}
        </DialogBody> 
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span >Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
)
      }
      

      
    </>
  );
}