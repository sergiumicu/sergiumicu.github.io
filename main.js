var ageDisp = document.getElementById("ageDisp");

var now = new Date(Date.now());

var age = now.getFullYear() - 2001;

if(now.getMonth() < 3)
    age--;
else if(now.getMonth() == 3 && now.getDate() < 23)
    age--;

ageDisp.innerHTML = age;
    
if(age >= 20) ageDisp.innerHTML += " de ani";
else ageDisp.innerHTML += " ani"