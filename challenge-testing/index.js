class CarritoCompra {

    constructor () {
        this.listaDeCompras = [];
    }

    agregarProducto (producto) {
        this.listaDeCompras.push(producto);
    }

    calcularTotal () {
        return this.listaDeCompras.reduce((acum, producto) => acum += producto.precio * producto.cantidad, 0)
    }

    aplicarDescuento (descuento) {
        const precio =this.calcularTotal();
        return precio - (precio * descuento) / 100;
    }

}

module.exports = {CarritoCompra}