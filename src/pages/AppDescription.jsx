import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import RatingsChart from "../components/RatingsChart";
import "react-toastify/dist/ReactToastify.css";

import Spinner from "../components/Spinner";

const AppDescription = () => {

    const [installed, setInstalled] = useState(false);

    const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  
const keepStorage = (app) => {
  const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
  if (!stored.find((a) => a.id === app.id)) {
    stored.push(app);
    localStorage.setItem("installedApps", JSON.stringify(stored));
  }
};

const theInstallButton = (app, setInstalled) => {
  keepStorage(app);
  toast.success(`${app.title} installed successfully `);
  setInstalled(true);
};


     useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
  const found = data.find((a) => a.id === Number(id));
  setApp(found);

  if (found) {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = stored.some((a) => a.id === found.id);
    setInstalled(alreadyInstalled);   // <-- ADD THIS
  }

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
    <div className='p-[80px] flex flex-col gap-[80px]'>
        <div className='flex gap-[40px]'>
            <img className='w-[350px]' src={app.image} alt="" />
            <div>
                <div className='mb-[30px]'>
                    <p className='text-[32px] font-bold'>{app.title}</p>
                    <p className='text-[#627382]'>Developed by <span className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>company</span></p>
                </div>
                <div className='mt-[30px] flex gap-[60px]'>
                    <div>
                        <img className='w-[40px]' src="src/assets/download2.png" alt="" />
                        <p className='text-[#001931]'>Downloads</p>
                        <p className='text-[40px] font-extrabold'>{app.downloads}</p>
                    </div>
                    <div>
                        <img className='w-[40px]' src="src/assets/star.png" alt="" />
                        <p className='text-[#001931]'>Average Ratings</p>
                        <p className='text-[40px] font-extrabold'>{app.ratingAvg}</p>
                    </div>
                    <div>
                        <img className='w-[40px]' src="src/assets/review.png" alt="" />
                        <p className='text-[#001931]'>Total Reviews</p>
                        <p className='text-[40px] font-extrabold'>{app.reviews}</p>
                    </div>
                </div>
                <button
      onClick={() => theInstallButton(app, setInstalled)}
      disabled={installed}
      className={`rounded-[4px] px-[20px] py-[14px] mt-[30px] font-semibold ${
        installed ? "bg-gray-400 cursor-not-allowed text-white" : "bg-[#00D390] text-white"
      }`}
    >
      {installed ? "Installed" : `Install Now (${app.size} MB)`}
    </button>
            </div>
        </div>
       <div>
  <p className="text-[24px] font-semibold mb-[24px]">Ratings</p>
  <RatingsChart ratings={app.ratings} />
</div>
        <div>
            <p className='text-[24px] font-semibold mb-[24px]'>Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis at accusamus facilis eos quam porro, eum accusantium vitae molestiae blanditiis provident inventore aut! Voluptatum voluptatem blanditiis ab provident fugit odio.</p>
        </div>

         <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default AppDescription
