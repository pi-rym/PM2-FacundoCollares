const {CarritoCompra} = require("../index");

let nuevoCarrito;
let arrayObjetos;

beforeEach(() => {
    arrayObjetos = [
        {
            producto:'guitarra',
            precio: 100,
            cantidad: 2
        },
        {
            producto:'piano',
            precio: 200,
            cantidad: 3
        },
        {
            producto:'bajo',
            precio: 300,
            cantidad: 2
        },
        {
            producto:'batería',
            precio: 400,
            cantidad: 2
        }
    ]

    nuevoCarrito = new CarritoCompra();
} )

describe ('Class CarritoCompra', () => {
    it ('Comprobar si la clase CarritoCompra existe', () => {
        expect(typeof CarritoCompra).toBe('function');
        expect(CarritoCompra).toBeDefined();
    })

    it ('Puedo crear una nueva instancia a la clase', () => {
        const nuevoCarrito = new CarritoCompra();
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra);
    })
})

describe ('constructor', () => {
    it('El constructor existe', () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined();
    })

    it('El constructor inicia como un array vacío', () => {
        const nuevoCarrito = new CarritoCompra();
        expect(nuevoCarrito.listaDeCompras).toEqual([]);
    })
})

describe('agregarProducto', () => {
    it('El método agregarProducto existe', () => {
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
    })

    it('agregarProducto recibe un objeto producto y lo agrega al carrito', () => {
        const nuevoProducto = {
            producto: 'guitarra',
            precio: 100,
            cantidad: 3
        }
        const nuevoCarrito = new CarritoCompra();
        nuevoCarrito.agregarProducto(nuevoProducto);
        expect(nuevoCarrito.listaDeCompras.length).toBe(1);
    })
})

describe('calcularTotal', () => {
    it('El método calcularTotal existe', () => {
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    })

    it('Recibe productos objetos y los agrega al carrito', () => {
        
        arrayObjetos.forEach((producto) => nuevoCarrito.agregarProducto(producto));

        expect(nuevoCarrito.listaDeCompras).toEqual(arrayObjetos);
        expect(nuevoCarrito.listaDeCompras.length).toBe(arrayObjetos.length);
    })

    it('Calcular el total de la compra teniendo en cuenta la cantidad y el precio', () => {
        arrayObjetos.forEach((producto) => nuevoCarrito.agregarProducto(producto));

        expect(nuevoCarrito.calcularTotal()).toBe(2200);
    })
})


describe('aplicarDescuento', () => {
    it('El método aplicarDescuento existe', () => {
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    })

    it('Aplica un descuento según el porcentaje indicado', () => {
        arrayObjetos.forEach((producto) => nuevoCarrito.agregarProducto(producto));

        expect(nuevoCarrito.aplicarDescuento(0)).toBe(2200);
        expect(nuevoCarrito.aplicarDescuento(25)).toBe(1650);
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0);
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(1100);

    })
})

