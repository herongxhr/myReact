import React from 'react';
import ReactDOM from 'react-dom';
import Sliders from './components/Sliders';

const Img = [
    require('./img/1.jpg'),
    require('./img/2.jpg'),
    require('./img/3.jpg'),
]

ReactDOM.render(
    <Sliders
        images={Img}
        speed={1}
        delay={2}
        autoPlay={true}
        autoParse={true}
    />, document.querySelector('#root')
);