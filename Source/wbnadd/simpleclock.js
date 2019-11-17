<!--Место, где мы хотим выводить часы-->
<p>Сейчас время - <span id="idClock"></span></p>
<!--Скрипт на JavaScript-->

<script language="JavaScript" type="text/javascript">

function SimpleClock()
{
  //создаем объект с текущей датой и временем
  var tekDate = new Date();
  //получаем из объекта часы, минуты и секунды
  var hour = tekDate.getHours();
  var minute = tekDate.getMinutes();
  var seconds = tekDate.getSeconds();
  //для того чтобы минуты и секунды до 10 отображались корректно с нулем
  minute=((minute < 10) ? "0" : "") + minute;
  seconds =((seconds < 10) ? "0" : "") + seconds;
  //смотрим чтобы часы не переваливали за 24
  hour=(hour > 24) ? hour-24 : hour;
  hour=(hour == 0) ? 0 : hour;
  //задаем окончательное значение времени
  var clock = hour + ":" + minute + ":" + seconds;

  //отрисовываем время на странице
  if(clock != document.getElementById('idClock').innerHTML){
                     document.getElementById('idClock').innerHTML = clock;
     }
     //выполняем все это каждую секунду
  timer = setTimeout("SimpleClock()",1000);
}

//для первого запуска
SimpleClock();

</script>
