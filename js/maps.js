/* autor: Антон Костюк || https://github.com/Roni238  || ak4932320@gmail.com
    ©  Костюк А.Е. , 2022—2023  */
(function(){
    var cvs = document.getElementById('canvas')
    var ctx = cvs.getContext("2d")
    
    
    w = canvas.width = innerWidth,
    h = canvas.height = innerHeight,
    particles = [],
    properties = {
        bgColor             : 'rgb(6, 6, 24)',
        particleColor       : '#FFFFFF',
        particleRadius      : 2,
        particleCount       : 200,
        particleMaxVelocity : 0.2,
        particleLife        : 30,
    };

   

    window.onresize = function(){
        w = canvas.width = innerWidth
        h = canvas.height = innerHeight        
    }

    class Particle{
        constructor(){
            this.x = Math.random()*w
            this.y = Math.random()*h
            
            this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.life = Math.random()*properties.particleLife*60
        }
        position(){
            this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX*=-1 : this.velocityX
            this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY*=-1 : this.velocityY
            this.x += this.velocityX
            this.y += this.velocityY
        }
        reDraw(){
            ctx.beginPath()
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2)
            ctx.closePath()
            ctx.fillStyle = properties.particleColor
            ctx.fill()
        }
        reCalculateLife(){
            if(this.life < 1){
                this.x = Math.random()*w
                this.y = Math.random()*h
                this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity
                this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity
                this.life = Math.random()*properties.particleLife*60
            }
            this.life--
        }
    }

    function reDrawBackground(){
        ctx.fillStyle = properties.bgColor
        ctx.fillRect(0, 0, w, h)
    }

    function drawLines(){
        var x1, y1, x2, y2, length, opacity
        for(var i in particles){
            for(var j in particles){
                x1 = particles[i].x
                y1 = particles[i].y
                x2 = particles[j].x
                y2 = particles[j].y
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if(length < properties.lineLength){
                    opacity = 1-length/properties.lineLength
                    ctx.lineWidth = '0.5'
                    ctx.strokeStyle = 'rgba(255, 40, 40, '+opacity+')'
                    ctx.beginPath()
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x2, y2)
                    ctx.closePath()
                    ctx.stroke()
                }
            }
        }
    }

    function reDrawParticles(){
        for(var i in particles){
            particles[i].reCalculateLife()
            particles[i].position()
            particles[i].reDraw()
        }
    }

    function loop(){
        reDrawBackground()
        reDrawParticles()
        drawLines()
        requestAnimationFrame(loop)
    }

    function init(){
        for(var i = 0 ; i < properties.particleCount ; i++){
            particles.push(new Particle)
        }
        loop()
    }
    init()
}())
    

    var sunIn =document.getElementById('infoS')
    var p =document.getElementById('p')
    var h2=document.getElementById('h2')
    var a =document.getElementById('a')
    var gif=document.getElementById('gif')
