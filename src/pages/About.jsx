import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const About = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === Number(id));
        setApp(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        App not found!
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex items-center gap-4">
        <img
          src={app.image}
          alt={app.title}
          className="w-20 h-20 object-contain rounded"
          onError={(e) => (e.currentTarget.src = "/assets/hero.png")}
        />
        <div>
          <h1 className="text-2xl font-bold text-[#632EE3]">{app.title}</h1>
          <p className="text-gray-600">{app.companyName}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700">{app.description}</p>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-2 bg-[#F1F5E8] px-3 py-1 rounded">
          <span className="text-sm text-gray-600">Downloads:</span>
          <span className="text-[#00D390] font-semibold">
            {(app.downloads / 1_000_000).toFixed(0)}M+
          </span>
        </div>
        <div className="flex items-center gap-2 bg-[#FFF0E1] px-3 py-1 rounded">
          <span className="text-sm text-gray-600">Rating:</span>
          <span className="text-[#FF8811] font-semibold">{app.ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default About;
