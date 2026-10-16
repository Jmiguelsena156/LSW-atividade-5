# Questões sobre Funções avançadas no Javascript

- Curso: ADS
- Nome: José Miguel Sena Antunes
- Professor: John Lennon Saraiva de Sousa
- Periodo: 2º periodo

## Conteúdo:

* Arrow functions;
    Exemplo:
    ```js
    const calcularMedia1 = (a, b) => (a+b) / 2;

    const quadrado1 = n => {n * n; }; // Errado
    const quadrado2 = n => {return n * n; }; // Correto
    ```

* Funções de alta ordem e programação funcional;
    Exemplo:
    ```js
    function realizar(imprimir) {
        imprimir("Olá Menino");
    }

    realizar(console.log);

    const produtos = [
        { nome: "ssd", estoque: 4},
        { nome: "hd", estoque: 0},
        { nome: "pendrive", estoque: 2},
    ]

    console.log(produtos.filter(item => item.estoque > 0).map(item => item.nome.toUpperCase()));

    ```

* Closures e escopo léxico;
    Exemplo:
    ```js
    function criarSenha(Senha) {
        return Tentativa => {
            if (Senha === Tentativa) {
                return true;
            }

            return false;
        };
    }

    const senha1 = criarSenha("Jose123");
    console.log(senha1("jose123")); // false
    console.log(senha1("Jose123")); // true
    ```

* Parâmetros opcionais e valores padrão.
    Exemplo:
    ```js
    function apresentar(nome = "Amigo") {
        console.log(`Olá, ${nome}.`);
    }

    apresentar(); // Olá, Amigo
    apresentar("João"); // Olá, João
    ```
