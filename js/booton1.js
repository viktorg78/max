$('.index_message').on('click', function(){
    let mess =$(this).data('mess');
    location.href = "message?id="+mess; 
});

// Кнопка  `Бетонное оборудование и дробильные установки`
$('#ButS1').on('click', function(){  
    // проверяем есть ли параметр m2 если нет то он равен 0. 
    // если есть то выставляем парамет m  добавляем m2
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=1&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=1&m2="+param; 
    }        
});

// Кнопка `Бурильная и Сваебойная техника`
$('#ButS2').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=2&m2="+param; 
    } 
    
    // location.href = "index?m=3"; 
});

// кнопка `Грузовая техника`
$('#ButS3').on('click', function(){   
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=3&m2="+param; 
    } 
    
    // location.href = "index?m=2"; 
});

// Кнопка `Дорожная техника`
$('#ButS4').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=4&m2="+param; 
    }   
    // location.href = "index?m=4"; 
});

// кнопка `Коммунальная техника`
$('#ButS5').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=5&m2="+param; 
    }   
    // location.href = "index?m=4"; 
});

// кнопка `Погрузочная и Землеройная техника`
$('#ButS6').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=6&m2="+param; 
    }   
    // location.href = "index?m=4"; 
});

// кнопка `Подъёмная техника`
$('#ButS7').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=7&m2="+param; 
    }    
});

// кнопка `Сельхозтехника`
$('#ButS8').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=8&m2="+param; 
    }    
});

// кнопка `Складская техника`
$('#ButS9').on('click', function(){  
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m2')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m2')
        location.href = "index?m=9&m2="+param; 
    }    
});

// Кнопка аренда
$('#ButArenda').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=0"; 
    }else{
        let param = searchParams.get('m')
        location.href = "index?m="+param+"&m2=0"; 
    }    
    // alert(param);
});

// Кнопка Продажа
$('#ButProdaga').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        location.href = "index?m="+param+"&m2=1"; 
    }
});

// ============Бетонное оборудование и бетонные установки================
// Кнопка Автобетононасосы
$('#ButS1a1').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m') && !searchParams.has('m2')){
        location.href = "index?m=1&m2=0&m3=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=1"; 
    }
});

// Кнопка Автобетоносмесители
$('#ButS1a2').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=2"; 
    }
});

// Кнопка Бетононасосы стационарные
$('#ButS1a3').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=3"; 
    }
});

// Кнопка Бетонораздаточные стрелы
$('#ButS1a4').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=4"; 
    }
});

// Кнопка Бетоносмесители
$('#ButS1a5').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=5"; 
    }
});

// Кнопка Виброрейки для бетона
$('#ButS1a6').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=6"; 
    }
});

// Кнопка Гидромолоты
$('#ButS1a7').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=7"; 
    }
});

// Кнопка Гидроножницы
$('#ButS1a8').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=8"; 
    }
});

// Кнопка Глубинные виброуплотнителие
$('#ButS1a9').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=9"; 
    }
});

// Кнопка Грохоты
$('#ButS1a10').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=10"; 
    }
});

// Кнопка Дробильные установки
$('#ButS1a11').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=11"; 
    }
});

// Кнопка Затирочные машины для бетона
$('#ButS1a12').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=12"; 
    }
});

// Кнопка Растворонасосы
$('#ButS1a13').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=13"; 
    }
});

// Кнопка Торкрет установки
$('#ButS1a14').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=14"; 
    }
});

// Кнопка Штукатурные станции
$('#ButS1a15').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=1&m2=1"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=15"; 
    }
});

// бурильная и сваебойная техника

// Кнопка Бурильно-крановые машины
$('#ButS2a1').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=16"; 
    }
});

// Кнопка Бурильно-сваебойные машины
$('#ButS2a2').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=17"; 
    }
});

// Кнопка Буровая мачта
$('#ButS2a3').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=18"; 
    }
});