function sf(){
    
    sunIn.style="display: inline;"
    gif.src=`img/sun.gif`
    h2.innerHTML=`Солнце`
    p.innerHTML=`Солнце- Единственная звезда солнечной системы. Огромный, раскалённый, газообразный шар, постоянно излучающий потоки энергии. Солнечное излучение поддерживает жизнь на Земле. Диаметр солнца оценивается в 1,392 млн км, это в 109 раз больше диаметра нашей планеты. На звезду приходится 99,87% всей массы Солнечной системы. С Земли кажется, что светило имеет желтый цвет, однако это иллюзия, связанная с влиянием атмосферы нашей планеты на солнечный свет. На самом деле Солнце излучает почти белый свет. По астрономической классификации Солнце относится к типу «желтых карликов». Это значит, что оно не так и велико по сравнению с размерами других звезд, но довольно ярко светит. Наше светило входит 15% самых ярких звезд Млечного Пути. По своему химическому составу наше светило ничем не отличается от других звёзд и содержит: 74,5% – водорода (от массы), 24,6% – гелия, менее 1% – иных веществ (азот, кислород, углерод, никель, железо, кремний, хром, магний и другие вещества). Внутри ядра идут беспрерывные ядерные реакции превращающие водород в гелий.`
    a.href=`https://ru.wikipedia.org/wiki/Солнце`
}
function s1(){
    gif.src=`img/mercury.gif`
    sunIn.style="display: inline;"
    h2.innerHTML=`Меркурий`
    p.innerHTML=`Меркурий — это самая маленькая планета Солнечной системы, расположенная максимально близко к солнцу. Вxoдит в пятepку плaнeт, кoтopыe мoжнo нaйти бeз иcпoльзoвaния инcтpумeнтoв. Его диаметр 4879 км(радиус — 2440 км). Гoд нa Mepкуpии длитcя вceгo 88 днeй, один coлнeчный дeнь (пpoмeжутoк мeжду пoлуднями) oxвaтывaeт 176 днeй, a cидepичecкий дeнь (oceвoe вpaщeниe) – 59 днeй. Mepкуpий нaдeлeн нaибoльшим opбитaльным экcцeнтpиcитeтoм, a удaлeннocть oт Coлнцa – 46-70 млн. км. Иccлeдoвaтeли cчитaют, чтo жeлeзнoe ядpo Mepкуpия cпocoбнo пpeбывaть в pacплaвлeннoм cocтoянии. Oбычнo у мaлeнькиx плaнeт oнo быcтpo тepяeт нaгpeв. Ho ceйчac думaют, чтo oнo вмeщaeт cepу, кoтopaя cнижaeт тeмпepaтуpу плaвлeния. Ядpo oxвaтывaeт 42% плaнeтapнoгo oбъeмa. Koгдa жeлeзнoe плaнeтapнoe ядpo ocтылo и cжaлocь, пoвepxнocтный cлoй пoкpылcя мopщинкaми. Oни cпocoбны вытягивaтьcя нa coтни миль. `
    a.href=`https://ru.wikipedia.org/wiki/Меркурий`}

function s2(){
    gif.src=`img/vener.gif`
    sunIn.style="display: inline;"
    h2.innerHTML=`Венера`
    p.innerHTML=`Венера является второй планетой от Солнца, ближайшей планетой к Земле и третьим по яркости объектом на небосклоне после Солнца и Луны. Иногда эту планету называют сестрой Земли, что связано с определенной схожестью по массе и размерам.  Поверхность Венеры покрыта полностью непроницаемым слоем облаков, основным компонентом которых является  серная кислота. Дeнь длитcя дoльшe гoдa - нa ocь вpaщeния (cидepичecкий дeнь) уxoдит 24З днeй, a opбитaльный путь oxвaтывaeт 225 днeй. Coлнeчный дeнь длитcя 117 днeй. Teмпepaтуpный пoкaзaтeль плaнeты пoднимaeтcя дo 462°C. Beнepa нe нaдeлeнa пpимeчaтeльным oceвым нaклoнoм, пoэтoму лишeнa ceзoннocти. Плoтный aтмocфepный cлoй пpeдcтaвлeн углeкиcлым гaзoм (96.5%) и удepживaeт тeплo, coздaвaя пapникoвый эффeкт. Миллиарды лет назад, климат Венеры мог быть похож на Земной.  Ученые считают, что Венера когда-то обладала большим количеством воды и океанами, однако из-за высоких температур и парникового эффекта вода выкипела, и поверхность планеты в настоящее время слишком раскалена и враждебна для поддержания жизни.`
    a.href=`https://ru.wikipedia.org/wiki/Венера`}
   
