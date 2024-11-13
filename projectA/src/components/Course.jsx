/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../api/BootApi";
import { toast } from 'react-toastify';

function Course({ course }) {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course deleted successfully, please refresh!");
                console.log(response);
            },
            (error) => {
                toast.error("Something went wrong!");
                console.log(error);
            }
        );
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardSubtitle>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                </CardBody>
                <Container className="text-center">
                    <Button color="danger" onClick={() => deleteCourse(course.id)} className="mr-3">Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </Card>
        </div>
    );
}

export default Course;
