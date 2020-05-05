import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/productList/comp';
import FilterList from './components/filterList/comp';
import Pagination from '@material-ui/lab/Pagination';
import Service from './components/services';
import { connect } from 'react-redux';
import actionTypes from './stateManager/actionTypes/index';
const mapDispatchToProps = dispatch => {
  return {
    setCurrentPage: pageIndex => dispatch({type:actionTypes.SET_CURRENT_PAGE , payload:pageIndex}),
  };
};
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
  
      
    
      
    }
    this.service = new Service(); 
  }
  state = {  }
  startUP() {
    this.service.getAllProducts();
     this.service.getAllActivePromotions();
     this.service.getAllDepartments();
     this.service.getProductPromotions();

}

componentWillMount() {
    this.startUP();
}
onClick(e,p)
{
this.props.setCurrentPage(p);
}
  render() { 
    return (  <div className="App">
  
    <FilterList filters ={{promotions:this.props.prod.activePromotions , departments: this.props.prod.departments}}  />
   <ProductList products={this.props.prod.currentPageProducts} promotions= {this.props.prod.productPromotions} />
   <Pagination count={this.props.prod.numberOfPages} color="primary" onChange={this.onClick.bind(this)} />
  </div> );
  }
}
 
export default connect(() => state => {
  let prod = state.products;


  return {
    prod: prod

  };
},
mapDispatchToProps
)(App);
