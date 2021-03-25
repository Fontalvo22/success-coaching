import React, { useState } from 'react';

import { Carousel as RbCarousel } from 'react-bootstrap';
import './Carousel.scss';
function Carousel() {
    const [index, setIndex] = useState(0);
    const maximun = 3 - 1; //El maximo lo obtengo con el maximo real -1

    const nextCarousel = (selectedIndex, e) => {
        if (index >= maximun) {
            setIndex(0);
        } else {

            setIndex(index + 1);
        }
    };

    const prevCarousel = (selectedIndex, e) => {
        if (index < 1) {
            setIndex(maximun);
        } else {

            setIndex(index - 1);
        }
    };

    return (
        <div className="Carousel">
            <div className="d-flex justify-content-between align-items-center carousel-container">
                <a className="carousel-control-prev text-dark" href="#" onClick={() => { prevCarousel() }} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">Atras</span>
                    <span className="sr-only">Previous</span>
                </a>
                <RbCarousel controls={false} activeIndex={index} indicators={false} v>
                    <RbCarousel.Item>
                        <img className="d-block img-fluid" src="https://picsum.photos/2048/300" alt="First slide" />
                        <RbCarousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </RbCarousel.Caption>
                    </RbCarousel.Item>
                    <RbCarousel.Item>
                        <img className="d-block img-fluid" src="https://picsum.photos/2048/300" alt="First slide" />
                        <RbCarousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </RbCarousel.Caption>
                    </RbCarousel.Item>
                    <RbCarousel.Item>
                        <img className="d-block img-fluid" src="https://picsum.photos/2048/300" alt="First slide" />
                        <RbCarousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </RbCarousel.Caption>
                    </RbCarousel.Item>
                </RbCarousel>
                <a className="carousel-control-next text-dark" href="#" onClick={() => { nextCarousel() }} role="button" data-slide="prev">
                    <span className="carousel-control-next-icon" aria-hidden="true">Next</span>
                    <span className="sr-only">next</span>
                </a>
            </div>
        </div>
    )


}

export default Carousel;