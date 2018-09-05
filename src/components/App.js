import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, CardSection } from './common';
import LoginForm from './LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        // firebase setup and initialising
        firebase.initializeApp({
            apiKey: 'AIzaSyAke6g_dOgAxSV6TMwy8ETX5ddXObyLBxE',
            authDomain: 'auth-26728.firebaseapp.com',
            databaseURL: 'https://auth-26728.firebaseio.com',
            projectId: 'auth-26728',
            storageBucket: 'auth-26728.appspot.com',
            messagingSenderId: '966409216593'
        }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('user is defined');
                this.setState({ loggedIn: true });
            } else {
                console.log('user is undefined');
                this.setState({ loggedIn: false });
            }
        }
        );

    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (<CardSection><Button  onPress = {()=> firebase.auth().signOut()}>
                    log Out
                </Button>
                </CardSection>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'}></Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;