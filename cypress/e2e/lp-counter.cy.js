describe("Delete and restart", () => {
  it('Click on button DELETE', () => {
    cy.visit("/lp-counter");
    cy.get('[data-test-id="BtnCalculator9"]').click();
    cy.get('[data-test-id="BtnCalculator0"]').click();
    cy.get('[data-test-id="BtnCalculatorDelete"]').click();
    cy.get('[data-test-id="inputCalculator"]').should("contain", '9')
  });
});

describe("LP Counter test Add and Sub", () => {
  it("add Lp 1230 on payer A", () => {
    cy.visit("/lp-counter");
    cy.get('[data-test-id="lp Player A"]').click().should("contain", "8000")
    
    cy.get('[data-test-id="BtnCalculator1"]').click();
    cy.get('[data-test-id="BtnCalculator2"]').click();
    cy.get('[data-test-id="BtnCalculator3"]').click();
    cy.get('[data-test-id="BtnCalculator0"]').click();
    cy.get('[data-test-id="bigBtnCalculator+"]').click();
    cy.get('[data-test-id="lp Player A"]')
      .should("contain", "9230")
    cy.get('[data-test-id="inputCalculator"]').should("contain", '');
  });
  it("add Lp 4500 on payer B", () => {
    cy.visit("/lp-counter");
    cy.get('[data-test-id="lp Player B"]').click().should("contain", "8000")
    
    cy.get('[data-test-id="BtnCalculator4"]').click();
    cy.get('[data-test-id="BtnCalculator5"]').click();
    cy.get('[data-test-id="BtnCalculator00"]').click();
    cy.get('[data-test-id="bigBtnCalculator+"]').click();
    cy.get('[data-test-id="lp Player B"]')
      .should("contain", "12500")
    cy.get('[data-test-id="inputCalculator"]').should("contain", '');
  });
  it("sub Lp 6000 on payer A", () => {
    cy.visit("/lp-counter");
    cy.get('[data-test-id="lp Player A"]').click().should("contain", "8000")
    
    cy.get('[data-test-id="BtnCalculator6"]').click();
    cy.get('[data-test-id="BtnCalculator000"]').click();
    cy.get('[data-test-id="bigBtnCalculator-"]').click();
    cy.get('[data-test-id="lp Player A"]')
      .should("contain", "2000")
    cy.get('[data-test-id="inputCalculator"]').should("contain", '');
  });
  it("sub Lp 7890 on payer B", () => {
    cy.visit("/lp-counter");
    cy.get('[data-test-id="lp Player B"]').click().should("contain", "8000")
    
    cy.get('[data-test-id="BtnCalculator7"]').click();
    cy.get('[data-test-id="BtnCalculator8"]').click();
    cy.get('[data-test-id="BtnCalculator9"]').click();
    cy.get('[data-test-id="BtnCalculator0"]').click();
    cy.get('[data-test-id="bigBtnCalculator-"]').click();
    cy.get('[data-test-id="lp Player B"]')
      .should("contain", "110")
    cy.get('[data-test-id="inputCalculator"]').should("contain", '');
  });
 
});
