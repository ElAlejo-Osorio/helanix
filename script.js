// Número corporativo de WhatsApp (formato internacional, sin + ni espacios)
var WA="573159850580",msg=encodeURIComponent("Hola Helanix, quiero cotizar una página web para mi negocio.");
document.querySelectorAll("[data-wa]").forEach(function(a){a.href="https://wa.me/"+WA+"?text="+msg;a.target="_blank";a.rel="noopener"});
document.querySelectorAll("[data-plan]").forEach(function(a){var t=encodeURIComponent("Hola Helanix, quiero adquirir el plan "+a.dataset.plan+".");a.href="https://wa.me/"+WA+"?text="+t;a.target="_blank";a.rel="noopener"});
var nav=document.getElementById("nav");addEventListener("scroll",function(){nav.classList.toggle("s",scrollY>40)},{passive:true});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
var g=document.getElementById("glow");
addEventListener("pointermove",function(e){g.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"},{passive:true});
if(matchMedia("(hover:hover)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
document.querySelectorAll(".tilt").forEach(function(c){
c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(900px) rotateY("+x*6+"deg) rotateX("+(-y*6)+"deg)"});
c.addEventListener("pointerleave",function(){c.style.transform=""})})}

(function(){var sc=document.querySelector(".scene"),stg=document.querySelector(".stage"),ph=document.querySelector(".ph"),A=document.querySelector(".lyA"),B=document.querySelector(".lyB"),items=[].slice.call(document.querySelectorAll(".panel [data-i]")),bub=[].slice.call(document.querySelectorAll("[data-b]")),hint=document.querySelector(".hint"),panel=document.querySelector(".panel"),fab=document.getElementById("fab"),tick=false;
var cl=function(x){return Math.max(0,Math.min(1,x))},ease=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2};
function run(){tick=false;var vw=innerWidth,vh=stg.clientHeight,m=vw<=860,r=sc.getBoundingClientRect(),p=cl(-r.top/(sc.offsetHeight-vh));
var NAV=92,s1=Math.max(.55,m?Math.min(.85,(vh-NAV-60)/590):Math.min(1,(vh-NAV-50)/590)),s0=Math.min(m?vw*1.12/280:vh/590*1.5,(vh-2*NAV)/320);s0=Math.max(s0,s1*1.35);
var z=ease(cl(p/.62)),s=s0+(s1-s0)*z,tx=m?0:-vw*.18*z;
ph.style.transform="translate("+tx+"px,"+NAV/2+"px) scale("+s+")";
var a=1-cl((p-.2)/.22);A.style.opacity=a;A.style.pointerEvents=a>.5?"auto":"none";A.inert=a<=.5;
B.style.opacity=cl((p-.34)/.24);hint.style.opacity=1-cl(p*6);
var q=cl((p-.6)/.32),n=items.length;
items.forEach(function(el,i){var t=cl(q*n-i);el.style.opacity=t;el.style.transform="translateX("+(1-t)*50+"px)"});
bub.forEach(function(el,i){var t=cl((p-.8-i*.07)/.07);el.style.opacity=t;el.style.transform="translateY("+(1-t)*10+"px)"});
panel.style.pointerEvents=q>.5?"auto":"none";
fab.classList.toggle("on",p>.92)}
function req(){if(!tick){tick=true;requestAnimationFrame(run)}}
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);run()})();

// ===== TESTIMONIOS =====
// Agrega aquí testimonios REALES (con permiso del cliente). Mientras la lista esté vacía, la sección no se muestra.
// Formato: {texto:"Frase del cliente",nombre:"Nombre Apellido",negocio:"Negocio · Ciudad",foto:"assets/cliente.jpg"}  (foto es opcional)
(function(){
var TESTIMONIOS=[
{texto:"Me pareció un servicio excelente y 100% personalizado.",nombre:"Monica",negocio:"Restaurante · Bogotá"},
{texto:"Una pagina muy util para generar ventas y vistas.",nombre:"Jairo",negocio:"Empresa de accesorios y acabados en acero · Bogotá"},
{texto:"Los recomiendo, son muy profesionales y dan un valor agregado a mi negocio.",nombre:"Castely Tex",negocio:"Boutique · Bogotá"}
];
var DEMO=false; // true = muestra textos de ejemplo para ver el diseño (no lo dejes en true al publicar)
var demo=[
{texto:"Texto de ejemplo.",nombre:"Cliente de ejemplo",negocio:"Negocio · Ciudad"}];
var list=TESTIMONIOS.length?TESTIMONIOS:(DEMO?demo:[]);
var sec=document.getElementById("testimonios");if(!sec||!list.length)return;
sec.hidden=false;
var box=sec.querySelector(".tmx"),stage=sec.querySelector(".tm-stage"),dots=sec.querySelector(".tm-dots"),nav=sec.querySelector(".tm-nav"),i=0,timer,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function show(n){i=(n+list.length)%list.length;var t=list[i],f=el("figure","tm-s"),q=el("blockquote"),w=t.texto.split(" ");
w.forEach(function(x,k){var s=el("span",null,x);s.style.animationDelay=k*35+"ms";q.appendChild(s);q.appendChild(document.createTextNode(" "))});
var c=el("figcaption"),a=el("span","av"),m=el("span");
if(t.foto){var im=document.createElement("img");im.src=t.foto;im.alt="";a.appendChild(im)}else{a.textContent=(t.nombre||"?").split(" ").slice(0,2).map(function(p){return p[0]}).join("").toUpperCase()}
m.appendChild(el("b",null,t.nombre));m.appendChild(el("small",null,t.negocio||""));c.appendChild(a);c.appendChild(m);c.style.animationDelay=w.length*35+150+"ms";
f.appendChild(q);f.appendChild(c);stage.replaceChildren(f);
[].forEach.call(dots.children,function(b,k){b.setAttribute("aria-current",k===i)})}
function stop(){clearInterval(timer)}
function start(){stop();if(list.length>1&&!rm)timer=setInterval(function(){show(i+1)},7500)}
list.forEach(function(_,k){var b=el("button");b.type="button";b.setAttribute("aria-label","Ver testimonio "+(k+1));b.onclick=function(){show(k);start()};dots.appendChild(b)});
[].forEach.call(sec.querySelectorAll(".tm-b"),function(b){b.onclick=function(){show(i+Number(b.dataset.d));start()}});
if(list.length<2)nav.hidden=true;
var dm=sec.querySelector(".tm-demo");if(dm&&!TESTIMONIOS.length&&DEMO)dm.hidden=false;
box.addEventListener("mouseenter",stop);box.addEventListener("mouseleave",start);box.addEventListener("focusin",stop);box.addEventListener("focusout",start);
var x0=null;box.addEventListener("pointerdown",function(e){x0=e.clientX});
box.addEventListener("pointerup",function(e){if(x0!==null&&Math.abs(e.clientX-x0)>50){show(i+(e.clientX<x0?1:-1));start()}x0=null});
show(0);start();
})();

// ===== MENÚ DE CELULAR =====
(function(){var b=document.querySelector(".burger"),m=document.getElementById("menu");if(!b||!m)return;
function set(o){m.classList.toggle("on",o);m.inert=!o;b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Cerrar menú":"Abrir menú");document.documentElement.classList.toggle("mo",o);document.documentElement.style.overflow=o?"hidden":""}
m.inert=true;
b.addEventListener("click",function(){set(!m.classList.contains("on"))});
m.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("on")){set(false);b.focus()}});
addEventListener("resize",function(){if(innerWidth>860)set(false)});
})();
