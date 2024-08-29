class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierdo = null;
      this.derecho = null;
    }
  }
  
  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }
  
    insertar(valor) {
      const nuevoNodo = new Nodo(valor);
      if (this.raiz === null) {
        this.raiz = nuevoNodo;
      } else {
        this._insertarNodo(this.raiz, nuevoNodo);
      }
    }
  
    _insertarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.valor < nodo.valor) {
        if (nodo.izquierdo === null) {
          nodo.izquierdo = nuevoNodo;
        } else {
          this._insertarNodo(nodo.izquierdo, nuevoNodo);
        }
      } else {
        if (nodo.derecho === null) {
          nodo.derecho = nuevoNodo;
        } else {
          this._insertarNodo(nodo.derecho, nuevoNodo);
        }
      }
    }
  }
  
  // Función que determina si dos árboles binarios son idénticos
function sonIdenticos(nodoA, nodoB) {
    // console.log(nodoA,nodoB);
    // Si ambos nodos son nulos, son idénticos en esta rama
    if (nodoA === null && nodoB === null) {
      return true;
    }
  
    // Si solo uno es nulo, no son idénticos
    if (nodoA === null || nodoB === null) {
      return false;
    }
  
    // Comparar los valores de los nodos actuales y recursivamente sus hijos
    return (
      nodoA.valor === nodoB.valor &&
      sonIdenticos(nodoA.izquierdo, nodoB.izquierdo) &&
      sonIdenticos(nodoA.derecho, nodoB.derecho)
    );
  }
  


  // Crear dos árboles binarios
const arbolA = new ArbolBinario();
arbolA.insertar(10);
arbolA.insertar(5);
arbolA.insertar(15);

// console.log(arbolA);

const arbolB = new ArbolBinario();
arbolB.insertar(10);
arbolB.insertar(5);
arbolB.insertar(15);

// console.log(arbolB);

// Verificar si los árboles son idénticos
console.log(sonIdenticos(arbolA.raiz, arbolB.raiz)); // true

// Cambiar los árboles para que no sean idénticos
console.log("Se inserto un nodo en B")
arbolB.insertar(20);

// Verificar nuevamente
console.log(sonIdenticos(arbolA.raiz, arbolB.raiz)); // false
