import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from 'axios'
import base_url from '.././api/BootApi'
import { toast } from 'react-toastify'

function AddCourse() {
    useEffect(() => {
        document.title = "Add Courses || ProjectA"
    }, []);

    const [course, setCourse] = useState({});

    // form handler function
    const handleForm = (e) => {
        postDataToServer(course);
        console.log(course)
        e.preventDefault();
    }


    // function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                toast.success("Data Post Successfully");
                console.log(response)
            },
            (error) => {
                toast.error("Data Not Post, Something went wrong!");
                console.log(error)
            }
        )
    }


    return (
        <Fragment>
            <h1>Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label htmlFor="courseId">Course ID</Label>
                    <Input type="text" placeholder="Enter ID"
                        onChange={(e) => { setCourse({ ...course, id: e.target.value }) }}
                        name="courseId" id="courseId" required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="title">Course Title</Label>
                    <Input type="text" placeholder="Enter Title"
                        onChange={(e) => { setCourse({ ...course, title: e.target.value }) }}
                        name="title" id="title" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Course Description</Label>
                    <Input type="textarea" placeholder="Enter Description"
                        onChange={(e) => { setCourse({ ...course, description: e.target.value }) }}
                        name="description" id="description" style={{ height: 100 }} required/>
                </FormGroup>
                <div className="text-center mt-3">
                    <Button color="primary" type="submit">Add Course</Button>
                    <Button color="secondary" type="reset" className="ml-3">Clear</Button>
                </div>
            </Form>
        </Fragment>
    );
}

export default AddCourse;
