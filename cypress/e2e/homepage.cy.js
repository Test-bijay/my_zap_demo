describe('Welcome to ZAP Test App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads homepage and shows expected content', () => {
    // Check the main heading
    cy.contains(/welcome to zap test app/i).should('be.visible');

    // Check that all expected links are visible
    cy.contains('Test XSS').should('be.visible');
    cy.contains('Test SQL Injection').should('be.visible');
    cy.contains('View Debug Info').should('be.visible');
  });

  it('navigates to Test XSS and shows expected output', () => {
    cy.contains('Test XSS').click();
    cy.url().should('include', '/xss');
    cy.contains(/xss test/i).should('be.visible');
  });

  it('navigates to Test SQL Injection and shows expected output', () => {
    cy.contains('Test SQL Injection').click();
    cy.url().should('include', '/sql-injection');
    cy.contains(/sql injection/i).should('be.visible');

  it('navigates to View Debug Info and shows expected output', () => {
    cy.contains('View Debug Info').click();
    cy.url().should('include', '/debug');
    cy.contains(/debug info/i).should('be.visible');
  });
});
