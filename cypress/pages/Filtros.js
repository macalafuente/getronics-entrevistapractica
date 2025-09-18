class Filtros {
  seleccionarRangoPrecios(rango) {
    cy.get('div.filter-item').contains('Precio').click({ force: true });

    cy.get('li.aggregations.item').contains(rango).click({ force: true });
  }

  seleccionarMemoria(memoria) {
    cy.get('div.filter-item.memory').contains('Memoria interna').click({ force: true });
    cy.get('li.aggregations.item').contains(memoria).click({ force: true });   
  }
}

export default Filtros;