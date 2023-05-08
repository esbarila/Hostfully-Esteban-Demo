import { should } from "chai";

describe("Adding a new computer", () => {

});

it("Succesfully creates a new computer", () => {
    let computerName = (Math.random() + 1).toString(36).substring(7);
    cy.visit("/");
    cy.get('[id=add]').click();
    cy.get('input[id=name]').type(computerName);
    cy.contains('Create this computer').click();
    cy.url().should('eq', 'https://computer-database.gatling.io/computers');
    cy.contains(`Computer ${computerName} has been created`);    
})
