describe('Zap Demo App', () => {
  it('loads homepage and shows expected content', () => {
    cy.visit('/');
    cy.contains('Zap'); // adjust based on visible text on your homepage
  });
});
