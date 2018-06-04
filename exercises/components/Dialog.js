import React from 'react';
import PropTypes from 'prop-types';

export default class Dialog extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDialogClick = this.handleDialogClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick() {
    this.props.onClose();
  }

  handleDialogClick(event) {
    event.stopPropagation();
  }

  render() {
    return <div onClick={this.handleDialogClick}>Beautiful dialog with a backdrop</div>;
  }
}

Dialog.propTypes = {
  onClose: PropTypes.func,
};
