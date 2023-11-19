import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Herosection = () => {
  const [count, setCount] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCount(new Date());
    }, 1000);
  }, []);

  const hours = count.getHours();
  const minutes = count.getMinutes();
  const seconds = count.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const styles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #0000FF, #DC143C)',
      color: 'white',
      minHeight: '100vh',
      fontSize: '6vw', 
      fontFamily: 'Georgia',
      margin: 0,
  };
  const style2 = {
    borderRadius: '50px',
    border: '10px double Black',
  };
  const style3 = {
    borderRadius: '10px',
    border: '10px ridge Black',
  };
  const style4 ={
    borderRadius: '10px',
    border: '10px ridge Black',
    margin:'10px'
  }

  return (
    <Container fluid style={styles}>
      <Row className='justify-content-center text-center' style={style2}>
        <Col>
          <p>
            DIGITAL CLOCK
          </p>
        </Col>
      </Row>

      <Row className='justify-content-center text-center m-5' style={style3}>
        <Col>
        <span style={style4}>
            {`${hours}`}
          </span>
          <span style={style4}>
            {`${minutes < 10 ? '0' + minutes : minutes}`}
          </span>
          <span style={style4}>
            {`${seconds < 10 ? '0' + seconds : seconds}`}
          </span>
          <span style={style4}>
            {`${ampm}`}
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Herosection;
