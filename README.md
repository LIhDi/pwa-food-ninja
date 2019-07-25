- Apesar de tudo estar a funcionar temos um problema se mudarmos o nosso index.html.

1. Quando abrimos a aplicação a primeira vez, o sw é registrado, e é chamado o nosso **install event**
2. É no install que fazemos pre cache dos arquivos
3. Mas vimos que o install não é chamado novamente caso fizermos um reload da pagina
4. Então o que temos no nosso cache caso venhamos a mudar o index.html é uma versão desatualizada.
5. Vimos também que o **install event** só é chamado novamente caso alteremos o arquivo sw.js
6. E é isso que vamos fazer, quando alterarmos qualquer um desses arquivos que fizemos cache, vamos alterar o nome do nosso cache, para podermos versionar.
7. Mas quando versionamos o nosso cache temos que dizer diretamente ao nosso interceptador em qual cache ele deve olhar pois agora temos informações duplicadas.
8. Vamos apagar o nosso antigo cache.
9. Isso vai ocorrer no **activate event**
10. Como nesse ponto ja temos um sw ativado ele ira chamar o **activate** e já podemos apagar o nosso antigo cache

Dentro do **fetch event**

```javascript

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    // caches.keys retorna uma lista com os nomes dos nossos caches
    caches.keys().then(keys => {
      // O que temos que fazer é apagar todos que sejam dieferentes do nosso que está versionado
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

```