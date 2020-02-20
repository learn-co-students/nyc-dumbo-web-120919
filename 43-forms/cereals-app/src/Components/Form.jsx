import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form>
        <label htmlFor="personName">Name:</label>
        <input
          id="personName"
          type="text"
          personName="personName"
          autoComplete="off"
        />
      <label htmlFor="cerealName">likes:</label>
        <input
          id="cerealName"
          type="text"
          personName="cerealName"
          autoComplete="off"
        />
        <input type="submit" value="Send"/>
      </form>
    );
  }

}

export default Form;
