import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useRef } from "react";
function OnlineDelivery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <div className="max-w-[1200px] mx-auto mt-12 shadow" ref={componentRef}>
      <div className="flex items-center justify-between p-3">
        <div className="text-[25px] font-semibold">
          Restuarants with online delivery in Jodhpur
        </div>
      </div>
      <div className={`${isAtTop ? 'fixed top-0 z-[2232323] w-full bg-white left-0' : ''}`}>
      <div className="flex max-w-[1200px] mx-auto my-3 gap-3 border border-gray-200">
          <div className="p-3 rounded-md shadow ">Filter </div>
          <div className="p-3 rounded-md shadow ">Sort by </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-2 md:grid-cols-4 gap-3">
        {data.map((item, index) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
}

export default OnlineDelivery;
