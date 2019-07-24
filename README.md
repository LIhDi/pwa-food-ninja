Apos registrarmos o nosso sw, o browser emitiu o **install event**

- O sw se torna ativo e emite o **active event**

No sw acrescentamos:

```javascript
 self.addEventListener('activate', evt => {
    console.log('service worker foi ativado');
  });
```





