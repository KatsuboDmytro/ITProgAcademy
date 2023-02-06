'use strict'
const ratings = document.querySelectorAll('.stars');
if(ratings.length > 0){
    initRatings();
}
if(ratings.length == 0){
    console.log('Кепсько');
}
function initRatings(){//основна ф-ція
    let ratingActive, ratingValue;
    for(let index = 0; index < ratings.length; index++){
        const rating = ratings[index];
        initRating(rating);
    }
    function initRating(rating){ //ініціалізуємо конкретний рейтинг
        initRatingVars(rating);
    }
    function initRatingVars(rating){ //ініціалізуємо змінні
        ratingActive = rating.querySelector('.rating_active');
        ratingValue = rating.querySelector('#rating_value');
        setRatingActiveWidth(ratingValue);
    }
    function setRatingActiveWidth(ratingValue){ //зміна ширини зірочок
        let index = ratingValue.innerHTML;
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
}
/*
            paginatedData.forEach((element) => {
                const short = document.createElement('div');
                short.className = 'short'; short.setAttribute('id', 'shorts');
                short.after(choose);

                const href = document.createElement('a');
                href.href = './productPage.html';
                href.setAttribute('id', 'href');
                href.after(short);
                href.insertAdjacentHTML("afterbegin",`
                    <img src="${element.img}" alt="sportifOriginalShort" class=" short_name main_picture">
                    <header id="short_name">${element.name}</header>`);
                    
                const section = document.createElement('section');
                section.className = 'stars';
                section.after(href);

                const starsBody = document.createElement('div');
                starsBody.className = 'stars_body';
                starsBody.prepend(section);

                const ratingActive = document.createElement('div');
                ratingActive.className = 'rating_active';
                ratingActive.prepend(starsBody);

                const raitingItems = document.createElement('div');
                raitingItems.className = 'raiting_items';
                raitingItems.after(ratingActive);
                
                const input1 = document.createElement('input');
                input1.className = 'star';
                input1.value = '1';
                input1.type = 'radio';
                input1.name = 'rating';
                input1.prepend(raitingItems);

                const input2 = document.createElement('input');
                input2.className = 'star';
                input2.value = '2';
                input2.type = 'radio';
                input2.name = 'rating';
                input2.after(input1);

                const input3 = document.createElement('input');
                input3.className = 'star';
                input3.value = '3';
                input3.type = 'radio';
                input3.name = 'rating';
                input3.after(input2);

                const input4 = document.createElement('input');
                input4.className = 'star';
                input4.value = '4';
                input4.type = 'radio';
                input4.name = 'rating';
                input4.after(input3);

                const input5 = document.createElement('input');
                input5.className = 'star';
                input5.value = '5';
                input5.type = 'radio';
                input5.name = 'rating';
                input5.after(input4);

                starsBody.insertAdjacentHTML("afterend",`<div id="rating_value">${element.rate}</div>`);
                <section class="stars">
                    <div class="stars_body">
                    <div class="rating_active"></div>
                    <div class="raiting_items">
                        <input type="radio" class="star" value="1" name="rating">
                        <input type="radio" class="star" value="2" name="rating">
                        <input type="radio" class="star" value="3" name="rating">
                        <input type="radio" class="star" value="4" name="rating">
                        <input type="radio" class="star" value="5" name="rating">
                    </div>
                    </div>
                    <div id="rating_value">${element.rate}</div>
                </section>
                section.insertAdjacentHTML("afterend",`
                <div class="denim_cargo_low low">As low as &nbsp;<span id="price">${element.price}$</span></div>
                <img src="${element.material}" alt="sportifHatterasShort" class="main_picture">
                <button class="cart">
                    <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1804 20.1228L20.9026 5.89192C20.8677 5.50329 20.542 5.2056 20.1519 5.2056H17.5166V4.01709C17.5166 1.80207 15.7147 0 13.4998 0C11.2849 0 9.48316 1.80207 9.48316 4.01709V5.2056H6.84614C6.456 5.2056 6.13028 5.50329 6.09541 5.89192L4.81252 20.1788C4.79363 20.3897 4.86418 20.5986 5.00699 20.7548C5.1498 20.911 5.35171 20.9999 5.56326 20.9999H21.4348C21.4354 20.9999 21.4362 20.9999 21.4368 20.9999C21.8532 20.9999 22.1906 20.6624 22.1906 20.2461C22.1905 20.2042 22.1871 20.1629 22.1804 20.1228ZM10.9907 4.01709C10.9907 2.6333 12.1163 1.5075 13.4999 1.5075C14.8835 1.5075 16.0092 2.6333 16.0092 4.01709V5.2056H10.9907V4.01709ZM6.38776 19.4925L7.53527 6.71311H9.48316V8.06101C9.48316 8.47728 9.82054 8.81476 10.2369 8.81476C10.6533 8.81476 10.9907 8.47728 10.9907 8.06101V6.71311H16.0092V8.06101C16.0092 8.47728 16.3466 8.81476 16.763 8.81476C17.1794 8.81476 17.5167 8.47728 17.5167 8.06101V6.71311H19.4628L20.6103 19.4925H6.38776Z"/>
                    </svg>
                    ADD TO CART
                </button>          
                </div>`);
            });
*/