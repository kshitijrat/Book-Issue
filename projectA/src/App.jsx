import { useState } from 'react'
import './App.css'
import { Button, Col, Container, Row } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header'
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  const btnHandle = () => {
    toast("this is my first message toast") // custom message
    toast.success("Done") // success message
  }

  

  return (
    <>

      <Router>
        <ToastContainer />
        {/* <h1>Simple Application</h1>
      <Button color='success' outline onClick={btnHandle}>Show Toast</Button>
      <p>Home component</p>
      <Home />
      <Course course={{ title: "Java Course", description: "This course is for begineers" }} />
      <Course course={{ title: "Python Course", description: "This course is for intermediate" }} />
      <Course course={{ title: "Advance Java Course", description: "This course is for advance coder" }} />
      <p>All Courses component</p>
      <AllCourses/>
      <p>Add Course component</p>
      <AddCourse>
      </AddCourse> */}

        <Container>
          <Header></Header>
          <Row>
            <Col md={4}>
              <Menu></Menu>
            </Col>
            <Col md={8}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </>
  )
}

export default App