// Кнопка Буровые станки для закрепления грунтов, фундаментов, геотермального бурения
$('#ButS2a4').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=19"; 
    }
});

// Кнопка Буровые станки для устройства свай
$('#ButS2a5').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=20"; 
    }
});


// Кнопка Вибропогружатели
$('#ButS2a6').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=21"; 
    }
});


// Кнопка Вибропогружатель гидравлический
$('#ButS2a7').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=22"; 
    }
});


// Кнопка Вибротрамбовки
$('#ButS2a8').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=23"; 
    }
});


// Кнопка Гидробуры для копров
$('#ButS2a9').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=24"; 
    }
});


// Кнопка Гидробуры
$('#ButS2a10').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=25"; 
    }
});


// Кнопка Гидромолоты сваебойные
$('#ButS2a11').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=26"; 
    }
});


// Кнопка Дизель молоты трубчатые
$('#ButS2a12').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=27"; 
    }
});


// Кнопка Дизель молоты штанговые
$('#ButS2a13').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=28"; 
    }
});


// Кнопка опровые установки
$('#ButS2a14').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=29"; 
    }
});

// Кнопка Малогабаритные буровые установки
$('#ButS2a15').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=30"; 
    }
});

// Кнопка Мачты копровые
$('#ButS2a16').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=31"; 
    }
});

// Кнопка Мобильные буровые установки
$('#ButS2a17').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=32"; 
    }
});

// Кнопка становка горизонтального шнекового бурения
$('#ButS2a18').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=33"; 
    }
});

// Кнопка Установки горизонтального  бурения
$('#ButS2a19').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=34"; 
    }
});

// Кнопка Электробуры для копров
$('#ButS2a20').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=2&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=35"; 
    }
});

//  ============================грузовая техника=========================
// Кнопка Автовозы полуприцепы
$('#ButS3a81').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=81"; 
    }
});

// Кнопка Автовозы прицепы
$('#ButS3a82').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=82"; 
    }
});

// Кнопка Автовозы
$('#ButS3a80').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=80"; 
    }
});

// Кнопка Автогазовозы
$('#ButS3a38').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=38"; 
    }
});

// Кнопка Автомобили с КМУ
$('#ButS3a39').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=39"; 
    }
});

// Кнопка Автопоезда
$('#ButS3a42').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=42"; 
    }
});

// Кнопка Автосамосвалы
$('#ButS3a43').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=43"; 
    }
});

// Кнопка Авто-топливозаправщик
$('#ButS3a44').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=44"; 
    }
});

// Кнопка Автоцементовозы
$('#ButS3a87').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=87"; 
    }
});

// Кнопка 
$('#ButS3a10').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=45"; 
    }
});

// Кнопка Автоцистерна пищевая
$('#ButS3a45').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=45"; 
    }
});

// Кнопка Аэродромные топливо-заправщики
$('#ButS3a46').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=46"; 
    }
});

// Кнопка Балковозы
$('#ButS3a47').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=47"; 
    }
});

// Кнопка Бензовозы
$('#ButS3a36').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=36"; 
    }
});

// Кнопка Битумовозы
$('#ButS3a37').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=37"; 
    }
});

// Кнопка Бортовые автомобили
$('#ButS3a48').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=48"; 
    }
});

// Кнопка Газозаправщики
$('#ButS3a49').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=49"; 
    }
});

// Кнопка Карьерные самосвалы
$('#ButS3a50').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=50"; 
    }
});
// Кнопка Контейнеровозы
$('#ButS3a84').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=84"; 
    }
});
// Кнопка Кузова самосвалов
$('#ButS3a51').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=51"; 
    }
});
// Кнопка Лесовозы
$('#ButS3a85').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=85"; 
    }
});
// Кнопка Ломовозы
$('#ButS3a52').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=52"; 
    }
});
// Кнопка Мазутовозы
$('#ButS3a53').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=53"; 
    }
});
// Кнопка Минисамосвалы
$('#ButS3a54').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=54"; 
    }
});
// Кнопка Минитракторы
$('#ButS3a88').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=88"; 
    }
});
// Кнопка Мультилифты тросовые
$('#ButS3a55').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=55"; 
    }
});

