import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import CardGrid from '../components/CardGrid'
import Footer from '../components/Footer'


import Title from '../components/Title'
import Spinner from "../components/Spinner";

import CardGrid2 from "../components/CardGrid2";

const AllApps = () => {


    const [allapps, setApps] = useState([]);
    const [loading, setLoading] = useState(false);

     const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("apps.json")
          .then((res) => res.json())
          .then((data) => setApps(data));
      }, []);


      const filteredApps = allapps.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 500); 
      return () => clearTimeout(timeout);
    }
  }, [searchTerm]);

    return (
        <div className='mx-[80px]'>
            <Title></Title>
            <div className="flex justify-between my-[16px] items-center">
       <p className="text-[24px] font-semibold">
          ({searchTerm ? filteredApps.length : allapps.length}) Apps found
        </p>

        <input
          type="text"
          placeholder="Search apps..."
          className="px-4 py-2 border rounded-md shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        

      </div>
           {loading ? (
        <div className="flex justify-center items-center h-40">
          <Spinner />
        </div>
      ) : searchTerm ? (
        // when searching use CardGrid2
        <CardGrid2 apps={filteredApps} />
      ) : (
        // when not searching use CardGrid (fetches itself)
        <CardGrid jsonfile="apps.json" />
      )}

             <div className="flex justify-center items-center mt-6">
                    <button onClick={() => setSearchTerm("")} className='flex px-[16px] py-[12px] gap-[10px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm items-center justify-center'>
                       
                        <p className='text-white font-semibold'>Show All</ p>
                    </button>
                </div>
        </div>

       
    )
}

export default AllApps
