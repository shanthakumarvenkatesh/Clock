function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");
      
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM";
    }
    if(hrs<10){
        hrs="0"+hrs
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    am.innerHTML=am_pm
}
setInterval(clock,1000)
function settime(){

    var x=document.getElementById('morning').value;
    var y = document.getElementById("lunch").value;
    var t = document.getElementById("nap").value;
    var z = document.getElementById("night").value;
    var hour = new Date().getHours();
    


    if(x==hour){

        document.getElementById('imagecontainer').style.background="url(https://shanthakumarvenkatesh.github.io/Digital_clock/Group%205183-1.svg)"
        document.getElementById('textcontainer').innerText='Wake Up !!';
        document.getElementById("smallbox").innerText="Good Morning !!";
     
    }

    if(y==hour){
        document.getElementById("imagecontainer").style.backgroundImage="url(https://shanthakumarvenkatesh.github.io/Digital_clock/lunch.svg)"
        document.getElementById("textcontainer").innerText="Let's Have Some Lunch !!";
        document.getElementById("smallbox").innerText="Good Afternoon !!";
    }

    if(t==hour){
        document.getElementById("imagecontainer").style.backgroundImage="url(https://shanthakumarvenkatesh.github.io/Digital_clock/lunch_image.png)"
        document.getElementById("textcontainer").innerText="Have Some Tea !!";
        document.getElementById("smallbox").innerText="Enjoy your Drink !!";
    }  
    
    if(z==hour){
        document.getElementById("imagecontainer").style.backgroundImage="url(https://shanthakumarvenkatesh.github.io/Digital_clock/Group%205194.svg)"
        document.getElementById("textcontainer").innerText="Good Night !!";
        document.getElementById("smallbox").innerText="Good Night !!";
    }    
    
    
   getOption();

}
function getOption() {


    var e = document.getElementById("morning");
    var text1 = e.options[e.selectedIndex].text;
    
    var f = document.getElementById("lunch");
    var text2 = f.options[f.selectedIndex].text;
    
    var g = document.getElementById("nap");
      var text3 = g.options[g.selectedIndex].text;
     var h = document.getElementById("night");
      var text4 = h.options[h.selectedIndex].text;
    
    
         var idExist = document.getElementById("wakeUpTimeText");
        if(idExist){
            idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}<br>Night Time: ${text4}`;
        }
     
    }
    
