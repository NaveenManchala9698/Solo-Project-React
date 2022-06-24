
import { Component } from "react";
import { Card } from "react-bootstrap"

class SingleMovie extends Component {

    render() {
        return (
            <Card id="movie-card">
                <Card.Img variant="top" src={this.props.movie.Poster} />
                <Card.Body id="movie-text">
                    <Card.Title>{this.props.movie.Title}</Card.Title>
                    <Card.Text>
                        {this.props.movie.Year}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleMovie