import HomePage from '../pages/Homepage.js';
import ProductPage from '../pages/ProductPage.js';

describe('CP001 - Validar cuotas en compra de equipo', () => {
  it('Debería indicar que el equipo puede ser pagado en 3 cuotas sin interés', () => {

    const homePage = new HomePage();
    const productPage = new ProductPage();

    // Buscar el equipo
    homePage.visitarPagina();
    homePage.buscarProducto('A15');
    homePage.clickBuscar();

    // Ingresar al Producto
    productPage.verificarProducto();
    
    // Verificar que sea el equipo correcto
    productPage.verificarNombre();
    
    // Verificar que se pueda pagar en 3 cuotas
    productPage.verificarCuotas();
  });
});