import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, TextInput, CardSection, Spinner } from './common';
//import firebase from 'firebase';

class LoginForm extends Component {

    state = { 
        error: '', 
        emailText: '', 
        passwordText: '', 
        loading: false 
    };

    onButtonPress() {
      this.setState({ error: "", loading: true });
    const { emailText, passwordText } = this.state;
        console.log(emailText);
        console.log(passwordText);

        const firebase = require("firebase");

        firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(emailText, passwordText)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailure.bind(this));
            }
        );
    }

    onLoginSuccess() {
        console.log('success');
        this.setState({ error: '', loading: false });
    }

    onLoginFailure() {
        console.log('failure');
        this.setState({ error: 'Authentication Failed!', loading: false });

    }

    renderButton() {
        if (this.state.loading) {
            console.log('Spinner shown');
            return <Spinner size='small' />
        }

        console.log('Spinner hidden');

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                login here
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        secureTextEntry={false}
                        maxLength={30}
                        placeholder={'abc@gmail.com'}
                        label="Email"
                        value={this.state.emailText}
                        onChangeText={emailText => this.setState({ emailText: emailText })}
                        style={styles.textInputStyle}
                    ></TextInput>

                </CardSection>
                <CardSection>
                    <TextInput
                        secureTextEntry={true}
                        maxLength={10}
                        placeholder={'*****'}
                        label={'Password'}
                        value={this.state.passwordText}
                        onChangeText={passwordText => this.setState({ passwordText: passwordText })}
                        style={styles.textInputStyle}
                    ></TextInput>
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );

    }
}

const styles = {
    textInputStyle: {
        height: 80,
        width: 400
    },

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
}

export default LoginForm;