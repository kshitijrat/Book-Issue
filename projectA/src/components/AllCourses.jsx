import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from './../api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

function AllCourses() {

    useEffect(() => {
        document.title = "All Courses || ProjectA";
    }, []);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                // success
                console.log(response);
                toast.success("Courses have been loaded"); // success message
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong!");
            }
        );
    };

    // loading course
    useEffect(() => { getAllCoursesFromServer() }, []);

    const [courses, setCourses] = useState([
        { id: 1, title: "Java", description: "This course is for beginners" },
        { id: 2, title: "C++", description: "This course is for beginners" },
        { id: 3, title: "Python", description: "This course is for beginners" },
    ]);

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows:</p>
            {
                courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} />) : "No Course Present"
            }
        </div>
    );
}

export default AllCourses;
