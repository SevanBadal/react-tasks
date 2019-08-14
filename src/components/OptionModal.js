import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    className="modal"
    closeTimeoutMS={200}
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.clearSelectedOption}
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.clearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;

// create a new event handler in IndecisionApp that clears selectedOption state
// pass that into OptionModal
// Call it on button click
