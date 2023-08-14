/* eslint-disable import/no-unresolved */
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="Container">
        <h1 className="Heading">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="Paragraph">Click the button to increase the count</p>
        <button className="Button" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
