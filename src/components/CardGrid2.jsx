import React from "react";
import AppCard from "./AppCard";

const CardGrid2 = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] mb-[40px]">
      {apps.map((app) => (
        <AppCard
          key={app.id}
          image={app.image}
          title={app.title}
          downloads={app.downloads}
          rating={app.ratingAvg}
        />
      ))}
    </div>
  );
};

export default CardGrid2;
