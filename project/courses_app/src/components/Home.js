import React , {useEffect} from "react";
import { Container,Button } from 'reactstrap';

const Home=()=>{

    useEffect(()=>{
        document.title="Home";
    },[]);

    return(
        <div>
            <div className="container-xs m-0 p-5 bg-light text-center">
                <h1 className="">Hello Learners!</h1>
                <p className="">This is developed by Riya for learning purpose.</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            </div>
        </div>
    );
}

export default Home;