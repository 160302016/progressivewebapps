// function getfile(file,callback){
//   var xhr= new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status=="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.CarrerObjectives);
//   education(data.education);
//   skills(data.skills);
// })
function loadjson(file)
{
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}
var newfile=loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  details(data.basics);
    career(data.CarrerObjectives);
    education(data.education);
    skills(data.skills);
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
function education(edu){
var ed=document.createElement("h2");
ed.textContent="Educational Qualification:";
child2.appendChild(ed);
var hr=document.createElement("hr");
child2.appendChild(hr);
for(i=0;i<edu.length;i++){
var deg=document.createElement("h3");
deg.textContent=edu[i].degree;
child2.appendChild(deg);
var eduul=document.createElement("ul");
var eduli=document.createElement("li");
eduli.textContent=edu[i].institute;
eduul.appendChild(eduli);
child2.appendChild(eduul);
var eduli2=document.createElement("li");
eduli2.textContent=edu[i].data;
eduul.appendChild(eduli2);
child2.appendChild(eduul);
}
}
function skills(skillinfo){
  var s=document.createElement("h2");
  s.textContent="Technical skills";
  child2.appendChild(s);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var skilldata=document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);
  tabledata="";
  for(i=0;i<skillinfo.length;i++)
{
  tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
}
skilldata.innerHTML=tabledata;
}
