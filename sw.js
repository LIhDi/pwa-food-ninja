const staticCacheName = 'site-static';
const dynamicCacheName = 'site-dynamic-v1';
// Vamos passar os requests que queremos pegar os resultados
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  '/pages/fallback.html',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// install event
self.addEventListener('install', evt => {
  // Para que os nossos arquivos sejam armazenados e só então o sw instalado
  // Usamos o waiUntil()

  evt.waitUntil(
    // Ira abrir esse cache que passamos o nome se existir caso contraario ira criar e abrir
    caches.open(staticCacheName)
      .then(cache =>{
        // O metodo addAll vai ate o nosso servidor e ira adicionar ao cache a lista de requests que queremos as respostas
        cache.addAll(assets);
  }))
});



// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    // caches.keys retorna uma lista com os nomes dos nossos caches
    caches.keys().then(keys => {
      // O que temos que fazer é apagar todos que sejam dieferentes do nosso que está versionado
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          // Antes do retorno vamos chamar a função para limitar o tamanho
          // Passando o nome da cache e o tamanho
          limitCacheSize(dynamicCacheName, 15);
          return fetchRes;
        })
      });
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('/pages/fallback.html');
      } 
    })
  );
});