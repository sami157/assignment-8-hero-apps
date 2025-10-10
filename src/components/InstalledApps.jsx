import React, { useEffect, useState } from 'react';
import InstalledAppCard from './InstalledAppCard';
import Title from './Title';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    const cleaned = stored.filter(app => app && app.title && app.downloads);
    setInstalledApps(cleaned);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("App uninstalled successfully ❌");
  };

  const handleSort = (order) => {
    let sorted = [...installedApps];
    if (order === "high-low") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "low-high") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sorted);
    setSortOrder(order);
  };

  return (
    <div className='mx-[80px]'>
      <Title text1='Your Installed Apps' text2='Explore All Trending Apps on the Market developed by us'></Title>
      <div className='flex justify-between my-[16px]'>
        <p className='text-[24px] font-semibold'>
          ({installedApps.length}) Apps found
        </p>
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 bg-white text-black border rounded-md shadow-sm"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>
      <div className='flex flex-col gap-[16px]'>
        {installedApps.length > 0 ? (
          installedApps.map(app => (
            <InstalledAppCard
              key={app.id}
              image={app.image}
              title={app.title}
              downloads={app.downloads}
              rating={app.ratingAvg}
              onUninstall={() => handleUninstall(app.id)}
            />
          ))
        ) : (
          <p className="text-gray-500">No installed apps yet.</p>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default InstalledApps;
