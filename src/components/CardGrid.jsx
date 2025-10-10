
import AppCard from './AppCard'
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const CardGrid = ({jsonfile}) => {

   const [topapps, setApps] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetch(jsonfile)
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);
  return (
    <div  className='grid grid-cols-4 gap-[16px] justify-center mb-[40px]'>
       {topapps.map((app) => (

        <div
          key={app.id}
          onClick={() => navigate(`/about/${app.id}`)}
         
        >
        <AppCard
          key={app.id}
          image={app.image}
          title={app.title}
          downloads={app.downloads}
          rating={app.ratingAvg}
        />
         </div>
      ))}
    </div>
   
  )
}

export default CardGrid
