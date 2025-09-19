import HomePage from '../pages/Homepage.js';
import ProductPage from '../pages/ProductPage';

describe('CP003 - Validar cuotas en compra de equipo', () => {
  it('No debe existir 60 cuotas para Credicoop con Visa', () => {
    const homePage = new HomePage();
    homePage.visitarPagina();

    cy.get('div.products ol li.product-item').eq(2).find('a').click();

    const productPage = new ProductPage();
    productPage.abrirMediosPago();
    productPage.seleccionarBanco('Credicoop');
    productPage.seleccionarTarjeta('Visa');
    productPage.validarNoExisteCuota('60 cuotas');
   
    });
}); 