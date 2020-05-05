import React, { Component } from 'react';
import Service from '../services';
import { connect } from 'react-redux';
import actionTypes from '../../stateManager/actionTypes/index';
import TextField from '@material-ui/core/TextField';

const mapDispatchToProps = dispatch => {
    return {
      searchProduct: text => dispatch({type:actionTypes.SEARCH_PRODUCT , payload:text}),
    };
  };
class SearchField extends Component {
    constructor(props) {
        super(props)
        this.state = {
    }
this.service = new Service();
}
onChange(e)
{ 
  
    this.props.searchProduct(e.target.value);
 }
    render() {
        return (
            <TextField id="standard-basic" label="Product Name" onChange={this.onChange.bind(this)} />

      
        );
    }
}
export default connect(null,mapDispatchToProps)(SearchField);