// Кнопка Панелевозы
$('#ButS3a56').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=56"; 
    }
});

// Кнопка Полуприцепы бензовозы
$('#ButS3a57').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=57"; 
    }
});

// Кнопка Полуприцепы битумовозы
$('#ButS3a58').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=58"; 
    }
});

// Кнопка Полуприцепы бортовые автомобильные
$('#ButS3a40').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=40"; 
    }
});

// Кнопка Полуприцепы контейнеровозы
$('#ButS3a59').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=59"; 
    }
});

// Кнопка Полуприцепы лесовозы
$('#ButS3a60').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=60"; 
    }
});

// Кнопка олуприцепы площадки
$('#ButS3a61').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=61"; 
    }
});

// Кнопка Полуприцепы самосвалы
$('#ButS3a62').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=62"; 
    }
});

// Кнопка >Полуприцепы сортиментовозы
$('#ButS3a63').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=63"; 
    }
});

// Кнопка Полуприцепы тяжеловозы
$('#ButS3a65').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=65"; 
    }
});

// Кнопка Полуприцепы цементовозы
$('#ButS3a66').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=66"; 
    }
});

// Кнопка Прицепы бензовозы
$('#ButS3a67').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=67"; 
    }
});

// Кнопка Прицепы бортовые автомобильные
$('#ButS3a41').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=41"; 
    }
});

// Кнопка Прицепы контейнеровозы
$('#ButS3a68').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=68"; 
    }
});

// Кнопка Прицепы роспуски
$('#ButS3a69').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=69"; 
    }
});

// Кнопка Прицепы самосвалы
$('#ButS3a70').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=70"; 
    }
});

// Кнопка рицепы сортиментовозы
$('#ButS3a71').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=71"; 
    }
});

// Кнопка Прицепы тяжеловозы
$('#ButS3a64').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=64"; 
    }
});

// Кнопка Рефрижераторы
$('#ButS3a83').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=83"; 
    }
});

// Кнопка Самосвалы вездеходы
$('#ButS3a72').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=72"; 
    }
});

// Кнопка Седельные тягачи
$('#ButS3a73').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=73"; 
    }
});

// Кнопка Сортиментовозы
$('#ButS3a86').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=86"; 
    }
});

// Кнопка Сочленённые самосвалы
$('#ButS3a74').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=74"; 
    }
});

// Кнопка Тракторы гусеничные
$('#ButS3a75').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=75"; 
    }
});

// Кнопка Тракторы колёсные
$('#ButS3a76').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=76"; 
    }
});

// Кнопка Трубовозы
$('#ButS3a77').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=77"; 
    }
});

// Кнопка Шасси тракторов
$('#ButS3a78').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=78"; 
    }
});

// Кнопка вакуатор автомобилей
$('#ButS3a79').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=3&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=79"; 
    }
});

// ======================Дорожнпя техника=====================

// Кнопка Автогрейдеры
$('#ButS4a89').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=89"; 
    }
});

// Кнопка Автогудронаторы
$('#ButS4a90').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=90"; 
    }
});

// Кнопка Асфальтобетонные заводы   
$('#ButS4a91').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=91"; 
    }
});

// Кнопка Асфальтовые заводы
$('#ButS4a92').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=92"; 
    }
});

// Кнопка Асфальтоукладчики гусеничные
$('#ButS4a93').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=93"; 
    }
});

// Кнопка Асфальтоукладчики колёсные
$('#ButS4a94').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=94"; 
    }
});

// Кнопка Бетоноукладчики
$('#ButS4a95').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=95"; 
    }
});

// Кнопка Битумощебне-распределители
$('#ButS4a96').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=96"; 
    }
});

// Кнопка Виброкатки ручные
$('#ButS4a97').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=97"; 
    }
});

