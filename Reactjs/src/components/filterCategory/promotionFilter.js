import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Service from '../services';
import { connect } from 'react-redux';
import actionTypes from '../../stateManager/actionTypes/index';
const mapDispatchToProps = dispatch => {
    return {
      filterPromotion: promotions => dispatch({type:actionTypes.FILTER_PROMOTION , payload:promotions}),
    };
  };
class PromotionFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
        Promotions :[]
    }
this.service = new Service();
}
onChange(e)
{   if (e.target.checked)
    { 
         let Promotions = [...this.state.Promotions, e.target.value];
         this.setState({
            Promotions :Promotions
        })
     this.props.filterPromotion([...this.state.Promotions, e.target.value]); 
    }
    else 
    {
        this.setState({
            Promotions : this.state.Promotions.filter(item=>item !== e.target.value)
        })
     this.props.filterPromotion(this.state.Promotions.filter(item=>item !== e.target.value)); 
    }}
    render() {
        return (
            <FormControl component="fieldset">

        <FormLabel component="legend">{this.props.name}</FormLabel>
            <FormGroup>
                {this.props.category.map((item) =>
                    <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            value = {item.Promotion_id}
                            onChange={this.onChange.bind(this)}
                        />}
                        label={item.Promotion_Code}
                    />
                )
                        }
       
        </FormGroup>
        </FormControl>
      
        );
    }
}
export default connect(null,mapDispatchToProps)(PromotionFilter);

