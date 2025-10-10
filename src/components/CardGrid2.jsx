import React from "react";

import { useNavigate } from "react-router-dom";


import AppCard from "./AppCard";

const CardGrid2 = ({ apps }) => {

  const navi = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] mb-[40px]">


     
       
      {apps.map((app) => (

         <div
          key={app.id}
          onClick={() => navi(`/about/${app.id}`)}
          
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
  );
};

export default CardGrid2;
