import React, { Component } from 'react';


class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <p>
            <h1>Add Restaurant</h1>
            <input type='text' value={this.state.text} onChange={(event) => this.handleChange(event)} />
          </p>
            <input type='submit' value='Adding Btn' />
        </form>
      </div>
    );
  }
};
export default RestaurantInput;
