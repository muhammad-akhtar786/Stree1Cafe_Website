(function(){
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
var D=[["Bone Marrow Steak","A signature dining highlight featuring tender steak paired with rich bone marrow.","#4a2a20","#8a4a32"],
["Cajun Omelette","A flavourful breakfast favourite with a Cajun-inspired twist.","#3b2a1c","#c9a24a"],
["Italian Chicken","A popular continental chicken selection.","#3f2c22","#d8c7ae"],
["Philly Steak Sandwich","A satisfying steak sandwich inspired by classic Philly flavours.","#35231D","#a8744a"],
["Eggs Benedict","A classic breakfast selection.","#46331f","#e2c473"],
["French Toast","A delightful sweet breakfast favourite.","#4a3024","#b99a65"]];
var dh="";D.forEach(function(d){dh+='<article class="dish rv"><div class="in"><div class="ph" style="--c1:'+d[2]+';--c2:'+d[3]+'" role="img" aria-label="Photo placeholder: '+d[0]+'"><em>Photograph to be added</em></div><div class="tx"><h3>'+d[0]+'</h3><p>'+d[1]+'</p></div></div></article>'});
document.getElementById("dishes").innerHTML=dh;
var G=[["Signature steak","#4a2a20","#8a4a32"],["Bone marrow steak","#3a2018","#b99a65"],["Breakfast presentation","#46331f","#e2c473"],["Omelette","#3b2a1c","#c9a24a"],["Sandwiches and paninis","#35231D","#a8744a"],["Coffee and cappuccino","#2c1c15","#d8c7ae"],["Desserts","#4a3024","#b99a65"],["Cafe ambience","#211713","#B99A65"]];
var gh="";G.forEach(function(g,i){gh+='<button class="tile" data-i="'+i+'" aria-label="Enlarge: '+g[0]+'"><div class="ph" style="--c1:'+g[1]+';--c2:'+g[2]+'"><em>'+g[0]+'</em></div></button>'});
var gal=document.getElementById("gal");gal.innerHTML=gh;
var lb=document.getElementById("lb"),lbp=document.getElementById("lbp"),last;
gal.addEventListener("click",function(e){var t=e.target.closest(".tile");if(!t)return;last=t;var g=G[t.dataset.i];lbp.style.setProperty("--c1",g[1]);lbp.style.setProperty("--c2",g[2]);document.getElementById("lbc").textContent=g[0]+" (photo to be added)";lb.classList.add("on");document.getElementById("lbx").focus()});
function close(){lb.classList.remove("on");if(last)last.focus()}
document.getElementById("lbx").onclick=close;lb.addEventListener("click",function(e){if(e.target===lb)close()});
addEventListener("keydown",function(e){if(e.key==="Escape"){close();hd.classList.remove("open")}});
var hd=document.getElementById("hd"),bg=document.getElementById("bg");
bg.onclick=function(){var o=hd.classList.toggle("open");bg.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
document.querySelectorAll("nav a").forEach(function(a){a.onclick=function(){hd.classList.remove("open");bg.setAttribute("aria-expanded","false");document.body.style.overflow=""}});
function sc(){hd.classList.toggle("solid",scrollY>60);var b=document.querySelector(".story .bg");if(b&&!reduce){var r=b.getBoundingClientRect();b.style.setProperty("--py",(r.top*.08)+"px")}}
addEventListener("scroll",sc,{passive:true});sc();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
if(!reduce&&matchMedia("(hover:hover)").matches){
var pl=document.getElementById("plate");
document.getElementById("home").addEventListener("mousemove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;pl.style.transform="rotateY("+x*22+"deg) rotateX("+(-y*22)+"deg)"});
document.querySelectorAll(".dish").forEach(function(c){var n=c.firstElementChild;c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;n.style.transform="rotateY("+x*8+"deg) rotateX("+(-y*8)+"deg)"});c.addEventListener("mouseleave",function(){n.style.transform=""})})}
if(!reduce&&matchMedia("(hover:hover)").matches){var gl=document.getElementById("glow");addEventListener("mousemove",function(e){gl.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"});
document.querySelectorAll(".tile,.story .bg,.exp .pic").forEach(function(c){c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(800px) rotateY("+x*10+"deg) rotateX("+(-y*10)+"deg) scale(1.02)"});c.addEventListener("mouseleave",function(){c.style.transform=""})});
document.querySelectorAll(".btn").forEach(function(b){b.addEventListener("mousemove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)*.18)+"px,"+((e.clientY-r.top-r.height/2)*.3)+"px)"});b.addEventListener("mouseleave",function(){b.style.transform=""})})}
var cv=document.getElementById("fx"),cx=cv.getContext("2d"),P=[],W,H;
function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}rs();addEventListener("resize",rs);
for(var i=0;i<(innerWidth<700?18:40);i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*1.6+.4,s:Math.random()*.00008+.00003,a:Math.random()*.5+.15});
function fr(){cx.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.s*16;if(p.y<0)p.y=1;cx.fillStyle="rgba(185,154,101,"+p.a+")";cx.beginPath();cx.arc(p.x*W,p.y*H,p.r,0,6.3);cx.fill()});if(!reduce)requestAnimationFrame(fr)}fr();
})();
