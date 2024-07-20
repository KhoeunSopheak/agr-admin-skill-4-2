import ButtonDestrict from "../components/BottonDestrict";
import Button from "../components/Button";


import React,{ useState,useEffect} from "react";
import API_BASE_URL from '../config'

function Farmers() {
  
  const [farmers,setFarmers] = useState([]);
  useEffect(()=>{
    const fetchFarmers=async()=>{
      try{
        const response = await fetch(`${API_BASE_URL}/farmers`);
        const data = await response.json();
        setFarmers(data);
        return response.data
      }catch(error){
        console.log(error);
      }
    }
    fetchFarmers();
  },[])
  return (
    <>
      <div className="btn">
      <Button/><ButtonDestrict/>
        </div>
      
      <table>
<thead>
  <tr>
    <th>No</th>
    <th>IDCard</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Phone</th>
    <th>Source</th>
    <th>Destrict</th>
    <th>Active</th>
  </tr>
  </thead>
      <tbody>
        {farmers.map((farmer,index)=>(
          <tr key={farmer.id}>
    <td>{index + 1}</td>
    <td>{farmer.id_card}</td>
    <td>{farmer.first_name}</td>
    <td>{farmer.last_name}</td>
    <td>{farmer.gender}</td>
    <td>{farmer.phone}</td>
    <td>{farmer.source}</td>
    <td>{farmer.district_id}</td>
    <td>Edit</td>
  </tr>
  ))}
      </tbody>
</table>
    </>
  );
};

export default Farmers;