describe("Test e2e ",()=>{
    it("Load My page app",()=>{
        cy.visit("/")
    })
    it("Emprunt a book with succes",()=>{
        cy.visit("/Home")
        cy.wait(3000)
        cy.get('[href="/login"]').click()
        cy.url().should("include","/login")
        cy.wait(3000)
        cy.findByLabelText("Email").type("chaimahm530@gmail.com")
        cy.findByLabelText("password").type("123456789")
        cy.wait(3000)
        cy.findByTestId("login").click()
        cy.wait(3000)
        cy.get('[href="/BookPage"]').click()
        cy.get(':nth-child(4) > .col-6 > .card > .card-footer > [data-testid=Emprunt]').click()
        cy.wait(3000)
    })
    it("login with echec",()=>{
        cy.visit("/Home")
        cy.wait(3000)
        cy.get('[href="/login"]').click()
        cy.url().should("include","/login")
        cy.wait(3000)
        cy.findByLabelText("Email").type("chaimahm530@gmail.com")
        cy.findByLabelText("password").type("123456")
        cy.wait(3000)
        cy.findByTestId("login").click()
        cy.wait(3000)
        //cy.get('[href="/BookPage"]').click()
    })
    it("Emprunt book with echec",()=>{
        cy.visit("/Home")
        cy.wait(3000)
        cy.get('[href="/login"]').click()
        cy.url().should("include","/login")
        cy.wait(3000)
        cy.findByLabelText("Email").type("chaimahm530@gmail.com")
        cy.findByLabelText("password").type("123456789")
        cy.wait(3000)
        cy.findByTestId("login").click()
        cy.wait(3000)
        cy.get('[href="/BookPage"]').click()
        cy.get(':nth-child(3) > .col-6 > .card > .card-footer > [data-testid=Emprunt]').click()
        cy.wait(3000)
        cy.get(':nth-child(4) > .col-6 > .card > .card-footer > [data-testid=Emprunt]').click()
        cy.wait(3000)
        cy.get(':nth-child(5) > .col-6 > .card > .card-footer > [data-testid=Emprunt]').click()
        cy.wait(3000)
    })
   
})