// Кнопка Виброкатки траншейные
$('#ButS4a98').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=98"; 
    }
});

// Кнопка Виброплиты бензиновые
$('#ButS4a99').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=99"; 
    }
});

// Кнопка Виброплиты дизельные
$('#ButS4a100').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=100"; 
    }
});

// Кнопка Виброплиты реверсивные
$('#ButS4a101').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=101"; 
    }
});

// Кнопка Виброплиты электрические
$('#ButS4a102').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=102"; 
    }
});

// Кнопка Вибротрамбовки бензиновые
$('#ButS4a103').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=103"; 
    }
});

// Кнопка Грейдеры элеваторы
$('#ButS4a104').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=104"; 
    }
});

// Кнопка Дорожные фрезы ручные
$('#ButS4a118').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=118"; 
    }
});

// Кнопка Дорожные фрезы
$('#ButS4a105').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=105"; 
    }
});

// Кнопка Заливщики швов
$('#ButS4a106').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=106"; 
    }
});

// Кнопка Катки грунтовые
$('#ButS4a107').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=107"; 
    }
});

// Кнопка Катки комбинированные
$('#ButS4a109').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=109"; 
    }
});

// Кнопка Катки пневмоколёсные
$('#ButS4a110').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=110"; 
    }
});

// Кнопка Катки статические
$('#ButS4a108').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=108"; 
    }
});

// Кнопка Катки тандемные
$('#ButS4a111').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=111"; 
    }
});

// Кнопка Кохеры для литого асфальта
$('#ButS4a123').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=123"; 
    }
});

// Кнопка Машины для укладки тротуарной плитки
$('#ButS4a124').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=124"; 
    }
});

// Кнопка Машины для ямочного ремонта
$('#ButS4a112').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=112"; 
    }
});

// Кнопка Мобильные перегружатели асфальта
$('#ButS4a113').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=113"; 
    }
});

// Кнопка Нарезчики швов
$('#ButS4a114').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=114"; 
    }
});

// Кнопка Разметочные машины
$('#ButS4a115').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=115"; 
    }
});

// Кнопка Ресайклеры
$('#ButS4a116').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=116"; 
    }
});

// Кнопка Ручные буровые установки
$('#ButS4a117').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=117"; 
    }
});

// Кнопка Сваебойные установки дорожные
$('#ButS4a119').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=119"; 
    }
});

// Кнопка Скреперы
$('#ButS4a120').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=120"; 
    }
});

// Кнопка Укладчики литого асфальта
$('#ButS4a125').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=125"; 
    }
});

// Кнопка Установки битумных эмульсий
$('#ButS4a121').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=121"; 
    }
});

// Кнопка Уширители обочин
$('#ButS4a126').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=126"; 
    }
});

// Кнопка Щебне-распределители
$('#ButS4a122').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=4&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=122"; 
    }
});

// =============== комунальная техника ===========================

// Кнопка Аварийно-ремонтные машины
$('#ButS5a127').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=127"; 
    }
});

// Кнопка Ассенизаторские машины
$('#ButS5a128').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=128"; 
    }
});

// Кнопка Бункеровозы
$('#ButS5a129').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=129"; 
    }
});

// Кнопка Вакуумные уборочные машины
$('#ButS5a130').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=130"; 
    }
});

// Кнопка Вахтовые автобусы
$('#ButS5a131').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=131"; 
    }
});

// Кнопка Газонокосилки бензиновые
$('#ButS5a132').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=132"; 
    }
});

// Кнопка Гидравлические насосные станции
$('#ButS5a133').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=133"; 
    }
});

// Кнопка Дробилки древесных отходов
$('#ButS5a134').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=134"; 
    }
});

// Кнопка Измельчители веток
$('#ButS5a135').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=135"; 
    }
});

// Кнопка Измельчители пней
$('#ButS5a136').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=136"; 
    }
});