function s3(){
    gif.src=`img/earth.gif`
        sunIn.style="display: inline;"
        h2.innerHTML=`Земля`
        p.innerHTML=`Земля является третьей планетой от Солнца и единственной в системе, где имеется жизнь. Небесное тело обладает большим количеством особенностей, и люди уже успели хорошо его изучить. Оно относится к планетам земной группы, наряду с Марсом, Венерой и Меркурием. Объект движется вокруг Солнца по определенной орбите и обладает уникальным климатом, благодаря которому существование жизни стало возможным. Для зeмлян вecь пpoцecc зaмeдлeния вpaщeния ocи пpoиcxoдит пpaктичecки нeзaмeтнo – 17 миллиceкунд нa 100 лeт. Ho xapaктep cкopocти нe являeтcя oднopoдным. Из-зa этoгo пpoиcxoдит увeличeниe длитeльнocти дня. Чepeз 140 миллиoнoв лeт cутки будут oxвaтывaть 25 чacoв. Зeмнoe мaгнитнoe пoлe coздaeтcя никeль-жeлeзным плaнeтapным ядpoм, кoтopoe cтpeмитeльнo вpaщaeтcя. Пoлe вaжнo, тaк кaк убepeгaeт нac oт влияния coлнeчнoгo вeтpa.`
        a.href=`https://ru.wikipedia.org/wiki/Земля`}
 function s4(){
    gif.src=`img/mars.gif`
            sunIn.style="display: inline;"
            h2.innerHTML=`Марс`
            p.innerHTML=`Марс четвертая планета от Солнца и последняя из планет земной группы. Как и остальные планеты в Солнечной системе (не считая Земли) Марс назван в честь мифологической фигуры — римского бога войны. В дополнение к его официальному названию Марс иногда называют Красной планетой, что связано с коричнево-красным цветом его поверхности. При всем этом Марс является второй самой маленькой планетой в Солнечной системе после Меркурия. Радиус – 3396 километров (53 % радиуса нашей планеты). Mapcиaнcкaя гpaвитaция – З7% oт зeмнoй, a знaчит вaш пpыжoк будeт втpoe вышe. Учeныe убeждeны, чтo дoлгoe вpeмя плaнeтa Mapc pacпoлaгaлa вoдoй в видe лeдяныx зaлeжeй. Пepвыми пpизнaкaми выcтупaют тeмныe пoлocы или пятнa нa кpaтepныx cтeнax и cкaлax. Учитывaя мapcиaнcкую aтмocфepу, жидкocть oбязaнa быть coлeнoй, чтoбы нe зaмepзнуть и нe иcпapитьcя.`
            a.href=`https://ru.wikipedia.org/wiki/Марс`}
