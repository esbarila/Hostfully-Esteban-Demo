import { should } from "chai";

describe("Adding a new computer", () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("Succesfully creates a new computer", () => {
        let computerName = (Math.random() + 1).toString(36).substring(7);
        cy.task('setUserData', computerName);
        cy.get('[id=add]').click();
        cy.get('input[id=name]').type(computerName);
        cy.contains('Create this computer').click();
        cy.url().should('eq', 'https://computer-database.gatling.io/computers');
        cy.contains(`Computer ${computerName} has been created`);
        cy.get('[id=add]').should('be.visible');
    })

    it("Checks the computer was effectively created" , () => {
        // This test is meant to fail currently Computer-database has a bug.
        cy.task('getUserData').then((userData) => {
            cy.get('[id=searchbox]').type(userData as string);    
        })
        cy.get('[id=searchsubmit]').click();
        cy.get('[id=main]').should('not.contain.text', 'Nothing to display');
    })

    it("Checks form validation while adding a computer", () => {
        cy.get('[id=add]').click();
        cy.get('[id=introduced]').type('10-12-1999');
        cy.get('[id=discontinued]').type('12-10-2002');
        cy.contains('Create this computer').click();
        cy.contains('Failed to refine type : Predicate isEmpty() did not fail.');
        cy.contains('Failed to decode date');
    })

    it("Makes use of every field in the add computer form", () => {
        cy.get('[id=add]').click();
        cy.get('input[id=name]').type(`Ultron ${Math.floor(Math.random() * 10000)}`);
        cy.get('[id=introduced]').type('1999-02-03');
        cy.get('[id=discontinued]').type('2003-06-12');
        cy.get('select[name=company]').select('RCA');
        cy.contains('Create this computer').click();
        cy.contains(/Computer Ultron\s\d\d\d\d\shas been created/);
    })

    it("User ceases thier intention to create a computer", () => {
        cy.get('[id=add]').click();
        cy.contains('Cancel').click()
        cy.url().should('eq', 'https://computer-database.gatling.io/computers');
    })
});