// Кнопка Илососы
$('#ButS5a137').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=137"; 
    }
});

// Кнопка Каналопромывочные комбинированные машины
$('#ButS5a138').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=138"; 
    }
});


// Кнопка Каналопромывочные машины
$('#ButS5a139').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=139"; 
    }
});

// Кнопка Коммунальное навесное оборудование
$('#ButS5a140').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=140"; 
    }
});

// Кнопка Коммунальные уборочные машины
$('#ButS5a163').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=136"; 
    }
});

// Кнопка Компрессоры передвижные
$('#ButS5a141').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=141"; 
    }
});

// Кнопка Контейнерные мусоровозы
$('#ButS5a142').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=142"; 
    }
});

// Кнопка Малогабаритные погрузчики
$('#ButS5a143').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=143"; 
    }
});

// Кнопка Машины для пересадки деревьев
$('#ButS5a144').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=144"; 
    }
});

// Кнопка Минилифты
$('#ButS5a145').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=145"; 
    }
});

// Кнопка Минитракторы
$('#ButS5a146').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=146"; 
    }
});

// Кнопка Мотокосы
$('#ButS5a147').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=147"; 
    }
});

// Кнопка Мусорные контейнеры
$('#ButS5a149').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=149"; 
    }
});

// Кнопка Мусоровозы с боковой загрузкой
$('#ButS5a150').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=150"; 
    }
});

// Кнопка Мусоровозы с задней загрузкой
$('#ButS5a151').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=151"; 
    }
});

// Кнопка Оборудование для мойки контейнеров
$('#ButS5a152').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=152"; 
    }
});

// Кнопка Передвижные дизельные электростанции
$('#ButS5a153').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=153"; 
    }
});

// Кнопка Передвижные насосные установки
$('#ButS5a154').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=154"; 
    }
});

// Кнопка Пескоразбрасыватели
$('#ButS5a155').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=155"; 
    }
});

// Кнопка Подметательно-уборочные машины
$('#ButS5a156').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=156"; 
    }
});

// Кнопка Поливомоечные машины комбинированные
$('#ButS5a157').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=157"; 
    }
});

// Кнопка Поливомоечные машины тротуарные
$('#ButS5a158').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=158"; 
    }
});

// Кнопка Рециклеры
$('#ButS5a159').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=159"; 
    }
});

// Кнопка Снегопогрузчики
$('#ButS5a160').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=160"; 
    }
});

// Кнопка Снегоуборочные машины
$('#ButS5a161').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=161"; 
    }
});

// Кнопка Снегоуборщики бензиновые
$('#ButS5a162').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=162"; 
    }
});

// Кнопка Универсальные многофункциональные коммунальные машины
$('#ButS5a148').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=148"; 
    }
});

// Кнопка Уплотнители мусора
$('#ButS5a164').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=5&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=164"; 
    }
});

// ====================== погрузочная и снегоуборочная техника ========================

// Кнопка Автоэкскаваторы
$('#ButS6a165').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=165"; 
    }
});

// Кнопка Бульдозеры гусеничные
$('#ButS6a166').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=166"; 
    }
});

// Кнопка Бульдозеры колёсные
$('#ButS6a167').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=167"; 
    }
});

// Кнопка Гидрофрезы стена в грунте
$('#ButS6a168').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=168"; 
    }
});

// Кнопка Грейферы гидравлические стена в грунте
$('#ButS6a169').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=169"; 
    }
});

// Кнопка Грейферы двухчелюстные для сыпучих грузов
$('#ButS6a170').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=170"; 
    }
});

// Кнопка Грейферы для металлолома
$('#ButS6a171').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=171"; 
    }
});

// Кнопка Грейферы сортировочные
$('#ButS6a172').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=172"; 
    }
});

// Кнопка Захваты для брёвен
$('#ButS6a173').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=173"; 
    }
});

// Кнопка Земснаряды
$('#ButS6a174').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=174"; 
    }
});

