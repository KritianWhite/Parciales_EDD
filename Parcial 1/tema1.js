class Nodo {
    constructor(numero){
        this.numero = numero;
        this.siguiente = null;
    }
}

class Pila{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(numero){
        var nuevoNodo = new Nodo(numero);
        if(this.head == null){
            this.head = nuevoNodo;
        }else{
            nuevoNodo.siguiente = this.head;
            this.head = nuevoNodo;
            
        }
    }
    remove(){
        var remove = this.head;
        this.head = this.head.siguiente;
        return remove.numero;
    }
}

function tema1(a,b){
    var cola = new Pila();
    var contador =1;
    cola.add(a);
    var removed = null;
    var iguales = false;
    while(!iguales){
        removed = cola.remove();
        
        if(removed === b){
            iguales = true;
        }else{
            cola.add(removed-1);
            contador++;
            cola.add(removed+1);
            contador++;
        }
    }
    return contador;
}


console.log(tema1(2,5));