Vamos começar por armazenar tudo que compoe a pagina inicial da nossa aplicação, isto é o que vai compor inicialmente o esqueleto da nossa aplicação.

Dentro do **install event**

```javascript
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

```
E tambem criamos as nossas constantes para podermos reaproveitar

```javascript

const staticCacheName = 'site-static';
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
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];
```