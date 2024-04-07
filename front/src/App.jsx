import { useState } from 'react';
import axios from 'axios';

import {Col, Container, Form, Row, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import TrainStatus from './trainStatus';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [trainNo, setTrainNo] = useState(0);
  const [status, setStatus] = useState({});

  const fetchStatus = async (e) => {
    e.preventDefault();
    if(trainNo === 0 || trainNo < 11110 || trainNo > 99999) {
      alert("Please enter a valid train number");
      return;
    }
    await axios.get(`http://localhost:3000/train-status?trainNo=${trainNo}`)
      .then(res => {
        console.log( "data: " ,res.data.data.CurrentStation);
        setStatus(res.data.data.CurrentStation);
        setShowStatus(true);
      })
      .catch(err => console.log(err));
    console.log(status);
  };

  return (
    <div className="App" style={{backgroundColor: darkMode? '#464648' : '#C9C9C9'}}>
      <Container fluid className="p-0 w-100 h-100">
      <Row className='my-2 w-100 bg-transparent rounded-5'>
        <Button onClick={() => setDarkMode(!darkMode)} className='my-2 w-25 bg-dark text-light rounded-5 float-end'>{darkMode? 'Light Mode' : 'Dark Mode'}</Button>
      </Row>
      <Container fluid className="p-0 w-100 h-75 rounded-5 border-0 appContainer" style={{color: darkMode? 'white' : 'black'}}>
        <Row className="justify-content-md-center h-25 align-items-center mx-auto w-100 bg-transparent border-bottom">
          <Col className="text-center w-75">
            <h2>Rail Labs</h2>
          </Col>
          <Col className="text-end">
            <h4>Login</h4>
          </Col>
          <Col className="text-start">
            <h4>Register</h4>
          </Col>
        </Row>
        <Row>
        {showStatus && <TrainStatus status={status}/>}
        </Row>
        <Row className="justify-content-md-center h-75 align-items-center mx-auto w-100 bg-transparent">
          <Col className="text-left p-5 w-50">
            <Form>
              <Form.Group className="mb-3" controlId="formTrainNo">
                <Form.Label>Enter Train No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Train No." value={trainNo} onChange={e => setTrainNo(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="rememberQuery">
                <Form.Check type="checkbox" checked label="Remember This Query" />
              </Form.Group>
              <Button variant="primary" className="w-25 mx-2 bg-dark"> schedule </Button>
              <Button variant="primary" className="w-25 mx-2 bg-dark" onClick={e => fetchStatus(e)}> status </Button>
              {showStatus && <Button variant="primary" className="w-25 mx-2 bg-dark float-end" onClick={() => setShowStatus(false)}> close window </Button>}
            </Form>
          </Col>
          <Col className="text-center w-50 border-left">
            <Form className='p-5 w-100 h-100 d-flex flex-column justify-content-center bg-transparent'>
              <Form.Group className="mb-3" controlId="formTrainNo">
                <Form.Label>Enter Station Code/Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Train No." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="rememberQuery">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Get Live Trains
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center w-100 bg-transparent m-5 footer text-black">© 2022 Copyright: Rail Labs</p>
          </Col>
        </Row>
      </Container>
      </Container>
    </div>
  )
}

export default App