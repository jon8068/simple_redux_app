import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {changeName, changeAge} from './Actions/UserAction';

class ProfileScreen extends Component {
  handleChangeText = input => {
    this.setState({user: input}, () => {
      console.log(this.state.user);
    });
  };

  submitHandlerName = () => {
    mapStateToProps(this.state);
    this.props.addName(this.state.user);
    Alert.alert('Berhasil submit nama!');
  };

  submitHandlerAge = () => {
    mapStateToProps(this.state);
    this.props.addAge(this.state.user);
    Alert.alert('Berhasil submit umur!');
  };

  render() {
    const {viewStyle, inputStyle, textStyle, btnStyle} = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Tambahkan Nama</Text>
        <View style={inputStyle}>
          <TextInput
            placeholder="Enter Name Here"
            onChangeText={this.handleChangeText}
          />
        </View>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => {
            this.submitHandlerName();
          }}>
          <Text style={textStyle}>Submit</Text>
        </TouchableOpacity>
        <Text style={textStyle}>Tambahkan Umur</Text>
        <View style={inputStyle}>
          <TextInput
            placeholder="Enter Age Here"
            onChangeText={this.handleChangeText}
          />
        </View>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => {
            this.submitHandlerAge();
          }}>
          <Text style={textStyle}>Submit</Text>
        </TouchableOpacity>
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
)(ProfileScreen);

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    width: 300,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: '#FFFF66',
    justifyContent: 'center',
    width: 200,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
};
