import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Form, Card } from 'react-bootstrap'
import { Component } from 'react'

class App extends Component {
  state = {
    movieTitle: 'Iron Man',
  }

  render() {
    return (
      <div className="App">
        <header>
          <Container>
            <Row className="justify-content-center mt-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Scegli il tuo film</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.movieTitle}
                    onChange={(e) =>
                      this.setState({ movieTitle: e.target.value })
                    }
                  >
                    <option>Iron Man</option>
                    <option>Black Widow</option>
                    <option>Spiderman</option>
                    <option>The Hulk</option>
                    <option>Doctor Strange</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col xs={12} md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="http://placekitten.com/300/300"
                  />
                  <Card.Body className="text-dark">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
