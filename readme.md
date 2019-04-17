# Leaflet-draw locale

Library to add locales to [Leaflet.draw](https://github.com/Leaflet/Leaflet.draw).

## Installation

```bash
npm install --save sphericcube/web.leaflet-draw.locales
```

## Usage

```javascript
require('web.leaflet-draw.locales');

//create locale
L.createLocal('ru',{
  draw: {
    handlers: {
      circle: {
        radius: 'Радиус'
      }
    }
  }
})

//set locale
L.setLocal('ru');

//get current locale
L.getCurrentLocal();
//returns 'ru'
```

## Available locales
RU - [web.leaflet-draw.locales.ru](https://github.com/SphericCube/web.leaflet-draw.locales.ru)
