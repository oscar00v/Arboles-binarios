class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(currentNode, newNode) {
      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this._insertNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this._insertNode(currentNode.right, newNode);
        }
      }
    }
  }
  


  // Función que muestra los nodos en el nivel n de un árbol binario
function mostrarNodosEnNivel(node, nivel) {
    // Si el nodo es nulo, no hay nada que mostrar
    if (node === null) {
      return;
    }
  
    // Si el nivel es 0, hemos llegado al nivel deseado, mostrar el nodo
    if (nivel === 0) {
      console.log(node.value);
    } else {
      // Recorrer recursivamente los subárboles disminuyendo el nivel
      mostrarNodosEnNivel(node.left, nivel - 1);
      mostrarNodosEnNivel(node.right, nivel - 1);
    }
  }
  


  // Crear el árbol binario
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

// Mostrar los nodos del nivel 2
console.log("Nodos en el nivel 2:");
mostrarNodosEnNivel(tree.root, 2); // Imprime: 3, 7, 12, 17

// Mostrar los nodos del nivel 1
console.log("Nodos en el nivel 1:");
mostrarNodosEnNivel(tree.root, 1); // Imprime: 5, 15





////////////////////////////////////////////////////////////////////////////////////

console.log("!!!!!!!!!!!!!!!!!!!!!Eje 4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

class TreeNode {
    constructor(data) {
      this.data = data;
      this.leftChild = null;
      this.rightChild = null;
    }
  }
  
  class BinaryTree2 {
    constructor() {
      this.rootNode = null;
    }
  
    addNode(data) {
      const newTreeNode = new TreeNode(data);
      if (this.rootNode === null) {
        this.rootNode = newTreeNode;
      } else {
        this._addNodeRecursive(this.rootNode, newTreeNode);
      }
    }
  
    _addNodeRecursive(currentNode, newTreeNode) {
      if (newTreeNode.data < currentNode.data) {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = newTreeNode;
        } else {
          this._addNodeRecursive(currentNode.leftChild, newTreeNode);
        }
      } else {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = newTreeNode;
        } else {
          this._addNodeRecursive(currentNode.rightChild, newTreeNode);
        }
      }
    }
  }
  

  // Función que cuenta las hojas de un árbol binario
function contarHojas(node) {
    // Si el nodo es nulo, no hay hojas
    if (node === null) {
      return 0;
    }
  
    // Si el nodo no tiene hijos, es una hoja
    if (node.leftChild === null && node.rightChild === null) {
      return 1;
    }
  
    // Recorrer recursivamente los hijos izquierdo y derecho
    return contarHojas(node.leftChild) + contarHojas(node.rightChild);
  }
  

  // Crear el árbol binario
const binaryTree2 = new BinaryTree2();
binaryTree2.addNode(10);
binaryTree2.addNode(5);
binaryTree2.addNode(15);
binaryTree2.addNode(3);
binaryTree2.addNode(7);
binaryTree2.addNode(12);
binaryTree2.addNode(17);

// Contar el número de hojas en el árbol
const numeroDeHojas = contarHojas(binaryTree2.rootNode);
console.log("Número de hojas en el árbol:", numeroDeHojas); // Imprime: 4
