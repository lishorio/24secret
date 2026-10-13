const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let toastTimer;
function toast(msg){$('#toastText').textContent=msg;$('#toast').classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.add('hidden'),4500)}
function status(msg){$('#statusText').textContent=msg}
function openWin(name){const el=$('#'+name+'Window');if(el)el.classList.remove('hidden');$('#startMenu').classList.add('hidden');status('Открыто: '+name)}
function closeWin(name){const el=$('#'+name);if(el)el.classList.add('hidden')}
$$('[data-open]').forEach(b=>b.addEventListener('click',()=>openWin(b.dataset.open)));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>closeWin(b.dataset.close)));
$('#openInvite').onclick=()=>openWin('invite');$('#start').onclick=()=>$('#startMenu').classList.toggle('hidden');
$('#toastClose').onclick=()=>$('#toast').classList.add('hidden');
$('#taskMain').onclick=()=>{$('#mainWindow').classList.remove('minimized');$('#mainWindow').style.display=''};
$('#minimize').onclick=()=>{$('#mainWindow').classList.add('minimized');status('Окно свёрнуто. Нажми Birthday.exe на панели задач.')};
$('#maximize').onclick=()=>$('#mainWindow').classList.toggle('maximized');
$('#close').onclick=()=>toast('Критическая ошибка: праздник нельзя закрыть до завершения.');
$('#surprise').onclick=()=>{const m=['Ошибка 404: причина остаться дома не найдена.','Обнаружен вирус веселья. Антивирус отключён именинником.','Оперативная память заполнена воспоминаниями. Очистить? Нет, сохранить!','Сюрприз: ты слишком классный(ая), чтобы пропустить праздник.'];toast(m[Math.floor(Math.random()*m.length)]);$('#fill').style.width=(75+Math.floor(Math.random()*26))+'%'};
$('#confirm').onclick=()=>{closeWin('inviteWindow');toast('Регистрация успешна! Статус: легенда вечеринки ✓');status('Участие подтверждено');$('#percent').textContent='100%';$('#fill').style.width='100%'};
$('#shutdown').onclick=()=>{ $('#startMenu').classList.add('hidden');toast('Завершение работы отменено: Никита не разрешил выключать праздник.')};
$$('[data-menu]').forEach(b=>b.onclick=()=>toast(b.dataset.menu+': эта функция доступна в полной версии вечеринки.'));
function tick(){const d=new Date();$('#clock').textContent=d.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});}
tick();setInterval(tick,1000);
const cakes=[1,6,10];function reset(){const g=$('#grid');g.innerHTML='';$('#gameMessage').textContent='Осталось найти: 3';for(let i=0;i<12;i++){const b=document.createElement('button');b.setAttribute('aria-label','Ячейка '+(i+1));b.onclick=()=>{if(b.classList.contains('revealed'))return;b.classList.add('revealed');if(cakes.includes(i)){b.textContent='🎂';b.dataset.cake='1';const n=g.querySelectorAll('[data-cake]').length;$('#gameMessage').textContent=n===3?'Победа! Все торты найдены. +100 к праздничной карме.':'Торт найден! Осталось найти: '+(3-n)}else{b.textContent='×';b.style.color='#b00000';$('#gameMessage').textContent='Мимо! Это была скучная ячейка. Попробуй ещё.'}};g.appendChild(b)}}
$('#reset').onclick=reset;reset();
document.addEventListener('keydown',e=>{if(e.key==='Escape'){ $('#startMenu').classList.add('hidden');['inviteWindow','gamesWindow','aboutWindow','culminationWindow','photoWindow','cheshkiWindow'].forEach(closeWin)}});
