import React, { useState, useEffect } from 'react';
import {
  getTotalFarmers,
  getTotalFarmlands,
  getTotalCropcycle,
  getTotalFarmlandsize
} from '../api/summary';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [totalFarmlands, setTotalFarmlands] = useState(0);
  const [totalCropcycle, setTotalCropcycle] = useState(0);
  const [totalFarmlandsize, setTotalFarmlandsize] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        const farmlandsData = await getTotalFarmlands();
        const cropcycleData = await getTotalCropcycle();
        const farmlandsizeData = await getTotalFarmlandsize();
        setTotalFarmers(farmersData.totalFarmers);
        setTotalFarmlands(farmlandsData.totalFarmlands);
        setTotalCropcycle(cropcycleData.totalCropcycle);
        setTotalFarmlandsize(farmlandsizeData.totalFarmlandsize);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <h2>Overview</h2>
        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <p>{totalFarmers}</p>
            <h3>Total Farmers</h3>
          </div>
          <div className="dashboard-stat">
            <p>{totalFarmlands}</p>
            <h3>Total Farmlands</h3>
          </div>
          <div className="dashboard-stat">
            <p>{totalCropcycle}</p>
            <h3>Total Active crop cycles</h3>
          </div>
          <div className="dashboard-stat">
            <p>{totalFarmlandsize}</p>
            <h3>Total Size of Farmland</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
