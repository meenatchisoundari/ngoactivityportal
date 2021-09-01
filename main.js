// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfOC_kFqlWBA1al_W1CRwdfrNR-2iyM-w",
  authDomain: "userinfo-e204b.firebaseapp.com",
  databaseURL: "https://userinfo-e204b-default-rtdb.firebaseio.com/",
  projectId: "userinfo-e204b",
  storageBucket: "userinfo-e204b.appspot.com",
  messagingSenderId: "311159039674",
  appId: "1:311159039674:web:3fbeed27fe6cffc464c483",
  measurementId: "G-SNDK5C5LKN"
};

firebase.initializeApp(firebaseConfig);

//ref messages collection

var messagesRef = firebase.database().ref('userDetails');

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //get values
    var firstname = getInputVal('fname');
    var lastname = getInputVal('lname');
    var country = getInputVal('country');
    var state = getInputVal('state');

    saveMessage(firstname,lastname,country,state);    

}

// func to get get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save msg

function saveMessage(firstname,lastname,country,state){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        firstname: firstname,
        lastname: lastname,
        country: country,
        state: state
    })

}