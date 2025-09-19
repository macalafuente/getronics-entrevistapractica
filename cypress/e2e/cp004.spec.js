// CP004 - Navegar a Ofertas y ordenar por precio, luego seleccionar el de menor precio.

import HomePage from '../pages/Homepage.js';
import ProductPage from '../pages/ProductPage.js';

describe('CP004 - Navegar a Ofertas y ordenar por precio', () => {
  it('Debería encontrar el producto de menor costo dentro de la seccion ofertas', () => {
    const homePage = new HomePage(); 
    const productPage = new ProductPage();

    homePage.visitarPagina();

    // Entrar a la sección "Ofertas"
    cy.get('div.item.Ofertas a').click();

    // Ordenar por precio (menor a mayor)
    cy.get('#sorter').select('low_to_high', { force: true });


    // Obtenemos el Nombre del primer producto y entramos a la página
    cy.get('.product-item .name').first().invoke('text').then((nombreProducto) => {
      productPage.entrarProducto(nombreProducto.trim());
    });
  });
});