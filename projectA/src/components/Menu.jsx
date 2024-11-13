import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menu() {
    return (
        <div>
            <ListGroup className="text-left">
                <Link className="list-grout-item list-group-item-action" to="/" tag="a" >Home/</Link>
                <Link className="list-grout-item list-group-item-action" to="/add-course" tag="a" >Add Course/</Link>
                <Link className="list-grout-item list-group-item-action" to="/view-courses" tag="a" >View Course/</Link>
                <Link className="list-grout-item list-group-item-action" to="#" tag="a" >About/</Link>
                <Link className="list-grout-item list-group-item-action" to="#" tag="a" >Contact/</Link>
            </ListGroup>
        </div>
    );
}


export default Menu