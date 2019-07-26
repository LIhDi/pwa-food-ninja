Vamos limitar o tamanho do nosso cache, e antes de ultrapassar vamos apagar arquivos antigos.

1. Vamos adicionar no nosso sw.js


```javascript
// vamos passar o nome do cache que vamos limitar e o numero de arquivos que ele pode ter
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      // Vamos abrir o nosso cache e ver quantos pares chave/arquivo temos
      if(keys.length > size){
        // Se a quantidade for maior que o numero que passamos
        // Então vamos deletar o primeiro, pois é o mais antigo
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
```
2. E no **fetch event** vamos chamar a função para validar o tamanho.

```javascript
cache.put(evt.request.url, fetchRes.clone());
          // Antes do retorno vamos chamar a função para limitar o tamanho
          // Passando o nome da cache e o tamanho
          limitCacheSize(dynamicCacheName, 15);
          return fetchRes;
```


