describe('Welcome to ZAP Test App', () => {
  it('loads homepage and shows expected content', () => {
    cy.visit('/');

    // Check the main heading
    cy.contains(/welcome to zap test app/i).should('be.visible');

    // Check all expected links are visible
    cy.contains('Test XSS').should('be.visible');
    cy.contains('Test SQL Injection').should('be.visible');
    cy.contains('View Debug Info').should('be.visible');
  });
});
