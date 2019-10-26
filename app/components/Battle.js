import React from 'react';

function Instructions() {
  return (
    <div>
      INSTRUCTIONS
    </div>
  )
}

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    )
  }
}
