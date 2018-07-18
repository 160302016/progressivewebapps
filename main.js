function getfile(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CarrerObjectives);
})
var child=document.querySelector(".childone")
function details(det){
  var img=document.createElement("img");
img.src=det.image;
child.appendChild(img);
var name=document.createElement("h3");
name.textContent=det.name;
child.appendChild(name);
var phoneno=document.createElement("h3");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);
var mail=document.createElement("a");
mail.href="mailto:sravyagangula@gmail.com";
mail.textContent=det.email;
child.appendChild(mail);
var hr=document.createElement("hr");
child.appendChild(hr);
var Address=document.createElement("h3");
Address.textContent=det.Address;
child.appendChild(Address);
}
var child2=document.querySelector(".childtwo");
function career(careerinfo){
  var cr1=document.createElement("h2");
cr1.textContent="CareerObjectives";
child2.appendChild(cr1);
var hr=document.createElement("hr");
child2.appendChild(hr);
var career1=document.createElement("p");
career1.textContent=careerinfo.info;
child2.appendChild(career1);
}
