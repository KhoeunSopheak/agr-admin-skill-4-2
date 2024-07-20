import ButtonDestrict from "../components/BottonDestrict";
import Button from "../components/Button";
import Table from "../components/Table";



import React,{ useState,useEffect} from "react";
import API_BASE_URL from '../config'

function Accounts() {
  const [accounts,setAccounts]=useState([]);
  useEffect(()=>{
    const fetchAccounts=async()=>{
      try{
        const response = await fetch(`${API_BASE_URL}/accounts`);
        const data = await response.json();
        setAccounts(data);
        return response.data
      } catch(error){
        console.log(error);
      }
    }
    fetchAccounts();
  },[])
  return (
    <>
    <div className="btn">
      <Button/><ButtonDestrict/>
        </div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Password</th>
          <th>District-id</th>
          <th>Province-id</th>
          
         
        </tr>
      </thead>
      <tbody>
        {accounts.map((account,index)=>(
          <tr key={account.id}>
            <td>{index + 1}</td>
            <td>{account.first_name}</td>
            <td>{account.last_name}</td>
            <td>{account.email}</td>
            <td>{account.password}</td>
            <td>{account.district_id}</td>
           <td>{account.province_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
  }
  
  export default Accounts;