import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { addOneBrit, deleteOneBrit } from '../Redux/britActions'


class NewBritForm extends Component {

  state = {
    name: "Paddington Bear",
    image: "https://cdn.shopify.com/s/files/1/1752/4477/products/PaddClassic16inch_Template_1024x1024.jpg?v=1574193984",
    job: "World Wide Happiness",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneBrit(this.state)
  }

  // addBrit = () => {
    // this.props.addOneBrit({
    //   name: "Gracie",
    //   job: "The best",
    //   image: "https://cdn.shopify.com/s/files/1/2385/1259/products/pmts2654-Paddington-Bear-Tshirt-closeup_1024x1024.jpg?v=1563451273"
    // })
  // }

  render() {
    let {name, image, job} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input type="text" autoComplete="off" placeholder='Name' name="name" value={name} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <input type="text" autoComplete="off" placeholder='Image' name="image" value={image} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Job</label>
          <input type="text" autoComplete="off" placeholder='Job' name="job" value={job} onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit'>Create</Button>
      </Form>
    );
  }
}



export default connect(null, { addOneBrit, deleteOneBrit })(NewBritForm);













































//
