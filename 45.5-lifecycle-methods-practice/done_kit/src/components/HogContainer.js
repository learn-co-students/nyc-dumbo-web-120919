import React, { Component } from 'react'
import PigTile from './PigTile'
import { Tweet } from 'react-twitter-widgets'

let generalHogContainerColor = '#'+Math.floor(Math.random()*16777215).toString(16)

export default class HogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: 0
        }
        console.log(`%cCONSTRUCTED: HogContainer`, `color: ${generalHogContainerColor}`);
    }

    componentDidMount() {
        console.log(`%cMOUNTED: HogContainer`, `color: ${generalHogContainerColor}`);

        document.title = "| Piggies " + document.title 
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`%cMAYBE WILL UPDATE: HogContainer`, `color: ${generalHogContainerColor}`);
        // return nextProps.hogs.length > 14
        // return true
    }

    componentDidUpdate(){
        console.log(`%cUPDATED: HogContainer`, `color: ${generalHogContainerColor}`);
      }

    // static getDerivedStateFromProps(nextProps) {
    //     const code = nextProps.code
    //     return {code}
    // }

    componentWillUnmount(){
        console.log(`%cUNMOUNTING: HogContainer`, `color: ${generalHogContainerColor}`);
    }


    render() {
        // console.log("%cPROPS", `color: ${generalHogContainerColor}`, this.props)
        // console.log("%cSTATE", `color: ${generalHogContainerColor}`, this.state.code)
        console.log(`%cRENDERED: HogContainer`, `color: ${generalHogContainerColor}`);

        return (
            <div className="ui grid container styled" >
                {this.state.code.length > 1
                ?
                <Tweet tweetId={this.state.code}/>
                :
                this.props.hogs.map(hog => {
                    return <PigTile key={`${hog.name}`} hog={hog} className="ui eight wide column"/>})
                 }
            </div>
        )
    }
}