- Primeiro temos que interceptar os **fetch request** para verificar se o que está a ser pedido nos já possuimos no nosso cache
- Caso os arquivos pedidos não estejam no nosso cache, então permitimos que o request chegue até o nosso servidor.


Dentro do **fetch event**

```javascript

// fetch event
self.addEventListener('fetch', evt => {
  // O respondWith permite pararmos a requisição de 
  // chegar até o servidor e responder da forma como queremos
  // E vamos responder com o arquivo do nosso cache mas antes temos que verificar se temos
  evt.respondWith(
    // Validamos se temos com o caches.match
    caches.match(evt.request)
    .then(cacheResp => {
      // Ou retornamos a resposta se tivermos ou retornas o fetch request inicial
      return cacheResp || fetch(evt.request)
    })
  )
});

```

- Para verificarmos basta ir no browser e veremos

![Um](./img/lessons/1.png)
![Dois](./img/lessons/2.png)