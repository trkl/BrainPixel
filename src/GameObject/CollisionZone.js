import React, { Component } from "react";
import CollisionManger from "../CollisionManager/CollisionManager";
import PropTypes from "prop-types";
import Vector from "./../Vector/Vector";

export default class CollisionZone extends Component {
  constructor(props) {
    super(props);
    this.position = this.props.parent.position;
    this.dimensions = this.props.dimensions;
    this.state = { ...props };
    this.props.parent.add(this);
  }

  componentWillMount() {
    CollisionManger.instance.add(this);
    // setInterval(this.update, 2000);
  }

  componentWillUnmount() {
    CollisionManger.instance.remove(this);
  }

  update = () => {
    this.setState({ ...this.props });
  };

  render = () => {
    const newPosition = this.props.position.plus(this.props.offset);
    return (
      <div
        style={{
          position: "absolute",
          height: this.props.dimensions.y,
          width: this.props.dimensions.x,
          top: newPosition.y,
          left: newPosition.x,
          backgroundColor: "black"
        }}
      />
    );
  };
}

CollisionZone.propTypes = {
  dimensions: PropTypes.instanceOf(Vector).isRequired,
  offset: PropTypes.instanceOf(Vector).isRequired
};

CollisionZone.defaultProps = {
  dimensions: new Vector(),
  offset: PropTypes.instanceOf(Vector).isRequired
};