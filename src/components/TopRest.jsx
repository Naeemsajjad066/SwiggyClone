import React, { useEffect, useState } from 'react';
import Card from './Card';

function TopRest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const visibleCount = 4;
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTopRest = async () => {
    try {
      const response = await fetch(`${API_URL}/top-restaurant-chains`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const apiData = await response.json();
      setData(apiData);
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopRest();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-12 shadow-lg">
        <div className="flex items-center justify-between p-3">
          <div className="text-[25px] font-semibold">Top Restaurant chain in Jodhpur</div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 cursor-pointer hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-arrow-left text-orange-500"></i>
            </div>
            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 cursor-pointer hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-arrow-right text-orange-500"></i>
            </div>
          </div>
        </div>
        <div className='flex gap-5 overflow-hidden w-full' >
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopRest;