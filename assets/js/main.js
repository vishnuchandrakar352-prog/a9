(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var L=['much narrower','narrower','balanced','wider','much wider'],W=['little','some','clear'];
function body(s,w,h){var sh=22+s*8,hp=22+h*8,wa=[18,10,2][w];var x1=100-sh-26,x2=100+sh+26,h1=100-hp-24,h2=100+hp+24,w1=100-34+wa,w2=100+34-wa;return 'M78 70Q100 64 122 70L'+x2+' 92Q'+(x2+6)+' 100 '+(x2-4)+' 112L'+(w2+4)+' 150Q'+w2+' 180 '+(w2+6)+' 205L'+(h2+10)+' 250L'+(h2+28)+' 380H'+(h1-28)+'L'+(h1-10)+' 250L'+(w1-6)+' 205Q'+w1+' 180 '+(w1-4)+' 150L'+(x1+4)+' 112Q'+(x1-6)+' 100 '+x1+' 92Z';}
function fd(){var s=+$('fd-s').value,w=+$('fd-w').value,h=+$('fd-h').value;$('fd-sv').textContent=L[s+2];$('fd-wv').textContent=W[w];$('fd-hv').textContent=L[h+2];$('fd-b').setAttribute('d',body(s,w,h));
 var t,d,l;if(s-h>=1){t='Inverted triangle';d='Shoulders lead. Add volume and detail below the waist to balance.';l=['A-line skirts','Wide-leg trousers','V-necks','Fit and flare'];}else if(h-s>=1){t='Triangle';d='Hips lead. Draw the eye up with structure at the shoulders.';l=['Boat necks','Structured jackets','A-line','Dark, simple bottoms'];}
 else if(w===2){t='Hourglass';d='Shoulders and hips balance around a defined waist. Follow the curve.';l=['Wrap dresses','Belted coats','Fit and flare','Pencil skirts'];}else if(w===0){t='Rectangle';d='A long, straight line from shoulder to hip. Create a waist, or celebrate the column.';l=['Column dresses','Peplum tops','Belted shapes','Oversized tailoring'];}
 else{t='Balanced';d='An even frame with a soft waist. Almost every silhouette works; choose by mood.';l=['A-line','Shirt dresses','Straight trousers','Empire lines'];}
 $('fd-t').textContent=t;$('fd-d').textContent=d;$('fd-l').innerHTML=l.map(function(x,i){return '<li style="animation-delay:'+i*.06+'s">'+x+'</li>';}).join('');}
if($('fd-s')){['fd-s','fd-w','fd-h'].forEach(function(i){$(i).addEventListener('input',fd);});fd();}
var tl=0;function ft(i){return Math.floor(i/12)+' ft '+Math.round(i%12)+' in';}
function hm(){var H=+$('hm-h').value;$('hm-hv').textContent=ft(H);var k=H*.285,m=H*.2,a=H*.06;$('hm-k').textContent=Math.round(H-k-H*0.03)+'"';$('hm-m').textContent=Math.round(H-m*0.5-H*0.25)+'"';$('hm-a').textContent=Math.round(H-a)+'"';
 $('hm-k').textContent=(Math.round((H*.43)*2)/2)+' in';$('hm-m').textContent=(Math.round((H*.6)*2)/2)+' in';$('hm-a').textContent=(Math.round((H*.8)*2)/2)+' in';
 $('hm-n').textContent=['Tucked in: your waist sits at about one third of the way down the figure. Most hem lengths will look balanced.','Hip-length top: the break moves to the hip, close to a half split. Try a midi or ankle hem, or a high-waisted bottom, to restore thirds.','Long tunic: the top takes two thirds. Pair it with slim trousers or a short visible hem for a clean one-third base.'][tl];
 var g=$('hm-g'),Y=function(f){return 22+f*420;},lines=[[0,'top',.12],[1,'waist',[.38,.47,.6][tl]],[2,'knee',.73],[3,'midi',.84],[4,'ankle',.96]],s='';lines.forEach(function(L){var y=Y(L[2]);var c=L[0]===1?'#6B1E2A':'#141414';s+='<path d="M20 '+y+'H180" stroke="'+c+'" stroke-dasharray="'+(L[0]===1?'0':'4 4')+'"/><text x="20" y="'+(y-4)+'" fill="'+c+'">'+L[1].toUpperCase()+'</text>';});g.innerHTML=s;}
if($('hm-h')){$('hm-h').addEventListener('input',hm);var tb=[].slice.call(document.querySelectorAll('#hm-t button'));tb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){tl=+b.dataset.v;tb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});hm();});});hm();}
})();
