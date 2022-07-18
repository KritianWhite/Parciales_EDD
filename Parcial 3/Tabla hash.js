
class HashTable {
    constructor(max_size, max_size2) {
        this.head = null;
        this.max_size = max_size;

        for (let i = 0; i < max_size; i++) {
            this.createNode(max_size2);
        }
    }

    isVoid() {
        return this.head == null;
    }

    getNodeByIndex(index) {
        let i = 0;

        let aux = this.head;
        while (aux != null) {
            if (i == index) return aux;

            i++;
            aux = aux.next;
        }
        return null;
    }

    insert(key) {
        const pos = key % this.max_size;

        const nodo = this.getNodeByIndex(pos);

        nodo.insert(key);
    }

    createNode(max_size) {
        let nodo = new HashNode(max_size);
        if (this.isVoid()) {
            this.head = nodo;
            return;
        }

        let aux = this.head;
        while (aux.next != null) {
            aux = aux.next;
        }
        aux.next = nodo;
    }

    graph() {
        let str = "digraph G {\n";
        str += "rankdir=LR;\n";
        str += "node[shape=rectangle]"

        let aux = this.head;
        let i = 0;
        while (aux != null) {
            str += "nodo" + i + ' [label="' + i + '", style=filled, color=red];\n';

            str += this.graphList(aux, i);

            i++;
            aux = aux.next;
        }
        str += "}";
        console.log(str)
        d3.select("#lienzo").graphviz().width(1350).height(1350).renderDot(str);
    }

    graphList(node, i) {
        let str = "";
        let aux = node.head;
        let j = 0;

        str += "nodo" + i + " -> nodo" + i + "C" + j + ";\n";

        while (aux != null) {
            if (aux.obj != null) {
                str +="nodo" + i + "C" + j + '[label= "' + aux.obj + '",style=filled, fillcolor=\"#76D7C4\"];\n';
            } else {
                str += "nodo" + i + "C" + j + '[label= " "];\n';
            }

            if (aux.next != null) {
                str += "nodo" + i + "C" + j + " -> nodo" + i + "C" + (j + 1) + "[dir=\"both\"];\n";
            }

            j++;
            aux = aux.next;
        }
        return str;
    }
}

class HashNode {
    constructor(max_size) {
        this.next = null;
        this.max_size = max_size;

        this.head = null;

        for (let i = 0; i < max_size; i++) {
            this.createElement();
        }
    }

    isVoid() {
        return this.head == null;
    }

    insert(obj) {
        let aux = this.head;

        while (aux != null) {
            if (aux.obj == null) {
                aux.obj = obj;
                return;
            }

            aux = aux.next;
        }
    }

    createElement() {
        let nodo = new HashElement();
        if (this.isVoid()) {
            this.head = nodo;
            return;
        }

        let aux = this.head;
        while (aux.next != null) {
            aux = aux.next;
        }
        aux.next = nodo;
    }
}

class HashElement {
    constructor() {
        this.next = null;
        this.obj = null;
    }
}

let HT = new HashTable(10, 5)
HT.insert(5)
HT.insert(10)
HT.insert(15)
HT.insert(20)
HT.insert(25)
HT.insert(30)
HT.insert(35)
HT.insert(40)
HT.insert(45)
HT.insert(50)
HT.graph()

