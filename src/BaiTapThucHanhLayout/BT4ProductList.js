import React, { Component } from 'react'
import BT4ProductItem from './BT4ProductItem'

export default class BT4ProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <BT4ProductItem />
                <BT4ProductItem />
                <BT4ProductItem />
                <BT4ProductItem />
            </div>
        )
    }
}
