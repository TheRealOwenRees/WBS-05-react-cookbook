import { Carousel} from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom"

const RecipeDetail = () => {

    const location = useLocation()
    const data = location.state?.recipe

    const { name } = useParams()
    console.log(name)

    return (
        <div className="container p-4">
            {data.title}
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-2">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://placehold.co/600x400"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://placehold.co/600x400"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://placehold.co/600x400"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 my-4">
                    <h3>Ingredients</h3>
                    <hr />
                </div>
                <div className="col-12 col-md-6 my-4">
                    <h3>Instructions</h3>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail