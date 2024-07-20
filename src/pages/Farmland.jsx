import React,{ useState,useEffect} from "react";
import API_BASE_URL from '../config'
import ButtonActive from "../components/ButtonActive";

function Farmland() {
  const [farmlands,setFarmlands]=useState([]);
  useEffect(()=>{
    const fetchFarmlands=async()=>{
      try{
        const response = await fetch(`${API_BASE_URL}/farmlands`);
        const data = await response.json();
        setFarmlands(data);
        return response.data
      } catch(error){
        console.log(error);
      }
    }
    fetchFarmlands();
  },[])
  return (
    <>
    <div className="btn">
      <ButtonActive/>
        </div>
       <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Size</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Farmer-id</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {farmlands.map((farmland,index)=>(
          <tr key={farmland.id}>
            <td>{index + 1}</td>
            <td>{farmland.size}</td>
            <td>{farmland.latitude}</td>
            <td>{farmland.longitude}</td>
            <td>{farmland.farmer_id}</td>
            <td>{farmland.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Farmland;