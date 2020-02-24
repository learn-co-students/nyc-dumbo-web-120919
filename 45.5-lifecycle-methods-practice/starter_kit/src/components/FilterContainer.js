import React, { Component } from 'react'
import Filter from './Filter'
import Sort from './Sort'


export default class FilterContainer extends Component {

    render() {
        return (
            <div style={{marginBottom: "5%"}}>
                <Filter handleFilter={this.props.handleFilter}/>
                <Sort handleSort={this.props.handleSort}/>
            </div>
        )
    }
}
