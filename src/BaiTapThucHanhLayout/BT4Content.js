import React, { Component } from 'react'
import BT4Carousel from './BT4Carousel'
import BT4ProductList from './BT4ProductList'

export default class BT4Content extends Component {
    render() {
        return (
            <div className="container mt-5">
                <BT4Carousel />
                <BT4ProductList />
            </div>
        )
    }
}
