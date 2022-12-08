
//Got to sign up form 2
function gotostep_2(){
    var NameFirst = document.getElementById ('NameFirst');
    var NameLast = document.getElementById ('NameLast');

    if( NameFirst.value == "First Name" || NameLast.value ==  "Last Name" ) {
        document.getElementById("BtnGoStep-2").onclick = function(){
            location.href = "pages/step-2.html"
        }
    }
}




