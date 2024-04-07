import { Card, Col, Container, Row } from "react-bootstrap";

const TrainStatus = (status) => {
    console.log("status: ", status);

    return (
        <div className="trainStatusContainer">
            <Container className="w-100 h-100 bg-transparent my-2 rounded-5 border-0">
                <Col className="w-100">
                    <Card className="w-100 h-100 bg-transparent border-0">
                        <Card.Body>
                            <Container className="w-100 h-100">
                            <Row className="w-100">
                            <Card.Title className="text-center w-100 text-dark fw-bold">At {status.status.StationName} delayed by {status.status.DelayInArrival}</Card.Title>
                            </Row>
                            <Row className="w-100">
                            <Col className="w-50">
                            <Card.Text className="text-center w-100 text-dark">Expected arrival : {status.status.ScheduleArrival}</Card.Text>
                            <Card.Text className="text-center w-100 text-dark">Currently at station : {status.status.ActualArrival}</Card.Text>
                            </Col>
                            <Col className="w-50">
                            <Card.Text className="text-center w-100 text-dark">Currently at station : {status.status.ScheduleDeparture}</Card.Text>
                            <Card.Text className="text-center w-100 text-dark">Currently at station : {status.status.ActualDeparture}</Card.Text>
                            </Col>
                            </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    )
};
export default TrainStatus