class HomePage {
  visitarPagina(){
    cy.visit('https://tiendaonline.movistar.com.ar')
  }

  buscarProducto(producto) {
    cy.get('button[aria-label="Search"]').should('not.be.disabled').click();
    cy.get('#search').should('be.visible').type(producto);
  } 

  clickBuscar(){
    cy.get('button.action.search[aria-label="Search"]').click();
  } 
}

export default HomePage;