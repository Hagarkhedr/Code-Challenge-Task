import React, { Component } from 'react';
import CategoryFilter from '../filterCategory/departmentFilter';
import DepartmentFilter from '../filterCategory/departmentFilter';
import PromotionFilter from '../filterCategory/promotionFilter';
import SearchField from '../filterCategory/searchField'
class FilterList extends Component {
    constructor(props)
    {
        super(props)
        this.state={}
    }
    render() { 
      
        return ( 
      <React.Fragment>
<DepartmentFilter category={this.props.filters.departments} name={'Department'} />
<PromotionFilter category={this.props.filters.promotions} name={'Promotion'}/>
<SearchField />
      </React.Fragment>
      );
    }
}
 
export default FilterList;