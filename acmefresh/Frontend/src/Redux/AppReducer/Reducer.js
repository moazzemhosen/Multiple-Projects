import Cart from "../../components/Cart"
import { ADD_TO_CART, GET_AUTOMATINGFARM_FAILURE, GET_AUTOMATINGFARM_REQUEST, GET_AUTOMATINGFARM_SUCCESS, 
    GET_HYDOPONICPRODUCT_FAILURE, GET_HYDOPONICPRODUCT_REQUEST, GET_HYDOPONICPRODUCT_SUCCESS, 
    GET_HYDROPONICFARM_FAILURE, GET_HYDROPONICFARM_REQUEST, GET_HYDROPONICFARM_SUCCESS,
     GET_SELLINGDIRECTELY_FAILURE, GET_SELLINGDIRECTELY_REQUEST, GET_SELLINGDIRECTELY_SUCCESS } from "./actionType"


const intialState={
    HYDROPONICFARM:[],
    HYDOPONICPRODUCT:[],
    AUTOMATINGFARM:[],
    SELLINGDIRECTELY:[],
    CART:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {

        case GET_HYDROPONICFARM_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_HYDROPONICFARM_SUCCESS:{
            return {
                ...state,
                HYDROPONICFARM:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_HYDROPONICFARM_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case GET_HYDOPONICPRODUCT_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_HYDOPONICPRODUCT_SUCCESS:{
            return {
                ...state,
                HYDOPONICPRODUCT:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_HYDOPONICPRODUCT_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case GET_AUTOMATINGFARM_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_AUTOMATINGFARM_SUCCESS:{
            return {
                ...state,
                AUTOMATINGFARM:payload,
                isLoading:false,
                isError:false
            }
        }

        case GET_AUTOMATINGFARM_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }


        case GET_SELLINGDIRECTELY_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }

        case GET_SELLINGDIRECTELY_SUCCESS:{
            return {
                ...state,
                SELLINGDIRECTELY:payload,
                isLoading:false,
                isError:false
            }
        }
        
        case GET_SELLINGDIRECTELY_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }  
        case ADD_TO_CART:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                CART:[...state.CART,payload]
            }
        }    
    
        default:
            return {...state}
    }
}