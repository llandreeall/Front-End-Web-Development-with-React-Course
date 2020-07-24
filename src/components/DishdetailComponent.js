import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';


class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} /> 
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments!= null) {
            const comm = comments.map((comments)=>{
                const date = moment(comments.date).format('LL');
                    return(
                        <ul class="list-unstyled">
                            <li>{comments.comment}</li>
                            <li>-- {comments.author}, {date}</li>
                        </ul>
                    );
                });
            return comm;
            
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
         
            const dish = this.props.dish;
            var comments;
            if (dish != null) {
                comments = dish.comments;
            } else {
                return(
                    <div></div>
                );
            }
            return(
                
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div className="header">
                            <h4>Comments</h4>
                        </div>
                        {this.renderComments(comments)}
                    </div>
                </div>
                
            );
               
            
        
    }
}

export default Dishdetail;