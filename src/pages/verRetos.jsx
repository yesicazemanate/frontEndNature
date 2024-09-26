import React from 'react'
import { Sidbar } from '../components/sidbar'
import { Retos } from '../components/retos'
export const VerRetos = () => {
  return (
<>
<div className='flex'>
<Sidbar/>
<div className='m-7'>
    <Retos/>
</div>
</div>
</>
  )
}
