import React, { Component } from 'react'
import load1 from './load1.gif'
export class load extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load1} alt="loading" />
      </div>
    )
  }
}

export default load