// eslint-disable no-alert
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './css/login.css';
import axios from 'axios';

export default class Sample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Address: '',
      CreditNumer: '',
      product: null
    };
  }

  componentDidMount(){
    let p = this.props.SelectedBook.map((product, index) => {
      return(
        <p>Item +{index+1}: {product.name}  </p>
      );
    });
    this.setState({product: p});
  }

  render() {
    return (
      <div
        onClick={this.props.handleToggleClose}
        style={{
          position: 'absolute' /* Stay in place */,
          zindex: 1 /* Sit on top */,
          paddingTop: 100 /* Location of the box */,
          left: 0,
          top: 0,
          width: '100%' /* Full width */,
          height: '100%' /* Full height */,
          backgroundColor: 'rgba(0, 0, 0, 0.4)' /* Black w/ opacity */
        }}
      >
        <div>
          {/* <form
            style={{
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              widht: '50%',
              height: '50%',
              backgroundColor: '#ffffff'
            }}
          >
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Credit-Card:
              <input type="text" name="name" />
            </label>
          </form> */}
          <p>Total price: {this.props.TotalOrderPrice}</p>
          <p>Address: </p>
          <button>Purchase Now</button>
        </div>
      </div>
    );
  }
}
