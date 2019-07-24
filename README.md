A melhor parte de ter o pwa é ter capacidade 
de usa-lo em modo offline, ou seja sem a conexão com a internet, mas ainda ainda pwa possui algumas limitações.

As informações vão ser armazenadas na cache, para serem carregadas quando precisarmos delas.
A **Storage Cache** não nos dá toda autonomia necessária para lidar com as informações e os requests, iremos utilizar a **Aplication Cache**

- Quando estamos online a cache irá iniciar fazer, conforme interceptarmos os **fetch events** vamos aguardar a reposta do servidor e armazenar essas informações.

![Um](./img/lessons/1.png)


- Se ficarmos offline o sw irá interceptar esses requests e verificar que as informações já estão armazenadas no cache.

![Dois](./img/lessons/2.png)

Esse arquivos que são armazenados inicialmente na cache é o que chamamos de **pre cached**
Essa funcionalidade de carregar a informação da cache irá funcionar offline e online, o que irá melhorar muito o nosso tempo de resposta.
