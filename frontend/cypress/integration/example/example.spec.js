describe('this is an exapmle', ()=> {
    it('visit web app and find title', ()=>{
        cy.visit('http://localhost:8080');
        cy.get('h1')
        cy.get('button').click();
    })
})