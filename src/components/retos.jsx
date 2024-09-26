import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { MyContext } from '../context'
export function Retos() {
  const {idUser, setIdUser}=useContext(MyContext)
  const [open, setOpen] = React.useState(false);
  const [data, setData]= useState()
  const datas = async()=>{
    try{
        const response = await axios.get('https://backendnature-2.onrender.com/challenge/')
       setData(response.data)
    }catch(error){
        console.log(error)
    }
  }

  
  const handle =async()=>{
      try{
        const response =await axios.post('https://backendnature-2.onrender.com/tree/',{
          points:data.points,
          idUsuario:idUser,
          status:'semilla'
      })
  console.log(response);
      }catch(error){
        console.log(error);
      }

  }
  const handleSubmit = () => {
handle()
    setOpen(!open);
  }
  const handleOpen2 = () => {
    datas()
        setOpen(!open);
      }


  return (
    <>
      <Button onClick={handleOpen2} variant="gradient">
    Generar Reto
      </Button>{
data&&(
    <>
    <Dialog open={open} handler={handleOpen2}>
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
            onClick={handleOpen2}
            className="mr-1"
          >
            <span >Cancel</span>
          </Button>
          <form onSubmit={handleSubmit}>
          <Button variant="gradient" color="green"  type="submit">
            <span >Hecho</span>
          </Button>
          </form>
        </DialogFooter>
      </Dialog>
    </>
)
      }
    
      

      
    </>
  );
}