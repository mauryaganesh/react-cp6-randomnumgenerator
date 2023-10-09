import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClick = () => {
    const randomNumber = Math.floor(Math.random() * 101) // Generates a random number between 0 and 100
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onClick}>
            Generate
          </button>
          <p className="count-p">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
