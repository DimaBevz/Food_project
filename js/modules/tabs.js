function tabsOnPage(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
        tabContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector); 

    
    // ф-я которая скрывает табы
    function hideTabContent() {
        tabContent.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); // "fade" for animation

        });

 
        tabs.forEach( item => {
            item.classList.remove(activeClass); 
        });
    }

    // 2 - ф-я которая будет показывать табы
    function showTabContent(i = 0) { // передаём номер (который нам нужно показать) как аргумент

        tabContent[i].classList.add('show', 'fade'); // "fade" for animation
        tabContent[i].classList.remove('hide');

        tabs[i].classList.add(activeClass); 
    }
    // пишем "i" для чтобы понимать к какому элементу мы обращаемся

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        // при помощи "contains" будем определять, что мы точно кликнули в таб

        if (target && target.classList.contains(tabsSelector.slice(1))) {

            tabs.forEach ((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

            // target - тот элемент в который мы только что кликнули
            // item - элемент который мы сейчас перебираем в нашем цикле
        }
    });


}

export default tabsOnPage;