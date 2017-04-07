import React from 'react';
import { Link } from 'react-router';

const Home = () => (
    <div className="row">
        <div className="medium-6 columns">
            <Link to="about"><button className="button">Go somewhere!</button></Link>
        </div>
    </div>

);

export default Home;