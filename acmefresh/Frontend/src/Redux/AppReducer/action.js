import axios from "axios";
import { GET_AUTOMATINGFARM_FAILURE, GET_AUTOMATINGFARM_REQUEST, GET_AUTOMATINGFARM_SUCCESS,
     GET_HYDOPONICPRODUCT_FAILURE, GET_HYDOPONICPRODUCT_REQUEST, GET_HYDOPONICPRODUCT_SUCCESS, 
     GET_HYDROPONICFARM_FAILURE, GET_HYDROPONICFARM_REQUEST, GET_HYDROPONICFARM_SUCCESS,
      GET_SELLINGDIRECTELY_FAILURE, GET_SELLINGDIRECTELY_REQUEST, GET_SELLINGDIRECTELY_SUCCESS } from "./actionType";

export const gethydroponicfarm=(params)=>(dispatch)=>{
    dispatch({type:GET_HYDROPONICFARM_REQUEST});
    axios.get("http://localhost:8080/Books",params)
    .then((r)=>dispatch({type:GET_HYDROPONICFARM_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_HYDROPONICFARM_FAILURE}))
}

export const gethydroponicproducts=(params)=>(dispatch)=>{
    dispatch({type:GET_HYDOPONICPRODUCT_REQUEST});
    axios.get("http://localhost:8080/Books",params)
    .then((r)=>dispatch({type:GET_HYDOPONICPRODUCT_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_HYDOPONICPRODUCT_FAILURE}))
}
   
export const getautomaticfarm=(params)=>(dispatch)=>{
    dispatch({type:GET_AUTOMATINGFARM_REQUEST});
    axios.get("http://localhost:8080/automatingHydroponics",params)
    .then((r)=>dispatch({type:GET_AUTOMATINGFARM_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_AUTOMATINGFARM_FAILURE}))
}
   
export const sellingdirectily=(params)=>(dispatch)=>{
    dispatch({type:GET_SELLINGDIRECTELY_REQUEST});
    axios.get("http://localhost:8080/B2Cproducts",params)
    .then((r)=>dispatch({type:GET_SELLINGDIRECTELY_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_SELLINGDIRECTELY_FAILURE}))
}
   
    