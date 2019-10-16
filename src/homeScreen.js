import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {changeName, changeAge} from './Actions/UserAction';

class HomeScreen extends Component {
  render() {
    const {viewStyle, textStyle} = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Halo, {this.props.user.name}</Text>
        <Text style={textStyle}>Umurmu adalah {this.props.user.age} tahun</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addName: user => {
      dispatch(changeName(user));
    },
    addAge: user => {
      dispatch(changeAge(user));
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
