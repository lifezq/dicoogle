var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

import {getUrlVars} from '../../utils/url';

import {Endpoints} from '../../constants/endpoints';

var DirectImageView = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },
  
	getInitialState: function() {
    return {error: false};
  },

	render() {
    const instanceUid = this.props.params.uid || getUrlVars().SOPInstanceUID;
	  const url = Endpoints.base + "/dic2png?SOPInstanceUID=" + instanceUid;
    
		return (this.state.error) ? (
      <img src="assets/image-not-found.png" width="auto" height="300px" />
      ) : (
      <img src={url} width="100%" height="100%" onError={this.imageLoadError} />
			);
	},

  imageLoadError() {
    this.setState({error: true});
  }
});



export {DirectImageView};
