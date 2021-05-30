describe('Home Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia tener de titulo Gitapp', () => {
        cy.visit('/');
        cy.title().should('eq', 'Gitapp');
    });

    //Verifica que los titulos de las card utilicen la clase adecuada

    it('El titulo de la card deberia tener la clase card-header-title', () => {
        cy.visit('/');

        cy.get('p').contains('Gastos mensuales').should('have.class', 'card-header-title');
        cy.get('p').contains('Últimos movimientos').should('have.class', 'card-header-title');
        cy.get('p').contains('Balance mensual').should('have.class', 'card-header-title');

    });

    //Verifica que los div que contienen los titulos de las card, utilicen la clase adecuada

    it('El div que contiene el titulo de la card deberia tener la clase card-header', () => {
        cy.visit('/');

        cy.get('p').contains('Gastos mensuales').parent('div').should('have.class', 'card-header');
        cy.get('p').contains('Últimos movimientos').parent('div').should('have.class', 'card-header');
        cy.get('p').contains('Balance mensual').parent('div').should('have.class', 'card-header');
        
    });   
    

    it('Deberia mostrar los ultimos 5 movimientos', () => {
        cy.visit('/');

        cy.get('[data-testid=last-movements]').contains('Últimos movimientos');
        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    it('Deberia poder navegar a income', () => {
        cy.visit('/');

        cy.get('a[href*=income]')
            .contains('Ingresos')
            .click()
            .title()
            .should('eq', 'Gitapp - Ingresos');
    });
});
