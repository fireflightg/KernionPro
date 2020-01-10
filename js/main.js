
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
const firebaseConfig = {
    apiKey: "AIzaSyD3Ya5UbbRCA5S5hzY2W2qspza4wLcNIz4",
    authDomain: "project-smrt-60034.firebaseapp.com",
    databaseURL: "https://project-smrt-60034.firebaseio.com",
    projectId: "project-smrt-60034",
    storageBucket: "project-smrt-60034.appspot.com",
    messagingSenderId: "392351756064",
    appId: "1:392351756064:web:fd11d078c6c87fca"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 document.addEventListener('DOMContentLoaded', function() {
  var URL = 'YOURSPREADSHEETSKEYHERE'
  Tabletop.init({key: URL, callback: callback, simpleSheet: true})
})
function signin(){
    var t;
    var isa = document.getElementById('ida').value;
var d = firebase.database().ref().child("Users");
d.on('value',snap=>{
snap.forEach(test=>{
console.log(test.val().id+test.key)
var di = firebase.database().ref().child("Users");
var loc = di.child(test.key);
var i = loc.child("id");
i.on('value',sna=>{
    console.log(sna.val())
if(document.getElementById('ida').value == sna.val()){
    console.log(isa+1);
var di = firebase.database().ref().child("Users");
var loc = di.child(test.key);

var e = document.getElementById("head");
e.innerText = "Welcome"+test.key;
var d = new Date();
var n = d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear();
var att = loc.child("Attend").child(n);
var d = new Date();
var hours = d.getHours()-12;
if(hours == -12){
    hours = 12;
}
var min = d.getMinutes();
var sect = d.getSeconds();
var mili = d.getMilliseconds();
var v = hours+":"+min;
console.log(v);
att.on('value',snaw=>{
if(!snaw.hasChild(v)){
var sw = att.child(v);
sw.set("Signed In");
console.log("ok");
t =true;
}
if(snaw.hasChild(v)){
    var dw = att.child(v);
    dw.on('value', snaq=>{
       console.log(snaq.val());
       if(snap.val()!= "Signed In"){
        var sw = att.child(v);
sw.set("Signed In");
console.log("ok");
t =true;

       }
    });

}
});
}
else{
    t=false;
}
});

console.log(isa);



});
});

}
function signout(){
        var t;
    var isa = document.getElementById('ida').value;
var d = firebase.database().ref().child("Users");
d.on('value',snap=>{
snap.forEach(test=>{
console.log(test.val().id+test.key)
var di = firebase.database().ref().child("Users");
var loc = di.child(test.key);
var i = loc.child("id");
i.on('value',sna=>{
    console.log(sna.val())
if(document.getElementById('ida').value == sna.val()){
    console.log(isa+1);
var di = firebase.database().ref().child("Users");
var loc = di.child(test.key);
var d = new Date();
var n = d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear();
var att = loc.child("Attend").child(n);
var d = new Date();
var hours = d.getHours()-12;
if(hours == -12){
    hours = 12;
}
var min = d.getMinutes();
var sec = d.getSeconds();
var mili = d.getMilliseconds();
var v = hours+":"+min;
console.log(v);
att.on('value',snaw=>{
if(!snaw.hasChild(v)){
var sw = att.child(v+"out");
sw.set("Signed Out");
console.log("ok");
t =true;
}

if(snaw.hasChild(v)){
    var dw = att.child(v);
    dw.on('value', snaq=>{
       console.log(snaq.val());
       if(snap.val()!= "Signed Out"){
        var sw = att.child(v+"out");
sw.set("Signed Out");
console.log("ok");
t =true;

       }
    });

}
});
}
else{
    t=false;
}
});

console.log(isa);




});
});

}