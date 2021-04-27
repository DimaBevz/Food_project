function cards() {

                                                 

    class AllCardsMenu {

        constructor(src, alt, title, description, price, parentSelector, ...classes) { 
            this.src = src;
            this.alt = alt;     
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes; // rest оператор
            this.parent = document.querySelector(parentSelector); 
            this.transphere = 28; 
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = +this.price * this.transphere;
        }


        render() {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {   
                this.element = 'menu__item'; 
                element.classList.add(this.element);
            } else {

                this.classes.forEach( className => element.classList.add( className ));

            }
         

            element.innerHTML = `
                    <img src=${this.src} alt=${this.src}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;

            this.parent.append(element); 
        }
    }
    

    axios.get('http://localhost:3000/menu')
        .then( data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {  
                new AllCardsMenu( img, altimg, title, descr, price, '.menu .container').render();
            });
        });


}

export default cards;