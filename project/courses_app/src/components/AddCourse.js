import axios from "axios";
import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";

const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Courses";
    },[]);

    const [course,setCourses] = useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
            },
            (error)=>{
                console.log(error);
            }
        );
    }
    return (
        <div>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" 
                    placeholder="Enter here" 
                    name="userId" 
                    id="userId"
                    onChange={(e)=>{
                        setCourses({...course, id: e.target.value})
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" 
                    placeholder="Enter title here" 
                    name="" 
                    id="title"
                    onChange={(e)=>{
                        setCourses({...course, title: e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" 
                    placeholder="Enter description here" 
                    name="" 
                    id="description"
                    style={ {height:150 } } 
                    onChange={(e)=>{
                        setCourses({...course, description: e.target.value})
                    }}/>
                </FormGroup>

                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                    <Button color="warning">Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse;
