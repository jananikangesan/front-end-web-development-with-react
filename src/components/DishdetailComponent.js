import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, CardHeader } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        console.log("DishDetailcomponent constructor is invoked");
    }
    
    renderDish(dish) {
        if (dish != null)
            return(    
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comment){
            return(
                <div class="container">
                    <div class="row">
                        <h4> {comment.comment}</h4>
                        <h6> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h6>
                    </div>    
                </div>        
            );
    }
  
    render() {
        const dishdetail= this.props.dish?.comments.map((comment) => {
           
            return(  
                this.renderComments(comment) 
             );
        });
        console.log("DishDetail component render is invoked");
        // if(this.props.value?.comments != null){
        //         console.log("aaa:",this.props.value.comments);}
        // else{
        //             console.log("bb");
        //         }
    
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">   
                        {dishdetail}   
                       
                    </div>
                </div>
            </div>
           
        );
    }
}

export default DishDetail;
