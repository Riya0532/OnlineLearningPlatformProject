import React from "react";
import Allcourses from "./Allcourses";
import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    CartdFooter, 
    Button, 
    Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{

    const deleteCourse=(id)=> {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted")
                update(id);
            },
            (error)=> {
                toast.error("course not deleted !! Server problem")
            }
        )
    }
    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );

}

export default Course;