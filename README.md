Até o momento carregamos no cache apenas os arquivos da página principal da nossa aplicação, se formos em contact ou about, não irá mostrar visto não termos adicionado os respectivos arquivos.

- Vamos criar um cache separado, pois este vai depender do que o usuário vai utilizar, pois pode ter páginas que ele sequer vai abrir, por isso vamos desperdiçar recursos.
- O que temos que fazer é um armazenamento dinâmico.
- Se o usuário estiver online a clicar no contact page, então iremos armazenar esses arquivos.


Nosso objetivo vai ser:

1. Quando o usuário clicar e emitir o request para uma dessas páginas, irá ser feito um request ao nosso servidor, e atraves da resposta do servidor é que vamos armazenar esses arquivos.
2. Vamos armazenar em um cache diferente.
3. Vamos fazer no **fetch event** pois estamos a interceptar todos os requests.

```javascript
const dynamicCacheName = 'site-dynamic-v1';
```

4. Adicionamos mais uma constante para o nosso armazenamento dinâmico.

```javascript
// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});
```
5. Vimos que se no fetch request for pedido um arquivo que foi armazenado no pre cachee então vamos retornar esse arquivo, agora caso não tenha vamos retornar o proprio request para ele ir no servidor e pegar esses arquivos.
6. Vamos fazer exatamente como da primeira vez, e abrir o nosso dinamico cache e vamos passar o request que foi feito para pegar a url **evt.request.url** que queremos, e passamos também a **fetch response** clonada.
7. caches.put() irá adicionar a url e o clone da resposta no nosso cache dinamico