import React, { Component } from 'react';

export default class SlidersItem extends Component {
    render() {
        let style = {
            width: this.props.images.length * 500 + 'px',
            left: this.props.index * -500 + 'px',
            transitionDuration: this.props.speed + 's'
        };
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((item, index) => (
                        <li
                            className="slider"
                            key={index}
                        >
                            <img src={item} alt="" />
                        </li>
                    ))
                }
            </ul>
        )
    }
}