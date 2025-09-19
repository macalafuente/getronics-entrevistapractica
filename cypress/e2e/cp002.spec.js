import HomePage from '../pages/Homepage.js';
import Filtros from '../pages/Filtros.js';

describe('CP002 - Aplicar filtros de equipos', () => {
  it('Deberia filtrar productos por 128GB y precio entre 200K y 300K', () => {
    
    const homePage = new HomePage();
    const filtros = new Filtros();

    homePage.visitarPagina();    

    filtros.seleccionarRangoPrecios('$ 0 - $ 300.000');
    filtros.seleccionarMemoria('128');
    

    cy.get('.total-products p').should('be.visible').invoke('text').then(text => {
      const [_,mostrando, total] = text.match(/Mostrando (\d+) de (\d+) equipos/);
      cy.log(`Se muestran ${mostrando} de ${total} equipos`);
    });
  }); 
}); 