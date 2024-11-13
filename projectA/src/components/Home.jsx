// src/components/Home.jsx
import React, { useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import CustomJumbotron from './CustomJumbotron'; // Ensure this path is correct

function Home() {

    useEffect(() => {
        document.title = "Home || ProjectA"
    },[]);

    return (
        <div>
            <CustomJumbotron>
                <Container>
                    <h1>Hello, world!</h1>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <Button color="primary">Start My Application</Button>
                </Container>
            </CustomJumbotron>
        </div>
    );
}

export default Home;
