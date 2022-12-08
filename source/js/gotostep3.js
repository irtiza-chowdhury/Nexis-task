//Got to sign up form 3
function gotostep_3(){
    var Phone = document.getElementById ('Phone');
    var Email = document.getElementById ('Email');

    if( Phone.value == "0000000000" || Email.value ==  "abc@example.com" ) {
        document.getElementById("BtnGoStep-3").onclick = function(){
            location.href = "./step-3.html"
        }
    }
}