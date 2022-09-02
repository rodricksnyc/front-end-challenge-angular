import { Col, Container, Row } from "react-bootstrap";
import AddressCard from "./components/AddressCard";
import "./styles.css";

const App = () => {

  return (
    <div className="main overflow-hidden" id="overview">
      <Container fluid className="padding-0">
        <Row>
          <Col xs={12} md={12} lg={3}>
            <div className="blueBackground position-relative">
              <h1 className="white">React Challenge</h1>

              <h2 className="white">Address Book</h2>
            </div>
          </Col>

          <Col xs={12} md={12} lg={9} className="padding-0">

            <AddressCard />
      
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
