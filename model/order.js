class Order {
  constructor(product, unitPrice, quantity) {
    this.product = product;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }

  //getTotalPrice(){
  //  return this.unitPrice * this.quantity;
  //}

    get totalPrice(){
        return this.unitPrice * this.quantity;
    }
    //qui ho usato get, ma è uguale a quella sopra commentata

    toString(){

        const card = 
            `Product:  ${this.product}
        Prezzo Unitario: ${this.unitPrice.toFixed(2)}€   //il $ dice che tutto quello che c'è nella graffa andrà sostituito dalla sua cosa. Così, per esempio, la prima riga sarà come aver scritto this.product compreso tra due +
        Quantità: ${this.quantity}€
        Prezzo totale: ${this.totalPrice.toFixed(2)}€;
        `;
        return card;

    }

}
