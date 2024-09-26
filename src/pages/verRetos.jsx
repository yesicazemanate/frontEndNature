import React from 'react'
import { Sidbar } from '../components/sidbar'
import { Retos } from '../components/retos'
import { CardReto } from '../components/cardReto'
export const VerRetos = () => {
  return (
<>
<div className='flex'>
<Sidbar/>
<div className='m-7'>
    <Retos/>
</div>
<div className='m-7'>
    <CardReto/>
</div>
</div>
</>
  )
}
