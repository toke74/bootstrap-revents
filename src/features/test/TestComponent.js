import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {incrementCounter, decrementCounter} from './testActions';

class TestComponent extends Component {
  render () {
    const {data, incrementCounter, decrementCounter} = this.props;
    return (
      <div>
        <h1>Test Components</h1>
        <h3>The answer is : {data} </h3>
        <Button
          variant="success"
          style={{marginRight: '7px'}}
          onClick={incrementCounter}
        >
          Increment
        </Button>
        <Button variant="danger" onClick={decrementCounter}>Decrement</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data,
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default connect (mapStateToProps, mapDispatchToProps) (TestComponent);