// Кнопка Кабелеукладчики
$('#ButS6a175').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=175"; 
    }
});

// Кнопка овши дробильные
$('#ButS6a176').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=176"; 
    }
});

// Кнопка Косилки роторные
$('#ButS6a177').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=177"; 
    }
});

// Кнопка Кусторезы
$('#ButS6a178').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=178"; 
    }
});

// Кнопка Мини-экскаваторы
$('#ButS6a180').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=180"; 
    }
});

// Кнопка Минипогрузчики
$('#ButS6a179').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=179"; 
    }
});

// Кнопка Перегружатели лома
$('#ButS6a181').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=181"; 
    }
});

// Кнопка Погрузчики грейферные
$('#ButS6a182').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=182"; 
    }
});

// Кнопка Погрузчики с поворотной стрелой
$('#ButS6a183').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=183"; 
    }
});

// Кнопка Тракторное навесное оборудование
$('#ButS6a184').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=184"; 
    }
});

// Кнопка Фрезы
$('#ButS6a185').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=185"; 
    }
});

// Кнопка Фронтальные погрузчики
$('#ButS6a186').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=186"; 
    }
});

// Кнопка Экскаваторы бульдозеры
$('#ButS6a187').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=187"; 
    }
});

// Кнопка Экскаваторы гусеничные
$('#ButS6a188').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=188"; 
    }
});

// Кнопка Экскаваторы драглайны
$('#ButS6a189').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=189"; 
    }
});


// Кнопка Экскаваторы карьерные
$('#ButS6a190').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=190"; 
    }
});


// Кнопка Экскаваторы колёсные
$('#ButS6a191').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=191"; 
    }
});


// Кнопка Экскаваторы планировщики
$('#ButS6a192').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=192"; 
    }
});

// Кнопка Экскаваторы роторные
$('#ButS6a193').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=193"; 
    }
});


// Кнопка Экскаваторы с прямой лопатой
$('#ButS6a194').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=194"; 
    }
});

// Кнопка Экскаваторы специального назначения
$('#ButS6a195').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=195"; 
    }
});

// Кнопка Экскаваторы цепные
$('#ButS6a196').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=196"; 
    }
});

// Кнопка Экскаваторы шагающие
$('#ButS6a197').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=197"; 
    }
});

// Кнопка Экскаваторы-погрузчики
$('#ButS6a198').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=6&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=198"; 
    }
});

// =================== подъемная техника ============================

// Кнопка Автовышки коленчатые
$('#ButS7a199').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=199"; 
    }
});

// Кнопка Автовышки ножничные
$('#ButS7a200').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=200"; 
    }
});

// Кнопка Автовышки телескопические
$('#ButS7a201').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=201"; 
    }
});

// Кнопка Автокраны на спецшасси
$('#ButS7a202').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=202"; 
    }
});

// Кнопка Автокраны
$('#ButS7a203').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=203"; 
    }
});

// Кнопка Бульдозеры трубоукладчики
$('#ButS7a204').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=204"; 
    }
});

// Кнопка Вагоноопрокидыватели
$('#ButS7a205').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=205"; 
    }
});

// Кнопка Грузовой наклонный подъёмник на шасси
$('#ButS7a206').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=206"; 
    }
});

// Кнопка Коленчатые подъёмники
$('#ButS7a207').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=207"; 
    }
});

// Кнопка Конвейеры ленточные передвижные
$('#ButS7a208').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=208"; 
    }
});

// Кнопка Краны башенные автомобильные
$('#ButS7a209').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=209"; 
    }
});

// Кнопка Краны башенные
$('#ButS7a210').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=210"; 
    }
});

// Кнопка Краны гусеничные
$('#ButS7a211').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=211"; 
    }
});

// Кнопка Краны козловые
$('#ButS7a212').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=212"; 
    }
});

// Кнопка Краны консольные
$('#ButS7a213').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=213"; 
    }
});

// Кнопка Краны короткобазовые
$('#ButS7a214').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=214"; 
    }
});

