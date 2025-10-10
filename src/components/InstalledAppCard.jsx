import React from 'react';

const InstalledAppCard = ({ image, title, downloads, rating, onUninstall }) => {
  return (
    <div className='w-full p-[16px] bg-white rounded-[8px] flex items-center justify-between'>
      <div className='flex gap-[16px] items-center'>
        {image && <img className='w-[80px] rounded-[4px]' src={image} alt={title} />}
        <div className='flex flex-col gap-[16px]'>
          <p className='text-[20px] font-medium'>{title}</p>
          <div className='flex gap-[16px]'>
            <div className='flex gap-[4px] items-center'>
              <img className='w-[12px]' src="src/assets/download.png" alt="downloads" />
              <p className='text-[#00D390]'>
                {downloads ? `${(downloads / 1_000_000).toFixed(0)}M+` : "N/A"}
              </p>
            </div>
            <div className='flex gap-[4px] items-center'>
              <img className='w-[12px]' src="src/assets/star.png" alt="rating" />
              <p className='text-[#FF8811]'>{rating || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onUninstall}
        className='text-center p-[12px] text-white bg-red-500 hover:bg-red-600 font-semibold rounded-[4px]'
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
