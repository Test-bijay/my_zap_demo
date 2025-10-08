describe('Welcome to ZAP Test App', () => {
  it('loads homepage and shows expected content', () => {
    cy.visit('/');
    cy.contains(/welcome to zap test app/i).should('be.visible');
  });
});
