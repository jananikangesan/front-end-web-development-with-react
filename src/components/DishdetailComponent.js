import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
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
                <div>
                    <Card>
                        <CardBody>
                        <h4> {comment.comment}</h4>
                        <h6> {comment.author}  {comment.date}</h6>
                        </CardBody>
                    </Card>
                     
                </div>        
            );
    }
  
    render() {
        const dishdetail= this.props.value?.comments.map((comment) => {
          
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
           
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.value)}
                </div>
                <div  className="col-12 col-md-5 m-1"> 
                        {dishdetail}    
                </div>
            </div>
           
        );
    }
}

export default DishDetail;
