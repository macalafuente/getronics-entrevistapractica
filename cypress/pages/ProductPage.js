class ProductPage {
  
  verificarProducto() {
    cy.get('a.product-link[href*="samsung-galaxy-a15-4g.html"]').click();
  }

  verificarNombre() {
    cy.get('span.base[data-ui-id="page-title-wrapper"]').should('be.visible').and('contain.text', 'A15');
  }
  
  verificarCuotas() {
    cy.contains('3 cuotas sin interés').should('exist');
  } 

} 

export default ProductPage;
