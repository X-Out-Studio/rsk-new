import ymaps from 'ymaps';

document.addEventListener('DOMContentLoaded', () => {
  ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=en')
    .then((maps) => {
      const mapElement = document.getElementById('map');
      if (!mapElement) {
        throw new Error('Map element not found');
      }

      const map = new maps.Map(mapElement, {
        center: [40.711104, -73.998338],
        controls: ['zoomControl'],
        zoom: 14,
      });
      map.behaviors.disable('scrollZoom');
      const circle = new maps.Circle(
        [[40.711104, -73.998338], 100],
        {},
        {
          fillColor: 'rgba(123, 51, 232, 0.15)',
          strokeOpacity: 0,
          strokeWidth: 0,
        }
      );
      const placemarkJK = new maps.Placemark(
        circle.geometry.getCoordinates(),
        {},

        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'src/images/map.png',
          iconImageSize: [320, 80],
          iconImageOffset: [-320, -80],
        }
      );
      const placemarkMB = new maps.Placemark(
        circle.geometry.getCoordinates(),
        {},

        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'src/images/map.png',
          iconImageSize: [150, 40],
          iconImageOffset: [-150, -40],
        }
      );
      if (window.innerWidth > 500) {
        map.geoObjects.add(placemarkJK);
      } else {
        map.geoObjects.add(placemarkMB);
      }
      map.geoObjects.add(circle);
    })
    .catch((error) =>
      console.log('Failed to load Yandex Maps', error)
    );
});
