import { Component } from 'react'
import { Card } from 'react-bootstrap'

class MovieDetail extends Component {
  state = {
    movie: null, // inizialmente è null, ma dopo diventa un oggeto con un movie
  }

  componentDidMount = () => {
    // qui effettueremo la nostra chiamata iniziale per 'Iron Man'
    console.log('componentDidMount chiamato')
    this.fetchMovieDetails()
  }

  fetchMovieDetails = async () => {
    try {
      let response = await fetch(
        'http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.selectedMovie
      )
      console.log('RESPONSE: ', response)
      if (response.ok) {
        // la chiamata è andata a buon fine
        // e posso aspettarmi il risultato nel body
        let data = await response.json() // leggo il body
        console.log(data)
        this.setState({
          movie: data.Search[0], // <-- il mio risultato corretto
        })
      } else {
        alert('ERRORE NEL RECUPERO DEL FILM')
      }
    } catch (error) {
      console.log('error happened', error)
    }
  }

  render() {
    console.log('sono render')
    return (
      <>
        {this.state.movie ? (
          <Card>
            <Card.Img variant="top" src={this.state.movie.Poster} />
            <Card.Body className="text-dark">
              <Card.Title>{this.state.movie.Title}</Card.Title>
              <Card.Text>
                {this.state.movie.Year} - {this.state.movie.imdbID}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <div>LOADING...</div>
        )}
      </>
    )
  }
}

export default MovieDetail
