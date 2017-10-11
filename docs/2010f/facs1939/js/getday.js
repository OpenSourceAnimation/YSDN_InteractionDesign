//get the day
var myDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
today=new Date();
thisDay=today.getDay();
document.write("<b>day:</b>  " + myDays[thisDay] + "<br>");

//get the date
var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
document.write("<b>date:</b>  " + month + "/" + day + "/" + year + "<br>");

//get the time
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
if (minutes < 10) {
minutes = "0" + minutes;
}
document.write("<b>time:</b>  " + hours + ":" + minutes + " ");
if(hours > 11) {
document.write("PM");
} else {
document.write("AM");
}

