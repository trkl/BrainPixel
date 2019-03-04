import React from 'react'
import WithResources from '../Resource Manager/HOC/WithResources'
import './GameOverMenu.css'


class GameOverMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            gameOverStyleImg: {
                height: '100vh',
                width: '100vw',
                maxWidth: "35%",
                maxHeight: "35%",
                backgroundImage: 'url('+(props.resourceManager.getImage("GameOver.png")),
                position: 'absolute',
                top: "23%",
                left: "40%",
                marginTop: "-50px",
                marginLeft: "-100px",
                zIndex: 5,
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                backgroundSize: "contain",
            },
            scoreBoardStyleImg: {
                height: '100vh',
                width: '100vw',
                maxWidth: "35%",
                maxHeight: "35%",
                backgroundImage: 'url('+(props.resourceManager.getImage("ScoreBoard.png")),
                position: 'absolute',
                top: "45%",
                left: "40%",
                marginTop: "-50px",
                marginLeft: "-100px",
                zIndex: 5,
                backgroundRepeat: "repeat-x",
                overflow: "hidden",
                backgroundSize: "contain",
            },
            scoreStyle: {
                position: 'relative',
                top: "43%",
                left: "95%",
                marginTop: "-50px",
                marginLeft: "-100px",
                zIndex: 5,
                fontSize: 60,
                fontWeight: "bold"
            },
            bestScoreStyle: {
                position: 'relative',
                top: "68%",
                left: "95%",
                marginTop: "-50px",
                marginLeft: "-100px",
                zIndex: 5,
                fontSize: 60,
                fontWeight: "bold"
            },

            bestScore: props.bestScore,
            score: props.score,            
        }
    }

    render(){
        return(
            <div>
                <div style={this.state.gameOverStyleImg}></div>
                <div style={this.state.scoreBoardStyleImg}>
                    <div style={this.state.scoreStyle}>{this.state.score}</div>
                    <div style={this.state.bestScoreStyle}>{this.state.bestScore}</div>
                </div>
            </div>
        )
    }
}
export default WithResources(GameOverMenu)