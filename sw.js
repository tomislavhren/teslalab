self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open('teslalab').then(function (cache) {
          return cache.addAll([
            '/tesla-lab/',
            '/tesla-lab/index.html',
            '/tesla-lab/app/site/site.min.css',
            '/tesla-lab/app/data/blueprints/daljuprbrodom.json',
            '/tesla-lab/app/data/blueprints/prelen.json',
            '/tesla-lab/app/data/blueprints/rasvisfrstr.json',
            '/tesla-lab/app/data/blueprints/teslinaturbina.json',
            '/tesla-lab/app/data/blueprints/teslinazavojnica.json',
            '/tesla-lab/app/data/aboutTesla.json',
            '/tesla-lab/app/data/bezicnastruja.json',
            '/tesla-lab/app/data/faraday.json',
            '/tesla-lab/app/data/tt100k.json',
            '/tesla-lab/app/data/tt3M.json',
            '/tesla-lab/assets/blueprints/daljuprbrodom.png',
            '/tesla-lab/assets/blueprints/prelen.png',
            '/tesla-lab/assets/blueprints/rasvisfrstr.png',
            '/tesla-lab/assets/blueprints/teslinaturbina.png',
            '/tesla-lab/assets/blueprints/teslinazavojnica.png',
            '/tesla-lab/assets/bezicni_prijenos.png',
            '/tesla-lab/assets/faraday_kavez.png',
            '/tesla-lab/assets/okretnoEMP.png',
            '/tesla-lab/assets/tesla_portrait.jpg',
            '/tesla-lab/assets/tt100k.png',
            '/tesla-lab/assets/tt3m.png',
            '/tesla-lab/assets/TeslaLabLogo.png',
            '/tesla-lab/assets/tmntlogo.png',
            '/tesla-lab/bower_components/material-design-lite/material.min.js',
            '/tesla-lab/bower_components/material-design-lite/material.min.css',
            '/tesla-lab/bower_components/angular/angular.min.js'
          ]);
      })
    );
});

self.addEventListener('fetch', function (event) {
    //console.log(event.request.url);

    event.respondWith(
      caches.match(event.request).then(function (response) {
          return response || fetch(event.request);
      })
    );
});