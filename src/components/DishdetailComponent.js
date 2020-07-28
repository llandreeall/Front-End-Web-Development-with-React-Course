import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
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

    const Dishdetail = (props) => {
         
            const dish = props.dish;
            
            if (dish != null) {
                return(
                    <div class = "container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish = {props.dish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <div className="header">
                                    <h4>Comments</h4>
                                </div>
                                <RenderComments comments = {props.dish.comments} />
                            </div>
                        </div>
                    </div>
                    
                );
            } else {
                return(
                    <div></div>
                );
            }  
            
    }


export default Dishdetail;