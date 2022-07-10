const datess = new Date()
// Вычислитель рассвета в каждом месяце
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
//Вычислитель заката в каждом месяце
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
 //Присваеваем значения рассвету и закату для удобного вывода
 var sunriseTime=Vh+":"+Vm
 var sunsetTime=Zh+":"+Zm
 //Если минуты события меньше 10 то перед числом будет появляться 0
 if(Zm<10){ sunsetTime=Zh+":0"+Zm}
 if(Vm<10){ sunriseTime=Vh+":0"+Vm}

// Получение фазы луны

let phase
if(datess.getDate()>=7){phase='Растущая Луна'}
if(datess.getDate()>=14){phase='Полнолуние'}
if(datess.getDate()>=21){phase='Убывающая Луна'}
if(datess.getDate()<7){phase='Новолуние'}

//Вычисление часового пояса

const utcNumber=datess.getTimezoneOffset()
let timezone
utcNumber<0 ?
    timezone="UTC+" + Math.ceil(utcNumber/-60):
    timezone="UTC-" + Math.ceil(utcNumber/-60)

//Вычисление старны по часовому поясу
let position
switch(timezone){
    case 'UTC-12': case'UTC-11':
        position= `Американское Самоа (${timezone})`
        break
    case 'UTC-10': case 'UTC-9':case 'UTC-8':case 'UTC-7':case 'UTC-6':case 'UTC-5':
        position= `США (${timezone})`
        break
    case 'UTC-4':
        position= `Канада (${timezone})`
        break
    case 'UTC-3':
        position= `Бразилия (${timezone})`
        break
    case 'UTC-2':case 'UTC-1':
        position= `Португалия (${timezone})`
        break
    case 'UTC+0':
        position= `Великобритания (${timezone})`
        break
    case 'UTC+1':
        position= `Польша (${timezone})`
        break
    case 'UTC+2':
        position= `Финляндия (${timezone})`
        break
    case 'UTC+3': case 'UTC+4':case 'UTC+5':case 'UTC+6':case 'UTC+7':case 'UTC+8':case 'UTC+9':case 'UTC+10':case 'UTC+11':case 'UTC+12':
        position= `Россия (${timezone})`
        break
    case 'UTC+13':case 'UTC+14': 
    position= `Кирибати (${timezone})`
    break
}

//Вывод информации
function search(){
    const sch= document.getElementById('sch')
    sch.innerHTML=`
    Страна: ${position} <br>
    Рассвет: ${sunriseTime} <br>
    Закат: ${sunsetTime} <br>
    Фаза луны: ${phase} `  
  }