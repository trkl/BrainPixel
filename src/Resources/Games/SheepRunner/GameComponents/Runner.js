import GameComponent from "../../../../GameObject/GameComponent";
import React, { Component } from "react";
import RigidBody from "../../../../GameObject/RigidBody";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Vector from "../../../../Vector/Vector";
import WithKeyboardSubscribe from "../../../../InputManager/HOC/WithKeyboardSubscribe";
import PropTypes from "prop-types";
import Sprite from "../../../../Sprite/Sprite";
import AudioManager from "../../../../AudioManager/AudioManager"

class Runner extends Component {
  constructor(props) {
    super(props);
    this.cameraFollows = this.props.cameraFollows;
    this.AudioManager = new AudioManager();
  }

  componentWillMount() {
    if (this.props.controller)
      this.props.keyboardSubscribe(this, " ", {
        physics: { force: new Vector([0, -10000]), duration: 40 },
        audio: {soundName: "sfx_wing.wav"},
      });
      
  }
  jumping = false;
  render = () => (
    <GameComponent
      cameraFollows={this.cameraFollows}
      parent={this}
      position={this.props.position}
    >
      <RigidBody
        weight={10}
        velocity={this.props.velocity}
        force={this.props.force}
        gravity={this.props.gravity}
        drag={1}
      />
      <CollisionZone
        offset={new Vector([.5, 0])}
        dimensions={new Vector([3.5, 10.3])}
      />
      <Sprite
        scale={0.4}
        width={2048}
        height={256}
        n={8}
        imagesource="bondin.png"
      />
    </GameComponent>
  );
}

Runner.propTypes = { cameraFollows: PropTypes.bool.isRequired };
Runner.defaultProps = { cameraFollows: false };

export default WithKeyboardSubscribe(Runner);