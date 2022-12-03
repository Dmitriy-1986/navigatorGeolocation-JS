'use strict';

if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
        function (position) {
            
            const {latitude} = position.coords;

            const {longitude} = position.coords;
          
            document.body.innerHTML =   `Перейти на карту по вашим координатам: 
                                            <a href="https://www.google.com.ua/maps/place/${latitude}N+${longitude}E/">
                                                ${latitude}, ${longitude}
                                        </a>`;
        },
        function () {
            alert('Невозможно получить местоположение!');
        }
    );

}