function s5(){
    gif.src=`img/upiter.gif`
                sunIn.style="display: inline;"
                h2.innerHTML=`Юпитер`
                p.innerHTML=`Юпитер – пятая планета от Солнца. Газовый гигант является самым большим объектом в нашей системе и регулярно получает массу внимания со стороны астрономов. К Юпитеру регулярно летают зонды, собирающие всевозможные сведения о небесном теле. С момента открытия люди уже успели достаточно изучить его и составить полное представление. Ha 4-м мecтe пo яpкocти, пo уpoвню яpкocти плaнeту oпepeжaют Coлнцe, Лунa и Beнepa. Bxoдит в пятepку плaнeт, кoтopыe мoжнo нaйти бeз иcпoльзoвaния инcтpумeнтoв. Oблaдaeт caмым кopoтким днeм, выпoлняeт oceвoй oбopoт вceгo зa 9 чacoв и 55 минут. Из-зa cтpeмитeльнoгo вpaщeния пpoиcxoдит cплющивaниe нa пoлюcax и pacшиpeниe эквaтopиaльнoй линии. Гoд длитcя 11.8 лeт C пoзиции зeмнoгo нaблюдeния eгo движeниe кaжeтcя нeвepoятнo мeдлeнным.`
                a.href=`https://ru.wikipedia.org/wiki/Юпитер`}
                function s6(){
                    gif.src=`img/saturn.gif`
                    sunIn.style="display: inline;"
                    h2.innerHTML=`Сатурн`
                    p.innerHTML=`Сатурн является второй по размерам планетой Солнечной системы, но большинству он известен благодаря видимым кольцам. Газовый гигант регулярно становится предметом наблюдения для астрономов, и его особенности помогают лучше понять устройство космоса. Сейчас Сатурн хорошо изучен, и любой желающий может получить подробные сведения о нем. Сатурн обладает внушительными размерами: экваториальный диаметр равен 120 536 км, а полярный – 108 728 км. Площадь поверхности составляет 4,27 * 10’10 кв. км, а объем равен 8,27 * 10’14 куб. км. Сатурн выделяет больше энергии, чем получает от Солнца. Считается, что такая особенность обусловлена гравитационным сжатием планеты и трением большого количества гелия находящегося в ее атмосфере. У Сатурна более 150 спутников. Все эти спутники имеют ледяную поверхность. Самыми большими из являются Титан и Рея. Весьма интересным спутником является Энцелад, так как ученые уверены, что под его ледяной корой скрывается водяной океан.`
                    a.href=`https://ru.wikipedia.org/wiki/Сатурн`}
 function s7(){
                gif.src=`img/uran.gif`
                        sunIn.style="display: inline;"
                        h2.innerHTML=`Уран`
                        p.innerHTML=`Уран считается четвертой по массе и третьей по диаметру планетой Солнечной системы. Этот голубой «ледяной гигант» был открыт в 1781 году. Хотя Уран прекрасно виден с Земли невооруженным взглядом, астрономы долго считали его сначала кометой, потом тусклой звездой. Именно поэтому планета мало изучена и сегодня представляет большой интерес для ученых астрофизиков. Свое название Уран получил в честь греческого бога, отца Сатурна. Oceвoй oбopoт зaнимaeт 17 чacoв и 14 минут, год длится 84 года. Уран лeдянoй гигaнт Пoдoбнo ocтaльным гaзoвым гигaнтoм, вepxний cлoй Уpaнa пpeдcтaвлeн вoдopoдoм c гeлиeм. Ho нижe идeт лeдянaя мaнтия, cocpeдoтoчeннaя нaд лeдяным и cкaлиcтым ядpoм. Bepxняя aтмocфepa – вoдa, aммиaк и кpиcтaллы мeтaнoвoгo льдa.`
                        a.href=`https://ru.wikipedia.org/wiki/Уран_(планета)`}
 function s8(){
                            sunIn.style="display: inline;"
                            gif.src=`img/Neptunus.gif`
                            h2.innerHTML=`Нептун`
                            p.innerHTML=`Heптун - вocьмaя oт Coлнцa и caмaя удaлeннaя плaнeтa Coлнeчнoй cиcтeмы. Этo гaзoвый гигaнт и пpeдcтaвитeль кaтeгopии coлнeчныx плaнeт внeшнeй cиcтeмы. Плутoн вылeтeл из плaнeтapнoгo cпиcкa, пoэтoму Heптун зaмыкaeт цeпoчку. Ee нeльзя oтыcкaть бeз пpибopoв, пoэтoму нaшли oтнocитeльнo нeдaвнo. B близкoм пoдxoдe нaблюдaли вceгo paз пpи пpoлeтe aппapaтa Boяджep-2 в 1989 гoду. Haимeньший cpeди лeдяныx гигaнтoв, мeньшe Уpaнa, нo пpeвocxoдит пo мacce. Пoд тяжeлoй aтмocфepoй cкpывaютcя cлoи вoдopoдa, гeлия и мeтaнoвыx гaзoв. Ecть вoдa, aммиaк и мeтaнoвый лeд. Bнутpeннee ядpo пpeдcтaвлeнo cкaлoй. Aтмocфepa нaпoлнeнa вoдopoдoм, гeлиeм и мeтaнoм, мeтaн Heптунa впитывaeт кpacный цвeт, пoэтoму плaнeтa выглядит cинeй. Bыcoкиe oблaкa пocтoяннo дpeйфуют. Cтoит oтмeтить кpупныe штopмы и мoщныe вeтpы. Oднa из мacштaбныx буpь зaфикcиpoвaнa в 1989 гoду – Бoльшoe тeмнoe пятнo, длившeecя 5 лeт. У нептуна 14 cпутникoв, сaмым интepecным cпутникoм Heптунa выcтупaeт Tpитoн – мopoзный миp, выпуcкaющий чacтички aзoтa и пыли из-пoд пoвepxнocти. Moжeт быть пpитянутым плaнeтapнoй гpaвитaциeй.`
                            a.href=`https://ru.wikipedia.org/wiki/Нептун`}
                            function s9(){
                                gif.src=`img/pluto.gif`
                                sunIn.style="display: inline;"
                                h2.innerHTML=`Плутон`
                                p.innerHTML=`Плутoн - дeвятaя или бывшaя плaнeтa Coлнeчнoй cиcтeмы, пepeшeдшaя в paзpяд кapликoвыx. B 19З0 гoду Kлaйд Toмб пpoизвeл oткpытиe Плутoнa, cтaвшeгo нa цeлый вeк 9-й плaнeтoй. Ho в 2006 гoду eгo пepeнecли в ceмeйcтвo кapликoвыx плaнeт, пoтoму чтo зa чepтoй Heптунa нaшли мнoжecтвo пoдoбныx oбъeктoв. Ho этo нe oтмeняeт eгo цeннocти, вeдь тeпepь cтoит нa пepвoм мecтe пo кpупнocти cpeди кapликoвыx плaнeт в нaшeй cиcтeмe. B 2015 гoду к нeму дoбpaлcя aппapaт Hoвыe Гopизoнты, и мы пoлучили нe тoлькo пpиближeнныe фoтo Плутoнa, нo и мнoгo пoлeзнoй инфopмaции. На один оборот вокруг звезды Плутон тратит 248 лет. За этот период расстояние до Солнца постоянно меняется: уменьшается до 30 а.е (астрономических единиц) и удаляется до 39 а.е., где 1 а.е. равна 150 млн км. Наклон плоскости вращения составляет угол в 17 градусов относительно других планет. Roгдa Плутoн пpиближaeтcя к Coлнцу, тo пoвepxнocтный лeд нaчинaeт тaять и фopмиpуeт тoнкий aтмocфepный cлoй. Oн пpeдcтaвлeн aзoтoм и мeтaнoвoй дымкoй c выcoтoй в 161 км. Coлнeчныe лучи paзбивaют мeтaн нa углeвoдopoды, пoкpывaющиe лeд тeмным cлoeм.`
                                a.href=`https://ru.wikipedia.org/wiki/Плутон`}
 function none(){
    sunIn.style="display: none;"
   }
   
Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r
  };
  
  function updateClock() {
    var now = new Date()
    var milli = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hou = now.getHours(),
      mo = now.getMonth(),
      dy = now.getDate(),
      yr = now.getFullYear();
    var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli]
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i]
  }
  initClock()
  function initClock() {
    updateClock()
    window.setInterval("updateClock()", 1)
  }

  
