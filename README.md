Resolvemos o problemas do request de páginas que não estáo em cache quando estamos offline.
Mas da forma como fizemos quando o usuário faça request de uma imagem ou de qualuqer outra coisa, a mensagem irá aparecer, então iremos filtrar.

1. Apenas vamos mostrar caso seja feito um request de .html



```javascript
const assets = [
  ...
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('/pages/fallback.html');
      } 
    })
  );
});
```
