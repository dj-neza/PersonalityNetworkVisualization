import React from "react";
import PropTypes from "prop-types";
import ForceGraph3D from "react-force-graph-3d";
//import {ForceGraph3D} from "react-force-graph";
import network from './network.json'
import { colorBasedOnGroup } from '../../util/personality-algorithms.js';
import * as THREE from 'three';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fgRef = React.createRef();
    this.state = {
      highlightedNode: null
    };
  }

  componentDidMount() {
    this.fgRef.current.d3Force("link").distance(links => links.value);
  }

  handleNodeHover = node => {
    this.setHighlightNodes(node);
  };

  setHighlightNodes(node) {
    if (this.state.highlightedNode == node) return;
    this.setState({ highlightedNode: node });
  }

  render() {
    return (
      <div className="HomeWrapper">
        <ForceGraph3D
          ref={this.fgRef}
          graphData={network}
          nodeLabel={node => node.type}
          linkOpacity={0.2}
          linkWidth={link => {
            if (this.state.highlightedNode == null) {
              return 0.3;
            } else if (
              this.state.highlightedNode == link.source ||
              this.state.highlightedNode == link.target
            ) {
              return 2;
            } else {
              return 0.1;
            }
          }}
          onNodeHover={this.handleNodeHover}
          nodeColor={(node) => this.state.highlightedNode == node ? 'white' : colorBasedOnGroup(node.group)}
          nodeOpacity={0.8}
        />
      </div>
    );
  }
}

/**
 * <ForceGraph3D 
        ref={this.fgRef}
        graphData={network} 
        nodeLabel="name" 
        nodeColor={(node) => colorBasedOnGroup(node.group)}
        //onNodeHover={this.handleNodeHover}
        nodeThreeObject={(node) => {
          console.log(node.image);
          const imgTexture = new THREE.TextureLoader().load(`./images/${node.image}`);
          console.log(imgTexture);
          const material = new THREE.SpriteMaterial({ map: imgTexture });
          console.log(material);
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(20, 20);
          console.log(sprite);
          return sprite;
        }}
      />
 */

export default Home;
