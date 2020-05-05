import store from "../stateManager/store";
import actionTypes from "../stateManager/actionTypes";

class Service {
constructor()
{}

getAllProducts()
{
    fetch("http://localhost:9000/getAllProducts")
    .then(res => res.json())
    .then(res => 
      { 
       store.dispatch({
           type:actionTypes.ADD_PRODUCTS ,
           payload:res
       })
        return res ; 
      })
}

getAllDepartments()
{
    fetch("http://localhost:9000/getDepartments")
    .then(res => res.json())
    .then(res => 
      { 
        store.dispatch({
            type:actionTypes.ADD_DEPARTMENTS ,
            payload:res
        })
      })
}
getAllActivePromotions()
{
    fetch("http://localhost:9000/getPromotions")
    .then(res => res.json())
    .then(res => 
      {
        store.dispatch({
            type:actionTypes.ADD_ACTIVE_PROMOTIONS ,
            payload:res
        })
      })
}

getProductPromotions()
{
    fetch("http://localhost:9000/getPromotion")
    .then(res => res.json())
    .then(res => 
      {
        store.dispatch({
            type:actionTypes.ADD_PRODUCTS_PROMOTIONS ,
            payload:res
        })
      })
}
}

export default Service ; 