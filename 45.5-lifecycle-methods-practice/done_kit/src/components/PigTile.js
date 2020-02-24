import React, { Component } from 'react'

let generalTileColor = '#'+Math.floor(Math.random()*16777215).toString(16)

export default class PigTile extends Component {

    constructor(props) {
        super(props)
        this.state = {
          timeToGo: 5
        }
        console.groupCollapsed(`%cCONSTRUCTED: PigTile`, `background: ${generalTileColor}`)
      }

    componentDidMount(){
        // this.interval = setInterval(
        //     () => this.setState({
        //       timeToGo: this.state.timeToGo - 1
        //     }),
        //     1000
        //   )
        console.log(`%cMOUNTED: PigTile`, `color: ${generalTileColor}`);
    }

    shouldComponentUpdate(nextProps, nextState){
      // if (this.props.hog.name === "Piggy smalls"){
      //   console.log("🐽 🐽 🐽 🐽 🐽 ")
      //   console.log(`%cMAYBE UPDATE: PigTile of ${this.props.hog.name}`, `color: ${generalTileColor}`, this.state.timeToGo);
      // }
        // return nextState.timeToGo > -1
        return true
    }

    componentDidUpdate(){
      // if (this.props.hog.name === "Piggy smalls"){
      //   console.log(`%cUPDATED: PigTile of ${this.props.hog.name}`, `color: ${generalTileColor}`);
      // }
        // console.log(`%cUPDATED: PigTile of ${this.props.hog.name}`, `color: ${generalTileColor}`);
      }

    componentWillUnmount(){
        clearInterval(this.interval)
        console.log(`%cUNMOUNTING: PigTile`, `color: ${generalTileColor}`);
    }

    render() {
      // if (this.props.hog.name === "Piggy smalls"){
        console.log(`%cRENDERED: PigTile of ${this.props.hog.name}`, `color: ${generalTileColor}`, this.state.timeToGo);
      // }
        // console.log(`%cRENDERED: PigTile`, `color: ${generalTileColor}`);
        // console.log(`%c${this.props.hog.name}:`, `color: ${generalTileColor}`, this.state.timeToGo)
        console.groupEnd()
        let {name: pigName, specialty, greased, weight, 'highest medal achieved': medal} = this.props.hog
        let slug = pigName.toLowerCase().replace(/\s/g, "_")
        return (
            <div >
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
