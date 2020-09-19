function signin() {
    var name = document.getElementById("displayName")
    var userid = document.getElementById("id")
    var photoURL = document.getElementById("photoURL")
    var email = document.getElementById("email")
    var phoneNumber = document.getElementById("phoneNumber")
    var newuser = document.getElementById("newuser")

    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function (result){    //If it has successfully logged in the user
     name.innerHTML = "Your facebook name is: " + result.user.displayName
     userid.innerHTML = "Your facebook id is: " + result.additionalUserInfo.profile.id
     photoURL.innerHTML = "Your facebook photo URL is: " + result.user.photoURL
     email.innerHTML = "Your facebook email is: " + result.user.email
     phoneNumber.innerHTML = "Your facebook phone number is: " + result.user.phoneNumber
     newuser.innerHTML = "You are a new user? " + result.additionalUserInfo.isNewUser    
    }).catch(function (error){   //If it fails and gives an error
        console.log(error.message)
        alert(error.message)
    })
}
