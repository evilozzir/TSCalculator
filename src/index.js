var calSpeed = function()
{
	var size = document.getElementById("size").value
	var speed = document.getElementById("speed").value
	if(size>0&&speed>0){
	var out =  (size/speed);
	writeOutput(sec2obj(out));
	}
	else {
	document.getElementById("result").innerHTML = "";
	console.log("Seconds: " + out);
	}
}
var sec2obj = function(sec)
{
    var century = Math.floor(sec / 3155692600);
	var years = Math.floor((sec % 3155692600) / 31556926);
	var days = Math.floor(((sec % 3155692600) % 31556926) / 86400);
	var hours = Math.floor((((sec % 3155692600) % 31556926) % 86400) / 3600);
	var minutes = Math.floor(((((sec % 3155692600) % 31556926) % 86400) % 3600) / 60);
	var seconds = Math.floor(((((sec % 3155692600) % 31556926) % 86400) % 3600) % 60) % 60;
    var obj = {
		"c": century,
		"y": years,
    	"d": days,
        "h": hours,
        "m": minutes,
        "s": seconds
        		}
    return obj;
}
var writeOutput = function(time){
var out = 0
if (time.c>0) {
var tmp = out
var out = tmp + time.c + " Centurys "
};
if (time.y>0) {
var tmp = out
var out = tmp + time.y + " Years "
};
if (time.d>0) {
var tmp = out
var out = tmp + time.d + " Days "
};
if (time.h>0) {
var tmp = out
var out = tmp + time.h + " Hours "
};
if (time.m>0) {
var tmp = out
var out = tmp + time.m + " Minutes "
};
if (time.s>0) {
var tmp = out
var out = tmp + time.s + " Seconds "
};
console.log(out);
if(!out == 0)document.getElementById("result").innerHTML = out;
}