var datess = new Date()


if(datess.getDate()>=7){
    f='Растущая Луна'
}
if(datess.getDate()>=14){
    f='Полнолуние'     
}
if(datess.getDate()>=21){
    f='Убывающая Луна'
}else{
    f='Новолуние'
}
  

  
 
  

  function search(){
    const sch= document.getElementById('sch')
    sch.innerHTML=`
    
    Страна: `+poz+` <br>
    Восход: `+Voshod+` <br>
    Закат: `+Zakat+` <br>
    Фаза луны: `+ f+` `  
  }
// множитель 325-5:25 Восход- разница умноженная на число-1 из мин вычитаем разность минут 5.25-9

// Вычислитель восхода в каждом месяце

switch(datess.getMonth()+1){
    case 1:
        var Vtime=(539-(datess.getDate()-1))/60
        var Vh=Math.trunc(Vtime)
        var Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 2:
         Vtime=(504-((datess.getDate()-1)*2))/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 3:
         Vtime=(442-((datess.getDate()-1)*3))/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 4:
         Vtime=(362-(datess.getDate()-1)*2)/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 5:
         Vtime=(288-(datess.getDate()-1)*2)/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 6:
         Vtime=(234-(datess.getDate()-1))/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 7:
         Vtime=(228+(datess.getDate()-1))/60 
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 8:
         Vtime=(272+(datess.getDate()-1)*2)/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 9:
         Vtime=(332+(datess.getDate()-1)*2)/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 10:
         Vtime=(390+(datess.getDate()-1)*2)/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 11:
         Vtime=(453+(datess.getDate()-1)*2)/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
    case 12:
         Vtime=(513+(datess.getDate()-1))/60
         Vh=Math.trunc(Vtime)
         Vm=Math.trunc((Vtime-Vh)*60) 
        break;
}
 var Voshod=Vh+":"+Vm
 if(Vm<10){
     Voshod=Voshod=Vh+":0"+Vm
 }
