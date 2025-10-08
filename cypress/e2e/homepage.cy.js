describe('Welcome to ZAP Test App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads homepage and shows expected content', () => {
    cy.contains(/welcome to zap test app/i).should('be.visible');

    cy.contains('Test XSS').should('be.visible');
    cy.contains('Test SQL Injection').should('be.visible');
    cy.contains('View Debug Info').should('be.visible');
  });

  it('navigates to Test XSS and shows expected output', () => {
    // If the app executes the payload and shows an alert:
    cy.on('window:alert', (text) => {
      expect(text).to.contain('XSS');
    });

    cy.contains('Test XSS').click();
    cy.url().should('include', '/xss?name=');
  });

  it('navigates to Test SQL Injection and shows expected output', () => {
    cy.intercept('GET', '**/login**').as('loginAttempt');
    cy.contains('Test SQL Injection').click();
    cy.wait('@loginAttempt').its('request.url').should('include', "user=%27%20OR%20%271%27=%271");
    cy.url().should('include', '/login');
  });

  it('navigates to View Debug Info and shows expected output', () => {
    cy.contains('View Debug Info').click();
    cy.url().should('include', '/debug');
    cy.contains(/debug info/i).should('be.visible');
  });
});
