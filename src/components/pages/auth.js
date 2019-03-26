import React, { Component } from "react";
import Blogo from "../../../static/assets/images/Bottega-logo.png"
import firebase from "../firebaseConfig"; // Careful to not import from "firebase"
import withFirebaseAuth from "react-auth-firebase";
//import { threadId } from "worker_threads";
 
class Auth extends Component {
  constructor(props) {
    super(props)
    this.signInInput = this.signInInput.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.letGo = this.letGo.bind(this);
   // this.userEmail = this.userEmail.bind(this);
  //  this.userPass = this.userPass.bind(this);
  }

  signInInput() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        document.getElementById("login_div").style.display = "none";
    
        var user = firebase.auth().currentUser;
    
        if(user != null){
    
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }
    
      } else {
        // No user is signed in.
        document.getElementById("login_div").style.display = "block";
      }
    });
  }
  

   login(){
    
        var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  }

  letGo(){
    if(document.getElementById="email" === "engineer@bottega.tech") (document.getElementById = "password" === "ready1");
      return(this.props.history.push("/home"))
  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div className="left-column">

        </div>

        <div className="right-column">
          <div className="main-logo">
            <a href="https://bottega.tech/" target="_blank">
              <img src={Blogo} alt="Bottega"/>
            </a>
          </div>

          <div className="login-to-access">
            <div> <br/> </div>
            <div id="login_div">
              <form onSubmit={this.signInInput}>
               <div> <input type="email" placeholder="Email..." id="email"/> </div> 
               <div> <input type="password" placeholder="Password..." id="password"/> </div> 
               <div> <input type="submit" value="submit" id="submit" onClick={this.letGo}/> </div> 
              </form>
            </div>
            <div> <br/> </div>
          </div>
        </div>
      </div>
    );
  }
}
// Important
 
// See authConfig api for all available options
// Add only the required auth types.
// Only their related props will be added
// For ex: signInWithGoogle will be added only when there is google object in authConfig
// At least an empty object required to enable that method
 
const authConfig = {
  email: {
    verifyOnSignup: false, // Sends verification email to user upon sign up
    saveUserInDatabase: true // Saves user in database at /users ref
  },
};

export default withFirebaseAuth(Auth, firebase, authConfig);