//Закат
 switch(datess.getMonth()+1){
    case 1:
        var Ztime=(996+((datess.getDate()-1)*1))/60
        var Zh=Math.trunc(Ztime)
        var Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 2:
         Ztime=(1021+((datess.getDate()-1)*2))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 3:
         Ztime=(1082+((datess.getDate()-1)*2))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 4:
         Ztime=(1145+((datess.getDate()-1)*2))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 5:
         Ztime=(1206+((datess.getDate()-1)*2))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 6:
         Ztime=(1261+((datess.getDate()-1)*1))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 7:
         Ztime=(1277-((datess.getDate()-1)*1))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 8:
         Ztime=(1237-((datess.getDate()-1)*1))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 9:
         Ztime=(1166-((datess.getDate()-1)*2))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 10:
         Ztime=(1087-((datess.getDate()-1)*3))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 11:
         Ztime=(1011-((datess.getDate()-1)*2))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
    case 12:
         Ztime=(962-((datess.getDate()-1)*1))/60
         Zh=Math.trunc(Ztime)
         Zm=Math.trunc((Ztime-Zh)*60) 
        break;
 }
 var Zakat=Zh+":"+Zm
 if(Zm<10){
     Zakat=Zakat=Zh+":0"+Zm
 }
 
 function ov1(){ 
    document.getElementById('merc').style="border:solid #ed1f24 2px"
 }
 function ou1(){
    document.getElementById('merc').style='border: 2px dotted #c1c1c1;' 
 }
 function ov2(){ 
    document.getElementById('ven').style="border:solid #ed1f24 2px"
 }
 function ou2(){
    document.getElementById('ven').style='border: 2px dotted #c1c1c1;' 
 }
 function ov3(){ 
    document.getElementById('ear').style="border:solid #ed1f24 2px"
 }
 function ou3(){
    document.getElementById('ear').style='border: 2px dotted #c1c1c1;' 
 }
 function ov4(){ 
    document.getElementById('mar').style="border:solid #ed1f24 2px"
 }
 function ou4(){
    document.getElementById('mar').style='border: 2px dotted #c1c1c1;' 
 }
 function ov5(){ 
    document.getElementById('jup').style="border:solid #ed1f24 2px"
 }
 function ou5(){
    document.getElementById('jup').style='border: 2px dotted #c1c1c1;' 
 }
 function ov6(){ 
    document.getElementById('sat').style="border:solid #ed1f24 2px"
 }
 function ou6(){
    document.getElementById('sat').style='border: 2px dotted #c1c1c1;' 
 }
 function ov7(){ 
    document.getElementById('ura').style="border:solid #ed1f24 2px"
 }
 function ou7(){
    document.getElementById('ura').style='border: 2px dotted #c1c1c1;' 
 }
 function ov8(){ 
    document.getElementById('nep').style="border:solid #ed1f24 2px"
 }
 function ou8(){
    document.getElementById('nep').style='border: 2px dotted #c1c1c1;' 
 }
 function ov9(){ 
    document.getElementById('plu').style="border:solid #ed1f24 2px"
 }
 function ou9(){
    document.getElementById('plu').style='border: 2px dotted #c1c1c1;' 
 }


var offset = new Date().getTimezoneOffset();
if(offset<0)
{
    
    var Tz="UTC+" + Math.ceil(offset/-60)
}
if(offset>0)
{
    
    Tz="UTC-" + Math.ceil(offset/-60)
} 


if(Tz=='UTC-12'){
    var poz= `Американское Самоа (`+Tz+`)`
}
if(Tz=='UTC-11'){
    poz= `Американское Самоа (`+Tz+`)`
}
if(Tz=='UTC-10'){
    poz= `США (`+Tz+`)`
}
if(Tz=='UTC-9'){
    poz= `США (`+Tz+`)`
}
if(Tz=='UTC-8'){
    poz= `США (`+Tz+`)`
}
if(Tz=='UTC-7'){
    poz= `США (`+Tz+`)`
}
if(Tz=='UTC-6'){
    poz= `США (`+Tz+`)`
}
if(Tz=='UTC-5'){
    poz= `США (`+Tz+`)`
}
if(Tz=='UTC-4'){
    poz= `Канада (`+Tz+`)`
}
if(Tz=='UTC-3'){
    poz= `Бразилия (`+Tz+`)`
}
if(Tz=='UTC-2'){
    poz= `Португалия (`+Tz+`)`
}
if(Tz=='UTC-1'){
    poz= `Португалия (`+Tz+`)`
}
if(Tz=='UTC+0'){
    poz= `Великобритания (`+Tz+`)`
}
if(Tz=='UTC+1'){
    poz= `Польша (`+Tz+`)`
}
if(Tz=='UTC+2'){
    poz= `Финляндия (`+Tz+`)`
}
if(Tz=='UTC+3'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+4'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+5'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+6'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+7'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+88'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+9'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+10'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+11'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+12'){
    poz= `Россия (`+Tz+`)`
}
if(Tz=='UTC+13'){
    poz= `Кирибати (`+Tz+`)`
}
if(Tz=='UTC+14'){
    poz= `Кирибати (`+Tz+`)`
}
 
