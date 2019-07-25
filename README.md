Do jeito que fizemos agora com as paginas about e contact foi:

1. Se o usuário está online e visita a página ele armazena essa página.
2. Temos os arquivos do pre cached que são os da página principal da nossa aplicação.
3. E se o usuário tentar acessar uma página que ele não acessou online?
4. O que podemos fazer é criar uma mensagem onde se o usuário estiver offline e tentar acessar, mostre uma mensagem "Desculpe não é possível acesssar esta página offline"
5. Vamos criar a página fallback.html em pages/
6. Vamos adicionar a página fallback.html a nossa constante assets

```javascript
const assets = [
  ...
  '/pages/fallback.html'
];
```

7. E vamos adicionar ao nosso código que quando os arquivo não estiverem no cache e se estivermos offline, o **fetch** vai tentar ir no servidor, mas como estamos offline, vai retornar um erro.

```javascript
...
}).catch(() => caches.match('/pages/fallback.html'))
```