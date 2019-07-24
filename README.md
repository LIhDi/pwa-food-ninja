Apos registrarmos o nosso sw, o browser ira emitir um evento de **install**

No sw acrescentamos:

```javascript
self.addEventListener('install', evt => {
    console.log('service worker installed');
  });
```
- O self está a referenciar ao proprio sw, então ele irá ouvir quando um **install event** ocorrer.

- Vimos tambem que quando o sw já esta registrado o install event so acontece quando o sw for modificado e so irá atualizar apos todas as instancias do antigo estiverem fechadas. Ele irá ficar no modo de espera.

![Dois](./img/lessons/2.png)




