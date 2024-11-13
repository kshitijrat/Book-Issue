// CustomJumbotron.jsx
import React from 'react';
import { Container } from 'reactstrap';

const CustomJumbotron = ({ children }) => {
  return (
    <div style={{ padding: '2rem 1rem', marginBottom: '2rem', backgroundColor: '#e9ecef', borderRadius: '0.3rem' }}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default CustomJumbotron;
