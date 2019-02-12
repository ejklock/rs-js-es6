class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push("novo todo");
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function() {
  MinhaLista.addTodo();
};

//#region REST

const usuario = {
  nome: "Klock",
  idade: 23,
  empresa: "SETEC"
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto); //imprime o "resto" do que sobrou de propriedades usando a desestruturação + operador spread
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

/*function soma (a, b){
    return a+b;
}

console.log(soma(1,3));
*/

function soma(...params) {
  console.log(params); //parametros viram array utilizando o rest operator
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4));

//#endregion

//#region SPREAD OPERATOR

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; //copia os dois arrays em um novo array

const usuario2 = { ...usuario, nome: "Evaldo Klock" }; //copia objeto e altera a propriedade nome apenas
console.log(usuario2);
//#endregion

//#region TEMPLATE LITERALS

const nome2 = "Evaldo";
const idade2 = 25;

//tradicional

console.log("Meu nome é " + nome2 + "e minha idade é" + idade2);

//usando TEMPLATE literals

console.log(`Meu nome é ${nome2} e minha idade é ${idade2}`);

//#endregion

//#region  WEBPACK

import { sum, sub } from "./funcoes";
console.log(sum(1, 2));
console.log(sub(1, 4));
//#endregion
