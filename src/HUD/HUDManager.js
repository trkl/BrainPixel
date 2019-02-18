import React from 'react'
import './HUDManager.css'

class HUDManager extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: 0,
            playing: false,
            zIndex: props.zIndex,
            styleScore: {
                zIndex: props.zindex,
                position: "absolute",
                top: "30px",
                fontFamily: 'Pixel',
                fontSize: "100px",
                textAlign: "center",
                color: "#FFF",
                width: "100%"
            },    
        }
    }

    handleScore(){

        this.setState(prevScore => {
            return {  
                score: prevScore.score + 1
            }
        })
    }

    displayMenu(){


    }

    render(){
        return(
            <div>
                
                <h2 style={this.state.styleScore}>{this.state.score}</h2>
            </div>
            
        )
    }
}
export default HUDManager