// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase: AuthStateChanged
var userAuth = null;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        userAuth = user;
        showUserZone();
        Froged('set', { email: user.email });
    } else {
        userAuth = null;
        showVisitorZone();
    }
});

//-- AUTH METHODS -----------------------------------------
function logAsUser1() {
    firebase.auth().signInWithEmailAndPassword('one@user.com', 'password').catch((error) => {
        console.error(error);
    });
}
function logAsUser2() {
    firebase.auth().signInWithEmailAndPassword('two@user.com', 'password').catch((error) => {
        console.error(error);
    });
}
function logout() {
    Froged('logout');
    firebase.auth().signOut().catch((error) => {
        console.error(error);
    });
}
function showVisitorZone() {
    document.getElementById('loading').style = "display: none";
    document.getElementById('visitorZone').style = 'display: block';
    document.getElementById('userZone').style = 'display: none';
    Froged('hide');
}
function showUserZone() {
    document.getElementById('loading').style = "display: none";
    document.getElementById('visitorZone').style = 'display: none';
    document.getElementById('userZone').style = 'display: block';
    document.getElementById('userZoneMessage').innerHTML = `Hello ${ userAuth.email }`;
    Froged('show');
}
Froged('hook', 'onConnect', () => {
    if (userAuth)
        Froged('show')
    else
        Froged('hide');
});

