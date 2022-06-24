
import { Component } from "react";
import SingleMovie from "./SingleMovie";
import { Container, Col, Row, Form } from 'react-bootstrap'
import { SpinnerRoundOutlined } from 'spinners-react'

class Movielist1 extends Component {
    state = {
        movies: [],
        isLoading: true, searchQuery: ""
    }
    componentDidMount = () => {
        this.fetchMovies(this.props.movieTitle)
    }

    fetchMovies = async (query) => {
        try {
            const url = `http://www.omdbapi.com/?apikey=b93de60f&s=${query}`

            const getMovies = await fetch(url)

            if (getMovies.ok) {
                const response = await getMovies.json()
                console.log(response)
                this.setState({ movies: response.Search, isLoading: false })
            }
            else {
                alert("Error!!")
                this.setState({ isLoading: false })
            }
        }
        catch (error) {
            console.log(error)
            this.setState({ isLoading: false })

        }
    }

    render() {
        return (
            <Container>

                <Row>
                    <Col md={12} className="mt-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Search Movies" value={this.state.searchQuery} onChange={(e) => {
                                    this.setState({ searchQuery: e.target.value })
                                }
                                } />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>


                <h1 className="text-light">{this.props.movieTitle}</h1>
                <Row className="justify-content-center mt-3">

                    {this.state.isLoading && (<SpinnerRoundOutlined size={70} thickness={163} speed={100} color="rgba(172, 57, 59, 1)" />)}

                    
                    {this.state.movies.slice(0,6).map(movie => (

                        <Col key={movie.imdbID} sm={6} md={4} lg={2} className="text-center">
                            <SingleMovie movie={movie} />
                        </Col>

                    ))}
                </Row>
            </Container>
        )

    }
}

export default Movielist1