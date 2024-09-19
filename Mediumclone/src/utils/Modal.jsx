import React from 'react'
// import PropTypes from 'prop-types';

const Modal = ({children}) => {
  return  <>
  <div className="bg-white/50 fixed inset-0 z-10"/>
      {children}</>;
  
};

// Modal.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Modal
