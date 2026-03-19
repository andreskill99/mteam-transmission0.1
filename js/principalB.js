var factura = {
  empresaOnline: {
    nombre: "KAMILA BOUTIQUE",
    direccion: "Cayambe-Ecuador",
    telefono: "0962729019",
  },

  cliente: {
    nombre: "Andres Gallegos",
    correo: "andres@gmail.com",
    telefono: "0928298390",
  },

  productos: {
    descripcion: "Ropa Masculina",stock: 58,precioU: 25,
    descripcion: "Ropa Femenina",stock: 86,precioU: 45,
    descripcion: "Ropa Niños",stock: 12,precioU: 22
  },

  detallesCompra: [
    { descripcion: "Ropa Masculina", numPrendas: 5, precioU: 22 },
  ],

  detallesFactura: {
    subTotal: 0,
    iva: 12,
    total: 0,
    formaPago: "Transferecia Bancaria"
  }
};

factura.calcularTotal = function() {
  for (var i = 0; i<this.detallesCompra.length; i++) {
    this.detallesFactura.subTotal += this.detallesCompra[i].numPrendas * this.detallesCompra[i].precioU;
  }
  var imporIva = (1 + (this.detallesFactura.iva/100));
  this.detallesFactura.total = (this.detallesFactura.subTotal * imporIva).toFixed(2);
}

factura.valorTotal = function () {
  this.calcularTotal();

  alert("SUB TOTAL = $ " + this.detallesFactura.subTotal + "\nIVA =  " + this.detallesFactura.iva +"%" + "\nEL TOTAL DE SU COMPRA ES = $ " + this.detallesFactura.total);
  alert("GRACIAS POR SU COMPRA");

}

factura.valorTotal();
