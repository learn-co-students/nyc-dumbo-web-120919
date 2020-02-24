import React, { Component } from 'react'

let generalTileColor = '#'+Math.floor(Math.random()*16777215).toString(16)

export default class PigTile extends Component {

    constructor(props) {
        super(props)
        this.state = {
          timeToGo: 10
        }
        // console.log(`%cCONSTRUCTED: PigTile`, `background: ${generalTileColor}`)
      }

    componentDidMount(){
        // console.log(`%cMOUNTED: PigTile`, `color: ${generalTileColor}`);
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log(`%cMAYBE WILL UPDATE: PigTile`, `color: ${generalTileColor}`);
        return true
    }

    componentDidUpdate(){
        // console.log(`%cUPDATED: PigTile`, `color: ${generalTileColor}`);
      }

    componentWillUnmount(){
        // console.log(`%cUNMOUNTING: PigTile`, `color: ${generalTileColor}`);
    }

    render() {
        // console.log(`%cRENDERED: PigTile`, `color: ${generalTileColor}`);

        let {name: pigName, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
        let slug = pigName.toLowerCase().replace(/\s/g, "_")
        return (
            <div>
                <h1>{pigName}</h1>
                <img src={`/hog-imgs/${slug}.jpg`} alt=""/>
                <p><strong>specialty:</strong> {specialty}</p>
                <p><strong>greased:</strong> {greased}</p>
                <p><strong>weight:</strong> {weight}</p>
                <p><strong>medal:</strong> {medal}</p>
            </div>
        )
    }
}
