import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/index';
import LoginFrom from './components/Loginfrom'



 class App extends Component{
     state = { loggedIn: null};
     componentWillMount(){
         firebase.initializeApp({
            apiKey: "AIzaSyDvMaxALhQL9Susz9UfjizFBj6l-Hagua0",
            authDomain: "auth-9b2cd.firebaseapp.com",
            databaseURL: "https://auth-9b2cd.firebaseio.com",
            projectId: "auth-9b2cd",
            storageBucket: "auth-9b2cd.appspot.com",
            messagingSenderId: "807696478614",
            appId: "1:807696478614:web:31ea9f18d2571d53"
          });

          firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.setState({loggedIn: true});
            }
            else{
                this.setState({loggedIn: false})
            }
          });
     }
renderContent(){
    switch(this.state.loggedIn){
        case true: {
           return (<Button onPress={() => firebase.auth().signOut()}>
               Login Out
               </Button>
           );
        }
        case false: {
           return <LoginFrom/>
        }
        default:{
           return <Spinner size="large"/>  
        }
    }
}

    render(){
        return(
            <View>
                    <Header headerText="Authentication" ></Header>
                    {this.renderContent()}
                       
            </View>
        );
    }
}


export default App