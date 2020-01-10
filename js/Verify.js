
const firebaseConfig = {
    apiKey: "AIzaSyD3Ya5UbbRCA5S5hzY2W2qspza4wLcNIz4",
    authDomain: "project-smrt-60034.firebaseapp.com",
    databaseURL: "https://project-smrt-60034.firebaseio.com",
    projectId: "project-smrt-60034",
    storageBucket: "project-smrt-60034.appspot.com",
    messagingSenderId: "392351756064",
    appId: "1:392351756064:web:fd11d078c6c87fca"
  };
  firebase.initializeApp(firebaseConfig);
function checks(realval,idval){
	var d = firebase.database().ref().child("Users");
d.on('value',snap=>{
snap.forEach(test=>{
	var di = firebase.database().ref().child("Users");
	var loc = di.child(test.key);
	var i = loc.child("id");

i.on('value',sna=>{
	if(test.key == realval||sna.val() == idval){
		var asdf = document.getElementById('bodr').style.filter = "Blur(40px)";
		var edew = document.getElementById('Signe').innerHTML = realval + " just Signed In";
		setTimeout(function() {window.location = "index.html";}, 4000);
		if(test.key == realval){
			var wq = loc.child("id");
			wq.on('value', wqw=>{
			if(wqw.val() == realval){
				var edew = document.getElementbyId('Signe').innerHTML = realval + " just Signed In";
			}
			});
		}
		var d = new Date();
		var mont = d.getMonth();
		if(d.getMonth() == 0){
			mont = 1;
		}
var n = mont+"-"+d.getDate()+"-"+d.getFullYear();

var att = loc.child("Attend").child(n);
var d = new Date();
var hours = d.getHours();


var min = d.getMinutes();
var sect = d.getSeconds();
var mili = d.getMilliseconds();
var v = hours+":"+min;
console.log(v+'in');
att.child(v).set("Signed In");



	}
	else{
	var er = di.child(realval);
	var settter = er.child("id").set(idval);
	var relocate = er.child("Attend");
		var d = new Date();
		var mont = d.getMonth();
		if(d.getMonth() == 0){
			mont = 1;
		}
var n = mont+"-"+d.getDate()+"-"+d.getFullYear();

var att = relocate.child(n);
var d = new Date();
var hours = d.getHours();


var min = d.getMinutes();
var sect = d.getSeconds();
var mili = d.getMilliseconds();
var v = hours+":"+min;
console.log(v+'in');
att.child(v).set("Signed In");

}
});
});
});
}


