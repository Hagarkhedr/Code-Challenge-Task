
import actionTypes from '../actionTypes/index';
import { act } from 'react-dom/test-utils';
const initialState = {
 products:[],
 departments :[],
 productPromotions :[],
 activePromotions :[], 
 numberOfPages : 0 ,
 currentPageProducts : [] , 
 currentPage :1 ,
 filteredDepartments:[],
 filteredPromotions:[]
};

const productsReducer = (state = initialState, action) => {
  let stateObj = Object.assign({}, state);
  switch (action.type) {

    case actionTypes.ADD_PRODUCTS:
  {stateObj.products= action.payload;
  stateObj.currentPageProducts = action.payload.slice(0,10);
  stateObj.numberOfPages = (action.payload.length/10).toFixed(0)
  return stateObj ; 

  }
  case actionTypes.ADD_DEPARTMENTS :
    {
stateObj.departments= action.payload ; 
return stateObj ; 
    }
    case actionTypes.ADD_ACTIVE_PROMOTIONS:
      {
    
      stateObj.activePromotions= action.payload;
      return stateObj ; 
    
      }
      case actionTypes.ADD_PRODUCTS_PROMOTIONS :
        {
    stateObj.productPromotions= action.payload ; 
    return stateObj ; 
        }
 case actionTypes.SET_CURRENT_PAGE :
   { let index = action.payload == 1 ? 1: action.payload+9 ;
    stateObj.currentPageProducts = state.products.slice(index,index+10);
    stateObj.currentPage = action.payload ; 
    return stateObj ; 
   }

       case actionTypes.FILTER_DEPARTMENT :
        { if (action.payload.length==0)
          {
            stateObj.currentPageProducts = state.products.slice(0,10);
            stateObj.numberOfPages = (state.products.length/10).toFixed(0)
          }
          else 
          {
            stateObj.filteredDepartments = action.payload ; 
            let products =[] ; 
            action.payload.map((item,i)=>{
              products.push (...state.products.filter(product => product.Department_id ==item))
            })
            stateObj.currentPageProducts = products 
            stateObj.numberOfPages = (products.length/10).toFixed(0)
          }

          return stateObj ; 
        }
        case actionTypes.FILTER_PROMOTION:
          {  if (action.payload.length==0)
            {
              stateObj.currentPageProducts = state.products.slice(0,10);
              stateObj.numberOfPages = (state.products.length/10).toFixed(0)
            }
            else 
            {     let filteredProducts =[] ;
              stateObj.filteredPromotions= action.payload ;

              state.products.map((product,i)=>
              { let productPromotion = stateObj.productPromotions.filter(item=> item.Product_id == product.Product_id) ;
                if (productPromotion.length>0)
                {
                 if (stateObj.filteredPromotions.findIndex(item=> item == productPromotion[0].Promotion_id )!=-1)
                 { 
                   filteredProducts.push(product);
    
                 }
                }
              
              })
              stateObj.currentPageProducts =filteredProducts;
            }

           return stateObj;
            
          }
    default:
      return state;
  }
};
export default productsReducer; 