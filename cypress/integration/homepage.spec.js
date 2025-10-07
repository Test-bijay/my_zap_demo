describe('Zap Demo App - Homepage', () => {
  it('loads the homepage and checks the title', () => {
    cy.visit('/');
    cy.title().should('include', 'Zap'); // adjust depending on your app title
  });

  it('has a visible header or call to action', () => {
    cy.visit('/');
    cy.contains('Zap'); // update with actual text you expect
  });
});

