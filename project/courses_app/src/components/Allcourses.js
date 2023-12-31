import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{

    useEffect(()=>{
        document.title="All Courses";
    },[]);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log(response);
                toast.success("courses has been loaded",
                {position :"bottom-center"});
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong",{position :"bottom-center"});
            }
        );
    }

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses,setCourses]=useState([]);
    const updateCourses=(id)=> {
        setCourses(courses.filter((c)=> c.id != id));
    }
    return (
        <div>
            <h1 className="text-center">
                All Course
            </h1>
            <p className="text-center">List of courses are as follows</p>
            {
                courses.length>0 ? courses.map((course)=>
                    <Course key={course.id} course={course} update={updateCourses} />
                ) : "No courses"
            }
        </div>
    );
}

export default Allcourses;