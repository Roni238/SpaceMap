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
      yr = now.getFullYear()
    var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli]
      
    for (let i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i]
  }
  window.setInterval("updateClock()", 1)
