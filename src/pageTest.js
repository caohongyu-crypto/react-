import React, { Component } from 'react'
import Pager from './page'

export default class pageTest extends Component {

    state = {
        current:3,
        total:100,
        limit:10,
        panelNumber:5
    }
    
    handleClick = (newPage) => {
        this.setState({
            current:newPage
        })
        console.log(newPage);
    }
    render() {
        return (
            <div>
                <Pager {...this.state} onChangePage={this.handleClick}/>
            </div>
        )
    }
}
