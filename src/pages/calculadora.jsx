import React, {  useEffect, useState,useContext } from 'react'
import { Sidbar } from '../components/sidbar'
import { Transport } from '../components/transport'
import { Energy } from '../components/energy'
import { Gas } from '../components/gas'
import {Water}from '../components/water'
import axios from 'axios'
import { MyContext } from '../context'
export const Calculadora = () => {
  const {idUser, setIdUser}=useContext(MyContext)
   const [vehiculo, setVehiculo]= useState()
   const [distancia, setDistancia]= useState(0)
   const [consumo, setConsumo]= useState(0)
   const [tipoTransporte, setTipoTransporte]=useState()
   const[consumoEnergia, setEnergia]=useState(0)
const [consumoGas, setConsumoGas]= useState(0)
const [consumoWater, setConsumoWater]= useState(0)
const [tipoCombustible, setTipoCombustible]= useState()
const [numeroDias, setNumeroDias]=useState()
const [transport, setTransport]= useState(true)
const [energy, setEnergy]= useState()
const [gas, setGas]= useState()
const [water, setwater]= useState()

const datavs={
  userId:idUser,
transporte:{
  vehiculo:vehiculo,
  tipoCombustible:tipoCombustible,
  distancia:distancia,
  consumo:consumo,
  tipoTransporte:tipoTransporte,
  numeroDias:numeroDias,

},
energia:{
  consumo:consumoEnergia
},
gas:{
  consumo:consumoGas
},water:{
  consumo:consumoWater
}
}
const handleSubmit=async(e)=>{
  e.preventDefault(e)
  console.log(datavs);
  try{
    const response= await axios.post('http://localhost:3000/footprint/calcular',{datavs})
    console.log(response);
  }catch(error){
    console.log(error);
  }
  }
console.log(datavs);
  return (
   <>
   <div className='flex flex-row'>
   <Sidbar/>
   <div className='ml-24'>
    {
transport&&(
  <Transport  vehiculo={vehiculo} setVehiculo={setVehiculo} tipoCombustible={tipoCombustible} setTipoCombustible={setTipoCombustible} distancia={distancia} setDistancia={setDistancia} numeroDias={numeroDias} setNumeroDias={setNumeroDias} setEnergy={setEnergy} setTipoTransporte={setTipoTransporte} setTransport={setTransport}/>
)
    }
   {
    energy&&(
      <Energy consumoEnergia={consumoEnergia} setEnergia={setEnergia} setGas={setGas} setEnergy={setEnergy}/>
    )
   }
   {
    gas&&(
<Gas consumoGas={consumoGas} setConsumoGas={setConsumoGas} setGas={setGas} setwater={setwater}/>
    )
   }
   {
    water&&(
<Water consumoWater={consumoWater} setConsumoWater={setConsumoWater} setwater={setwater} handleSubmit={handleSubmit}/>
    )
   }
   </div>
   </div>
   </>
  )
}
