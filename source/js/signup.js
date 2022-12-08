//Got to Log In
function signUp(){
    var Password = document.getElementById ('Password');
    if( Password.value == "SuperSecretPassword" ) {
        document.getElementById("BtnSignUp").onclick = function(){
            location.href = "./login.html"
        }
    }
}