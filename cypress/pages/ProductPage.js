class ProductPage {
  
  entrarProducto(nombre) {
    cy.get('.product-item .name').contains(nombre).closest('a').click();
  }

  verificarNombre(nombre) {
    cy.get('span.base[data-ui-id="page-title-wrapper"]').should('be.visible').and('contain.text', nombre);
  }
  
  verificarCuotas(cantidad) {
    cy.contains(cantidad).should('exist');
  } 

  abrirMediosPago() {
    cy.get('#open-installments-modal').click();
  }

  seleccionarBanco(banco) {
    cy.get('#inputbank').type(banco);
    cy.get('#selectBank ul li div').contains(banco).click();
    }

  seleccionarTarjeta(tarjeta) {
    cy.get('#inputCard').type(tarjeta);
    cy.get('#selectCardByBank ul li span').contains(tarjeta).click();
  }
  
  validarNoExisteCuota(cuotas) {
    cy.get('#body-installments-table').should('not.contain', cuotas);
  }
} 

export default ProductPage;
