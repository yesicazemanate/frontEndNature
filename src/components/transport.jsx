import React, { useState } from 'react';

export const Transport = ({
   vehiculo, 
   setVehiculo, 
   tipoCombustible, 
   setTipoCombustible, 
   distancia, 
   setDistancia, 
   numeroDias, 
   setNumeroDias, 
   setTipoTransporte, 
   setEnergy, 
   setTransport
}) => {
   const [isCocheSelected, setIsCocheSelected] = useState(false);
   const [isPublicSelected, setIsPublicSelected] = useState(false);

   const handleCheckboxChange = (value) => {
      setIsCocheSelected(!isCocheSelected); 
      setVehiculo(value);
   };

   const handleCheckboxChangePublico = () => {
      setIsPublicSelected(!isPublicSelected); 
      setVehiculo('publico');
      setTipoTransporte('autobus');
   };

   const handleClik = () => {
      setEnergy(true);
      setTransport(false);
   };

   return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#68D391' }}>
         <div style={{ width: '24rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '0.375rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#4a5568' }}>Transporte</h2>
            
            <form 
               style={{ marginTop: '2rem', marginBottom: '0.5rem', maxWidth: '20rem' }} 
               onSubmit={(e) => {
                  e.preventDefault();
                  handleClik();
               }}
            >
               <div style={{ marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h6 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: '#4a5568' }}>
                     Vehículo utilizado en tu día a día
                  </h6>
                  
                  <label>
                     <input 
                        type="checkbox" 
                        value="coche" 
                        onChange={(e) => handleCheckboxChange(e.target.value)}
                     /> Coche
                  </label>
                  {isCocheSelected && (
                     <div style={{ marginLeft: '1rem' }}>
                        <label>
                           <input 
                              type="checkbox" 
                              value="gasolina" 
                              onChange={(e) => setTipoCombustible(e.target.value)} 
                           /> Gasolina
                        </label>
                        <label>
                           <input 
                              type="checkbox" 
                              value="diesel" 
                              onChange={(e) => setTipoCombustible(e.target.value)} 
                           /> Diesel
                        </label>
                     </div>
                  )}
                  
                  <label>
                     <input 
                        type="checkbox" 
                        onChange={handleCheckboxChangePublico}
                     /> Público
                  </label>
                  {isPublicSelected && (
                     <span style={{ marginLeft: '1rem' }}>Autobús</span>
                  )}
                  
                  <label>
                     <input 
                        type="checkbox" 
                        value="bicicleta" 
                        onChange={(e) => setVehiculo(e.target.value)}
                     /> Bicicleta
                  </label>
                  <label>
                     <input 
                        type="checkbox" 
                        value="camina" 
                        onChange={(e) => setVehiculo(e.target.value)}
                     /> Camina
                  </label>
                  
                  <h6 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: '#4a5568' }}>
                     Distancia
                  </h6>
                  <input 
                     type="text"
                     value={distancia}
                     onChange={(e) => setDistancia(e.target.value)}
                     placeholder="Introduce la distancia"
                     style={{ padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '0.375rem' }}
                  />
                  
                  <h6 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: '#4a5568' }}>
                     Número de días
                  </h6>
                  <select 
                     value={numeroDias}
                     onChange={(e) => setNumeroDias(e.target.value)}
                     style={{ padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '0.375rem' }}
                  >
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                  </select>
               </div>
               
               <button 
                  type="submit" 
                  style={{ marginTop: '1.5rem', width: '100%', padding: '0.75rem', backgroundColor: '#38A169', color: '#fff', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}
               >
                  Siguiente
               </button>
            </form>
         </div>
      </div>
   );
};
