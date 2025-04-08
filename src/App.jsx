import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import MyNav from './components/MyNav'
import { Component } from 'react'
import MovieSelector from './components/MovieSelector'
import {Container} from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'

class App extends Component {
  state =  {
    movieTitle : 'Iron Man', 
  }
  handleChange=(nuovoValore) => {
    this.setState({
      movieTitle: nuovoValore,
    })
  }

  render (){
  return (
    <>
    <MyNav/>
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
    <MovieSelector valore={this.state.movieTitle}
    cambiaValore={this.handleChange}
    />
    {/*<MovieCard/>*/}
    </Col>
    </Row>
    </Container>
    </>
  )
}
}

export default App
