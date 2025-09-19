class HomePage {
  visitarPagina(){
    cy.visit('https://tiendaonline.movistar.com.ar')
  }

  buscarProducto(producto) {
    cy.get('button[aria-label="Search"]').click();
    cy.get('#search').type(producto);
    cy.get('#search_action button.action.search').should('not.be.disabled').click(); 
  } 
}

export default HomePage;