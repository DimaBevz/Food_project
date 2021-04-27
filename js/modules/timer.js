function timerOnPage(id, deadLine) {

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()); // получим количество милисекунд которые будут в конечном времени

        const days = Math.floor(t / (1000 * 60 * 60 * 24)); 

        // в итоге мы получим сколько у нас осталось суток до окончания даты "deadLine"

        const hours = Math.floor((t / (1000 * 60 * 60) % 24)), // общее кол-во милисекунд делённое на кол-во милисекунд в часе
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {      
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    // ф-я которая будет добавлять "0" перед однозначным числом если оно такое, например: 9 => 09
    function getZero( num ){
        if (num >= 0 && num < 10) { 
            return `0${num}`;  
        } else {
            return num; 
        }
    }

    
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval( updateClock, 1000); 

        updateClock(); 


        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval( timeInterval );
            }
        }
    }

    setClock(id, deadLine);

}

export default timerOnPage;