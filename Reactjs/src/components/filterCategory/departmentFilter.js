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
      filterDepartment: departments => dispatch({type:actionTypes.FILTER_DEPARTMENT , payload:departments}),
    };
  };
class DepartmentFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Departments :[]
        }
this.service = new Service();
    }
    onChange(e)
    {   if (e.target.checked)
        {  let Departments = [...this.state.Departments, e.target.value];
             this.setState({
                Departments :Departments
            })
         this.props.filterDepartment([...this.state.Departments, e.target.value]); 
        }
        else 
        {
            this.setState({
                Departments : this.state.Departments.filter(item=>item !== e.target.value)
            })
         this.props.filterDepartment(this.state.Departments.filter(item=>item !== e.target.value)); 
        }
    }
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
                            value = {item.Department_id}
                            onChange={this.onChange.bind(this)}
                        />}
                        label={item.Department_Name}
                    />
                )
                        }
       
        </FormGroup>
        </FormControl>
      
        );
    }
}

export default connect(null,mapDispatchToProps)(DepartmentFilter);
