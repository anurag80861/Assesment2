import React from 'react';

const Searchbar = () => {
  return (
    <div className='flex justify-center mt-5 '>
      <div className="searchbar border border-gray-300 rounded-lg p-4 flex flex-wrap gap-4 items-center bg-white">
        {/* Search by Job Title */}
        <div className="flex items-center flex-grow border-r border-gray-300 p-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            alt="search icon"
            className="w-6 h-6 mr-2"
          />
          <input
            type="text"
            placeholder="Search by: Job title, position, keyword..."
            className="flex-1 outline-none text-sm text-gray-700"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center flex-grow border-r border-gray-300 p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
            alt="location icon"
            className="w-6 h-6 mr-2"
          />
          <input
            type="text"
            placeholder="City, state or country"
            className="flex-1 outline-none text-sm text-gray-700"
          />
        </div>

        {/* Aim Icon */}
        <div className="flex items-center border-r border-gray-300 p-2">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/25/10/target-icon-the-aim-vector-42472510.jpg"
            alt="aim icon"
            className="w-6 h-6"
          />
        </div>

        {/* Button */}
        <div>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Find Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
