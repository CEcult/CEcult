(function(){
  var d=document.documentElement;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var tema=get('cecult-tema')||'auto',fs=parseFloat(get('cecult-fonte'))||1;
  function applyTheme(t){tema=t;set('cecult-tema',t);
    d.dataset.theme=t==='auto'?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):t;
    segs.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.t===t)})}
  function applyFont(v){fs=Math.min(1.5,Math.max(.85,Math.round(v*100)/100));set('cecult-fonte',fs);
    d.style.setProperty('--fs',fs);range.value=Math.round(fs*100);val.textContent=Math.round(fs*100)+'%'}

  /* Painel de configurações */
  var hdr=document.querySelector('header'),mt=document.querySelector('.menu-toggle'),nav=document.getElementById('nav-menu');
  var box=document.createElement('div');box.className='hdr-actions';
  var gear=document.createElement('button');gear.className='ibtn';gear.type='button';gear.textContent='⚙';
  gear.setAttribute('aria-label','Configurações');gear.setAttribute('aria-expanded','false');
  box.appendChild(gear);if(mt){mt.classList.add('ibtn');box.appendChild(mt)}hdr.appendChild(box);
  var panel=document.createElement('div');panel.className='cfg';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Configurações do site');
  panel.innerHTML='<h2>Configurações</h2><h3>Tema</h3><div class="seg"><button type="button" data-t="light">☀ Claro</button><button type="button" data-t="dark">☾ Escuro</button><button type="button" data-t="auto">Auto</button></div><h3>Tamanho da fonte</h3><div class="fz"><button type="button" id="fm" aria-label="Diminuir fonte">A−</button><input type="range" min="85" max="150" step="5" aria-label="Tamanho da fonte"><button type="button" id="fp" aria-label="Aumentar fonte">A+</button><span class="fz-v"></span></div><button type="button" class="reset">Restaurar padrão</button>';
  document.body.appendChild(panel);
  var segs=[].slice.call(panel.querySelectorAll('.seg button')),range=panel.querySelector('input'),val=panel.querySelector('.fz-v');
  segs.forEach(function(b){b.onclick=function(){applyTheme(b.dataset.t)}});
  range.oninput=function(){applyFont(range.value/100)};
  panel.querySelector('#fm').onclick=function(){applyFont(fs-.05)};
  panel.querySelector('#fp').onclick=function(){applyFont(fs+.05)};
  panel.querySelector('.reset').onclick=function(){applyTheme('auto');applyFont(1)};
  function toggle(o){var s=o===undefined?!panel.classList.contains('open'):o;panel.classList.toggle('open',s);gear.setAttribute('aria-expanded',s)}
  gear.onclick=function(e){e.stopPropagation();toggle()};
  panel.onclick=function(e){e.stopPropagation()};
  document.addEventListener('click',function(){toggle(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false)});
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(){if(tema==='auto')applyTheme('auto')});
  applyTheme(tema);applyFont(fs);

  /* Menu mobile */
  if(mt&&nav)mt.addEventListener('click',function(){var o=nav.classList.toggle('open');mt.setAttribute('aria-expanded',o)});

  /* Carrossel: automático, desliza da direita para a esquerda */
  var car=document.querySelector('.carousel'),sl=car?car.querySelectorAll('.slide'):[];
  if(sl.length){
    var i=0,t,hold=false,dots=document.createElement('div');dots.className='dots';
    function mark(){dots.childNodes.forEach(function(x,k){x.setAttribute('aria-current',k===i)})}
    function go(n,dir){
      n=(n+sl.length)%sl.length;if(n===i)return;dir=dir||1;
      var a=sl[i],b=sl[n],img=b.querySelector('img');
      function off(e){e.style.setProperty('transition','none','important')}
      function on(e){e.style.removeProperty('transition')}
      sl.forEach(function(s){if(s!==a&&s!==b){s.classList.remove('active');off(s);s.style.transform='translateX(100%)'}});
      off(b);b.style.transform='translateX('+(dir>0?100:-100)+'%)';
      if(img){off(img);img.style.transform='translateX('+(dir>0?-9:9)+'%) scale(1.14)'}
      void b.offsetWidth;
      on(b);b.style.transform='translateX(0)';if(img){on(img);img.style.transform=''}
      on(a);a.style.transform='translateX('+(dir>0?-100:100)+'%)';
      a.classList.remove('active');b.classList.add('active');i=n;mark();
    }
    function start(){clearInterval(t);if(sl.length>1)t=setInterval(function(){if(!hold&&!document.hidden)go(i+1,1)},5500)}
    sl[0].style.setProperty('transition','none','important');sl[0].style.transform='translateX(0)';sl[0].classList.add('active');void sl[0].offsetWidth;sl[0].style.removeProperty('transition');
    sl.forEach(function(_,n){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Ir para o slide '+(n+1));
      b.onclick=function(){go(n,n>i?1:-1);start()};dots.appendChild(b)});
    mark();
    if(sl.length>1){
      car.appendChild(dots);
      [['car-prev','‹','Slide anterior',-1],['car-next','›','Próximo slide',1]].forEach(function(c){
        var b=document.createElement('button');b.type='button';b.className='car-btn '+c[0];b.textContent=c[1];b.setAttribute('aria-label',c[2]);
        b.onclick=function(){go(i+c[3],c[3]);start()};car.appendChild(b)});
      car.addEventListener('mouseenter',function(){hold=true});car.addEventListener('mouseleave',function(){hold=false});
      car.addEventListener('focusin',function(){hold=true});car.addEventListener('focusout',function(){hold=false});
      var x0=null;car.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
      car.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;
        if(Math.abs(dx)>40){go(i+(dx<0?1:-1),dx<0?1:-1);start()}x0=null});
    }
    start();
  }

  /* Mapa cultural interativo */
  var map=document.getElementById('mapa');
  if(map){
    var regs=[].slice.call(map.querySelectorAll('.reg')),halos=map.querySelectorAll('.halo path'),
        chips=[].slice.call(document.querySelectorAll('.chip')),panels=[].slice.call(document.querySelectorAll('.rpanel')),
        vz=document.querySelector('.vazio-p'),box=document.querySelector('.painel'),cur=null;
    map.classList.add('no-sel');
    function sel(k,rolar){
      cur=k;map.classList.toggle('has-sel',!!k);map.classList.toggle('no-sel',!k);
      regs.forEach(function(r){var on=r.dataset.k===k;r.classList.toggle('sel',on);r.setAttribute('aria-pressed',on)});
      halos.forEach(function(h){h.classList.toggle('on',h.dataset.k===k)});
      chips.forEach(function(c){c.setAttribute('aria-pressed',c.dataset.k===k)});
      panels.forEach(function(p){p.hidden=p.dataset.k!==k;if(!p.hidden){var b=p.querySelector('.rp-b');if(b)b.scrollTop=0}});
      vz.hidden=!!k;
      try{history.replaceState(null,'',k?'#'+k:location.pathname)}catch(e){}
      if(k&&rolar&&innerWidth<=900)box.scrollIntoView({behavior:'smooth',block:'start'});
    }
    regs.forEach(function(r){
      r.onclick=function(){sel(r.dataset.k===cur?null:r.dataset.k,true)};
      r.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(r.dataset.k===cur?null:r.dataset.k,true)}};
    });
    map.addEventListener('click',function(e){if(!e.target.closest('.reg'))sel(null)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&cur)sel(null)});
    chips.forEach(function(c){c.onclick=function(){sel(c.dataset.k===cur?null:c.dataset.k,true)}});
    var h0=location.hash.slice(1);if(h0&&map.querySelector('.reg[data-k="'+h0+'"]'))sel(h0,false);
  }

  /* Busca nos temas */
  var q=document.getElementById('busca');
  if(q)q.addEventListener('input',function(){
    var v=q.value.trim().toLowerCase(),n=0;
    document.querySelectorAll('main .card').forEach(function(c){
      var ok=c.textContent.toLowerCase().indexOf(v)>-1;c.style.display=ok?'':'none';if(ok)n++});
    document.getElementById('vazio').style.display=n?'none':'block'});

  /* Voltar ao topo */
  var up=document.createElement('button');up.type='button';up.className='topo';up.textContent='↑';up.setAttribute('aria-label','Voltar ao topo');
  up.onclick=function(){scrollTo({top:0})};document.body.appendChild(up);
  addEventListener('scroll',function(){up.classList.toggle('show',scrollY>600)},{passive:true});
})();
