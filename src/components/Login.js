import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  KeyboardAvoidingView, 
  ImageBackground, 
  Text, 
  View,
  Platform, 
  Keyboard,
  StyleSheet,
} from 'react-native';
import { Card, Element, Input, Button, Spinner } from './common';

import { inputEmail, inputPassword, loginSubmit } from '../actions';

class Login extends Component {
  onInputEmail(text) {
    this.props.inputEmail(text);
  }

  onInputPassword(text) {
    this.props.inputPassword(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.loginSubmit({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size={'large'} />;
    } 
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.error}> {this.props.error} </Text>
        </View>
      );
    }
  }
  render() {
    const title = 'Get Stuff!';
    return (
      <ImageBackground 
          source={require('../assets/images/bgImage.jpg')}
          style={styles.container}
      > 
        <KeyboardAvoidingView 
          behavior="position"
          style={styles.bgSet}
        >
          <Card style={styles.titleArea}>
            <Text style={styles.title}>{title}</Text>
          </Card>
          <Card style={styles.area}>
            <Element>
              <Input 
                value={this.props.email}
                label="Email" 
                placeholder="Write email here"
                onChangeText={this.onInputEmail.bind(this)}
              />
            </Element>

            <Element>
              <Input 
                value={this.props.password}
                label="Password"
                placeholder="Write Password here"
                secureTextEntry
                onChangeText={this.onInputPassword.bind(this)}
              />
            </Element>

            {this.renderError()}

            <Element>
              {this.renderButton()}
            </Element>
          </Card>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  area: {
    padding: 5,
  },
  titleArea: {
    borderWidth: 0,
    marginTop: 80,
    marginBottom: 60,
    ...Platform.select({
      ios: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      android: {
        elevation: 0,
      }
    }),
  },
  title: {
    fontFamily: 'appleberry',
    fontSize: 36,
    color: '#1e495a',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    textShadowOffset: { width: 1, height: 1 }
  }, 
  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  }
});

const mapStateToProps = ({ login }) => {
  const { email, password, loading, error } = login;

  return { email, password, loading, error };
};

export default connect(mapStateToProps, { 
  inputEmail,
  inputPassword,
  loginSubmit
 })(Login);