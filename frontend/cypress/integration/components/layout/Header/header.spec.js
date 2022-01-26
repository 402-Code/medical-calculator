describe('Header component test', ()=> {
   it('open sidebar menu', ()=>{
       cy.visit('http://localhost:8080')
       cy.get('.MuiButtonBase-root').click();
       cy.get('.MuiSwitch-switchBase').last().click();
       cy.wait(1000);
       cy.get('.MuiBackdrop-root').last().click();
   })
})
