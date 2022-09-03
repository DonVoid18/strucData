import { Nodo } from "./Nodo.js";
export class ListaDoble {
  primero;
  ultimo;
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }
  addNodo(value) {
    let nuevo = new Nodo();
    nuevo.value = value;

    if (this.primero === null) {
      this.primero = nuevo;
      this.ultimo = nuevo;
    } else {
      this.ultimo.siguiente = nuevo;
      nuevo.anterior = this.ultimo;
      this.ultimo = nuevo;
    }
  }
  inicioFin() {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.siguiente;
    }
  }
  finInicio() {
    let pivo = new Nodo();
    pivo = this.ultimo;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.anterior;
    }
  }
  buscarNodo(value) {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value === value) {
        return console.log("El nodo a sido encontrado");
      }
      pivo = pivo.siguiente;
    }
    return console.log("No se encontró el nodo");
  }
}
