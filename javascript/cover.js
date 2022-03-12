
function myDates(){
    const date = new Date();
    const day = MyTime('days',date.getDate());
    const hours = MyTime('hours',date.getHours());
    const minutes = MyTime('mins',date.getMinutes());
    const seconds = MyTime('seconds',date.getSeconds());
    const AM_PM = myAmPm(hours); 

    const years = document.getElementById('years').innerHTML = date.getFullYear();
}
myDates();
setInterval(() => {
    myDates();
}, 100);
function myAmPm(time){
    const AM_PM = document.getElementById('AM_PM');
    const results = (time<12)? "AM" :"PM";
    AM_PM.innerHTML = results;
}
function MyTime(element,times){
    const Data = document.getElementById(element);
    const result = (times<10)? "0"+Number(times): times;
    Data.innerHTML = result;
}
$(document).ready(function(){
    function FadeInFadeOut(){
        $("#title #titles").fadeTo("slow",0.3)
                           .fadeTo("slow",1)
                           .fadeTo("slow",0.1)
                           .fadeTo("slow",1);
    }
   setInterval(()=>{
       FadeInFadeOut()
   },2000)

})
