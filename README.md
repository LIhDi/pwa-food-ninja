Para registrar o sw vamos no app.js e vamos adicionar:

```javascript
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
  }
```
- Primeiro validamos se o browser suporta o sw, se no navegador conter a propriedade **serviceWorker**, então ele irá registrar.

- Service Workers apenas funciona com HTTPS, a unica exeção é quando estamos em localhost