// Кнопка Краны монтажные
$('#ButS7a215').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=215"; 
    }
});

// Кнопка Краны мостовые ручные
$('#ButS7a216').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=216"; 
    }
});

// Кнопка Краны мостовые электрические
$('#ButS7a217').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=217"; 
    }
});

// Кнопка Краны трубоукладчики
$('#ButS7a218').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=218"; 
    }
});

// Кнопка Краны штабелеры
$('#ButS7a219').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=219"; 
    }
});

// Кнопка Люльки строительные подвесные
$('#ButS7a220').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=220"; 
    }
});

// Кнопка Мачтовые фасадные платформы
$('#ButS7a221').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=221"; 
    }
});

// Кнопка Мини-краны
$('#ButS7a222').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=222"; 
    }
});

// Кнопка Мобильная комбинированная автовышка для обслуживания мостов
$('#ButS7a223').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=223"; 
    }
});

// Кнопка Мостовые мобильные платформы
$('#ButS7a224').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=224"; 
    }
});

// Кнопка Подъёмники мачтовые грузовые
$('#ButS7a225').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=225"; 
    }
});

// Кнопка Подъёмники мачтовые грузопассажирские
$('#ButS7a226').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=226"; 
    }
});

// Кнопка Подъёмники мачтовые телескопические
$('#ButS7a227').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=227"; 
    }
});

// Кнопка Подъёмники прицепные коленчатые
$('#ButS7a228').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=228"; 
    }
});

// Кнопка Подъёмники строительные пассажирские
$('#ButS7a229').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=229"; 
    }
});

// Кнопка Подъёмники телескопические самоходные
$('#ButS7a230').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=230"; 
    }
});

// Кнопка Самоходные ножничные подъёмники
$('#ButS7a231').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=231"; 
    }
});

// Кнопка Строительные леса
$('#ButS7a232').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=7&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=232"; 
    }
});

// =================== сельхоз техника =======================

// Кнопка Жатки
$('#ButS8a233').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=233"; 
    }
});

// Кнопка Комбайны
$('#ButS8a234').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=234"; 
    }
});

// Кнопка Кормоуборочная и кормозаготовительная техника
$('#ButS8a235').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=235"; 
    }
});

// Кнопка Машины и оборудование для послеуборочной обработки и хранения
$('#ButS8a236').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=236"; 
    }
});

// Кнопка Мелиоративное оборудование
$('#ButS8a237').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=237"; 
    }
});

// Кнопка Почвообрабатывающая и посевная техника
$('#ButS8a238').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=238"; 
    }
});

// Кнопка Тепличное оборудование
$('#ButS8a239').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=239"; 
    }
});

// Кнопка Техника для внесения удобрений и защиты растений
$('#ButS8a240').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=8&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=240"; 
    }
});

// ====================== складская техника =========================

// Кнопка Боковые погрузчики
$('#ButS9a241').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=241"; 
    }
});

// Кнопка Вилочные автопогрузчики
$('#ButS9a242').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=242"; 
    }
});

// Кнопка Гидравлические тележки
$('#ButS9a243').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=243"; 
    }
});

// Кнопка Комплектовщики заказов
$('#ButS9a244').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=244"; 
    }
});

// Кнопка Погрузчики телескопические
$('#ButS9a245').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=245"; 
    }
});

// Кнопка Ричстакеры
$('#ButS9a246').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=246"; 
    }
});

// Кнопка Ричтраки
$('#ButS9a247').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=247"; 
    }
});

// Кнопка Штабелеры ручные
$('#ButS9a248').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=248"; 
    }
});

// Кнопка Электротележки
$('#ButS9a249').on('click', function(){    
    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('m')){
        location.href = "index?m=9&m2=0"; 
    }else{
        let param = searchParams.get('m')
        let param2 = searchParams.get('m2')
        location.href = "index?m="+param+"&m2="+param2+"&m3=249"; 
    }
});
