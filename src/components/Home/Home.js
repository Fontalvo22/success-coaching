import './Home.scss';

import Carousel from './Carousel/Carousel';
import Videos from './Videos/Videos';
import Events from "./Events/Events";

function Home() {
    return (
        <div className="Home container">
            <Carousel />
            <Videos />
            <Events />
        </div>
    )
}

export default Home;