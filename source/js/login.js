//Got to attendance sheet
function logIn(){
    var Email = document.getElementById ('Email');
    var Password = document.getElementById ('Password');
    if( Email.value == "abc@example.com" || Password.value == "SuperSecretPassword" ) {
        document.getElementById("BtnLogIn").onclick = function(){
            location.href = "./attendence-form.html"
        }
    }
}