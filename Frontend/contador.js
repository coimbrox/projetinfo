let queue = [
    {
        name: "Antonio figueiredo",
        amount: 4,
    },
    {
        name: "Maria Carolina",
        amount: 2,
    },
    {
        name: "Jão Vitor",
        amount: 2,
    },
    {
        name: "Andressa Silva",
        amount: 27,
    },

];

setInterval(apagar, 15000);

function createItem(text, number) {  // função recebe texto e retorna item criado
    let mostrarElement = document.createElement('li'); // criando lI e guardando (na variável mostrar element) objeto do tipo Li
    let mostrarElemento = document.createElement('li')
    let mostrarNome = document.createTextNode("Nome:  " + text);  // criando nó de texto exemplo p e guardando na variavel (mostrar nome)
    let mostrarAmount = document.createTextNode("Quantidade:  " + number);



    mostrarElement.appendChild(mostrarNome);
    mostrarElemento.appendChild(mostrarAmount);// adicionando um filho ao elemento  ( colocando o P dentro do Li ) pegando o que ta guardado e adicionando o texto dentro 

    mostrarElement.classList.add('mostrarElement');  // atribuindo "classe" as variáveis 
    mostrarElemento.classList.add('mostrarElemento');

    tabela.appendChild(mostrarElement);
    tabela.appendChild(mostrarElemento);


    console.log(mostrarNome);
    console.log(mostrarAmount);


    // retornando o elemento ja com o texto 

}

//ADD UM ITEM NUMA LISTA
/*function addItem(list, item, qtd) {  // criando parametros para receber a lista e o item
    list.appendChild(item);  // adicionando o item dentro da lista
    list.appendChild(qtd);

} */

//RECEBE COMO 1 UM ARRAY DE VALOR E COMO SEGUNDO UMA LISTA ONDE COLOCA OS VALORES 
function readList(data) { // função que corre pelo array queue
    let i = 0
    for (i = 0; i < data.length; i++) {

        createItem(data[i].name, data[i].amount)

    }

}  // i define a posição  do for 

//chamar o elemento
let tabela = document.querySelector("#caller"); //capturando a lista 



function clicaBotao() {

    let user = document.querySelector("#name");
    let quantity = document.querySelector("#amount");


    tabela.innerHTML = ""
    // createItem(user.value, quantity.value)
    queue.push({
        name: user.value,
        amount: quantity.value

    })
    readList(queue)

    if (quantity.value == 71) {
        queue = queue.filter(client => client.amount % 2 !== 0);
        tabela.innerHTML = ""
        readList(queue)
    }
    // addItem(ul , nome , valor)
}

function apagar() {
    tabela.innerHTML = ""
    queue.shift()    //shift remove o primeiro nome do array

    readList(queue)

};





//CRIANDO ITENS E ADICIONANDO A TABELA
/*let resultado = createItem("Gabriel"); // criei variável para salvar o retorno do create item ( ou seja o item criado)
let batata = createItem("Matheus");
addItem(tabela, resultado);  //chamado para exibir na tela 
addItem(tabela, batata); */
readList(queue, tabela);  //funçao que corre pelo array
