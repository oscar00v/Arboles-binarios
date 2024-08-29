console.log("Eje 2:")



class Nodo2 {
    constructor(valor) {
      this.valor = valor;
      this.izquierdo = null;
      this.derecho = null;
    }
  }
  
  class ArbolBinario2 {
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

  
  // Función que copia un árbol binario
function copiarArbol(nodo) {
    // Si el nodo es nulo, retorna nulo
    if (nodo === null) {
      return null;
    }
  
    // Crear un nuevo nodo copiando el valor del nodo actual
    const nuevoNodo = new Nodo2(nodo.valor);
  
    // Copiar recursivamente los nodos izquierdo y derecho
    nuevoNodo.izquierdo = copiarArbol(nodo.izquierdo);
    nuevoNodo.derecho = copiarArbol(nodo.derecho);
  
    // Retornar el nuevo nodo copiado
    return nuevoNodo;
  }
  

  // Crear el árbol binario A
const arbolA1 = new ArbolBinario2();
arbolA1.insertar(10);
arbolA1.insertar(5);
arbolA1.insertar(15);
arbolA1.insertar(3);
arbolA1.insertar(7);

// Copiar el árbol A en un nuevo árbol B
const arbolB1 = new ArbolBinario2();
arbolB1.raiz = copiarArbol(arbolA1.raiz);

// Función para imprimir el árbol en orden (para verificar la copia)
function inOrden(nodo) {
  if (nodo !== null) {
    inOrden(nodo.izquierdo);
    console.log(nodo.valor);
    inOrden(nodo.derecho);
  }
}

// Verificar que ambos árboles tengan los mismos valores
console.log("Árbol A:");
inOrden(arbolA1.raiz); // Imprime: 3, 5, 7, 10, 15

console.log("Árbol B:");
inOrden(arbolB1.raiz); // Imprime: 3, 5, 7, 10, 15
