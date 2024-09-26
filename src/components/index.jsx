import {useState}from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import logo from '../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
export const FormRegister = () => {
  const navigate= useNavigate()
  const [name, setName] = useState()
  const [lastname, setLastname]= useState()
  const [email, setEmail]= useState()
  const [password, setPassword]=useState()
  const handleSubmit=async()=>{
    try{
      const response= await axios.post('http://localhost:3000/user/register',{name,lastname,email,password})
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }
  const handle=()=>{
    navigate('/')
  }
  
  return (
    <>
    
      <div className="h-screen flex justify-center items-center bg-green-400">
            <Card color="transparent" shadow={false} className='p-6 bg-white mx-4 lg:mx-auto'>
              <Typography variant="h4" color="blue-gray" className="text-center">
                Registro
              </Typography>
              <img src={logo} alt="logo" className='w-1/5 mx-auto -mb-10'/>

              <form className="mt-8 mb-2 max-w-screen-lg " onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Nombre
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Apellido
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Tu apellido"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Contraseña
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    value={password}
                    placeholder="********"
                    onChange={(e) => setPassword(e.target.value)}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <Button className='mt-6 bg-green-400  w-full rounded-lg text-white' type='submit'>Registrarse</Button>
              </form>
              <button onClick={handle} className="mt-4 text-blue-500">¡Ya tienes una cuenta? Inicia sesión!</button>
            </Card>
          </div> 
    </>
  )
}
