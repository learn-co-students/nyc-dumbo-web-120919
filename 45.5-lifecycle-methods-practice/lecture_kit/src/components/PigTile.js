import React, { Component } from 'react'

let generalTileColor = '#'+Math.floor(Math.random()*16777215).toString(16)

export default class PigTile extends Component {

    constructor(props) {
        super(props)
        this.state = {
          timeToGo: 10
        }
        console.groupCollapsed(`%cCONSTRUCTED: PigTile`, `background: ${generalTileColor}`)
      }

    componentDidMount(){
        document.title = "YAY "
        this.interval = setInterval(
            () => this.setState({
              timeToGo: this.state.timeToGo - 1
            }),
            1000
          )
        // console.log(`%cMOUNTED: PigTile`, `color: ${generalTileColor}`);
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log(`%cMAYBE WILL UPDATE: PigTile`, `color: ${generalTileColor}`);
        // if (this.props.hog.name === "Piggy smalls"){
        //     console.log(`🐽 🐽 🐽 🐽`)
        //     console.log(`%cShould I update?`, `color: ${generalTileColor}`)
        // }
        return true
    }

    componentDidUpdate(){
        // if (this.props.hog.name === "Piggy smalls"){
        //     console.log(`%cOkay, I've updated!`, `color: ${generalTileColor}`)
        // }
        // console.log(`%cUPDATED: PigTile`, `color: ${generalTileColor}`);
      }

    componentWillUnmount(){
        clearInterval(this.interval)
        // console.log(`%cUNMOUNTING: PigTile`, `color: ${generalTileColor}`);
    }

    render() {
        // if (this.props.hog.name === "Piggy smalls"){
        //     console.log(`%c${this.props.hog.name}:`, `color: ${generalTileColor}`, this.state.timeToGo)
        // }
        // console.log(`%cRENDERED: PigTile`, `color: ${generalTileColor}`);
        
        console.groupEnd()
        // console.log(`${this.props.hog.name}`, this.state.timeToGo);

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
