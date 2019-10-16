import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {changeName} from './Actions/place';

class ProfileScreen extends Component {
  handleChangeText = inputName => {
    this.setState({name: inputName}, () => {
      console.log(this.state.name);
    });
  };

  submitHandler = () => {
    mapStateToProps(this.state);
    this.props.add(this.state.name);
    Alert.alert('Berhasil submit!');
  };

  render() {
    const {viewStyle, inputStyle, textStyle, btnStyle} = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Ganti Nama</Text>
        <View style={inputStyle}>
          <TextInput
            placeholder="Enter Name Here"
            onChangeText={this.handleChangeText}
          />
        </View>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => {
            this.submitHandler();
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
