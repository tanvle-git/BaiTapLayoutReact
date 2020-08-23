import React, { Component } from 'react'
import BT4Header from './BT4Header'
import BT4Content from './BT4Content'
import BT4Footer from './BT4Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT4Header />
                <BT4Content />
                <BT4Footer />
            </div>
        )
    }
}
