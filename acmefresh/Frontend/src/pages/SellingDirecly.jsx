import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SellingCard from "../components/SellingCard";
import { sellingdirectily } from "../Redux/AppReducer/action";
import style from "./PagesStyle/SellingDirectly.module.css";

const SellingDirecly = () => {
  

  const dispatch = useDispatch();
// calling data from Redux store for renddering SELLINGDIRECTELY data
  const data = useSelector((state) => state.AppReducer.SELLINGDIRECTELY);

  const [stable,setStable]=useState([...data])
  
//when filter when filter  applied
  const handleCategory=(e)=>{
    e.preventDefault()
    var input=e.target.value;
    var data1=data.filter((e)=>e.category===input)
    setStable(data1)
  }
  
  //when filter when discount checkbox applied
  const handleDiscount=(e)=>{
   console.log(e.target.checked)
   if(e.target.checked){
   setStable(data.filter((e)=>e.discount))
   }else{
    setStable(data)
   }
  }

  useEffect(() => {
       dispatch(sellingdirectily());
  },[]);
  useEffect(() => {
    setStable(data)
},[data]);

  return (
    <>
   <div className={style.filter}> 
        <div> 
          <label>Discount</label> 
          <input type="checkbox" onChange={(e)=>handleDiscount(e)} /> 
        </div> 

        <div className={style.filter}>
          <label>Category:-</label> 
        <select name="Category" id="" onChange={(e)=>{handleCategory(e)}}>
        <option>Select CAtegory</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegitable</option>
        </select>
          
        </div> 
      </div>
      <div className={style.container}>
        {stable.map((e) => {
          return <SellingCard key={e.id} data={e} />;
        })}
      </div>
    </>
  );
};

export default SellingDirecly;
