# SpaceMap
"SpaceMap" - проект созданный для развлечения и обучения, представляет макет солнечной системы открывающуюся в браузере.

Адрес работы: https://roni238.github.io/SpaceMap/ или файл index.html в папке проекта. 

При открытии проекта, перед вами откроется наша солнечная система, солнце и 9 планет каждая из которых движется по своей отрисовоной орбите, на заднем плане холст на котором отрисовываются звёзды (в файле maps.js можно менять время жизни, размер и цвет звёзд) все элементы солнечной системы интерактивные, при нажатии на какой-либо элемент карты будет всплывать окно с краткой информацией и ссылкой на статью с википедии, так же в левом верхнем углу список активных элементов, при наведении на них выделяется траектория сопутствующего объекта, при нажатии на пункт из списка или на любой объект на самой карте, всплывает окно с gif изображением, кратким описанием и ссылкой на википедию. В левом нижнем углу часы и кнопка "Найди меня!". При нажатии на "Найди меня!" появится дополнительная информация о вашем местоположении и времени, с помощью нее выводится информация о восходе и закате в вашем регионе, а также о фазе луны. Все элементы сайта, стили и анимации написаны на html, с помощью JS меняются стандартно заданные стили и производятся вычисления. Местоположение получается функцией  вычисляющей часовой пояс, после чего данные о восходе и закате соотносятся вашим положением. Время восхода и заката определяется для каждого месяца по разному и для каждого месяца прописаны свои вычисления по формуле 
"(Время [восхода/заката] в первый день переведенное в минуты[-/+](день месяца-1)*(на среднее [увеличение/уменьшение]светового дня/2)) = время восхода в минутах, позже это число делится на 60(чтобы получить часы)", целая присваивается часам, а сотые от домножаются на 60 и присваиваются минутам.
Фаза луны расчитывается от 1 апреля(начала первой фазы) и меняется каждые 7 дней(тк время смены фаз варьируется от 6,58-8,24 дня я брал примерное среднее значение)
Также сайт сделан адаптивным с помощью media запросов, то есть при увеличении экрана все элементы будут меняться в размерах, а на узких экранах (например телефонов) солнечная система будет обрезаться и окно с информацией будет не с краю, а во весь экран, закрыть его можно нажав на крестик в правом верхнем углу.
