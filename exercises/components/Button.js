import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props, context) {
  return (
    <button style={{background: context.color}}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

Button.contextTypes = {
  color: PropTypes.string
}
