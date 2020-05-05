import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
function ProductCard(props) {
    return    <Grid item xs={3}>
     <Card>
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.product.Product_Name}
                    </Typography>
                    <Typography>
                    {'price '+props.product.Price}
                    </Typography>
                  { props.promotion &&  <Typography>
                    {'Discount '+props.promotion.Discount+'%'}
                    </Typography>}
                  </CardContent>
                 
                </Card>
  </Grid> ;
  }

class ProductList extends Component {
    constructor(props)
    {
        super(props)
        this.state={}
    }
    render() { 

        return ( 
            <Grid container spacing={1}>
                {this.props.products.map((item) => (
                 <ProductCard product={item} 
                 promotion={this.props.promotions.filter(promotion=> promotion.Product_id== item.Product_id).length > 0 ? this.props.promotions.filter(promotion=> promotion.Product_id== item.Product_id)[0] : null   }/>
                ))}
              </Grid>
           

         );
    }
}
 
export default ProductList;