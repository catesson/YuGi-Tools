// describe('Search a mikanko cards', () => {
//     it('search with a name, lv, attribute, race', () => {
//       cy.visit('/cards')
//       cy.get('input[name=searchCards]').type('mikanko')
//       cy.get('button[name=submitSearchForm]').click()
//       cy.get('h2').should('contain', 'Ha-Re the Sword Mikanko')
//       cy.get('input[name=LV]').type('3')
//       cy.get('button[name=submitSearchForm]').click()
//       cy.get('h2').should('contain', 'Ha-Re the Sword Mikanko')
//       cy.get('select[name=Attribute]').select("FIRE") 
//       cy.get('button[name=submitSearchForm]').click()
//       cy.get('h2').should('contain', 'Ha-Re the Sword Mikanko')
//       cy.get('select[name=Race]').select("Warrior") 
//       cy.get('button[name=submitSearchForm]').click()
//       cy.get('h2').should('contain', 'Ha-Re the Sword Mikanko')
//     })
//   })