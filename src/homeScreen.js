import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {changeName} from './Actions/place';

class HomeScreen extends Component {
  render() {
    const {viewStyle, textStyle} = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Halo, {this.props.name.state}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(changeName(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
};
