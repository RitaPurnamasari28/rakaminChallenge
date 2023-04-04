describe('vixPayment', () => {

     it('Scenario 2: User want to be able to checkout after deciding to join VIX VIP Access but user not logged in yet', () => {
      cy.visit(
         "https://web-staging.rakamin.com/virtual-internship-experience/explore"
       );
      cy.viewport(1280, 720);
      cy.contains('Home Credit Indonesia').click();
      cy.wait(2000)
      cy.get('[data-cy="register-vix-button"]').click();
      cy.wait(2000)
      cy.get('p.sc-dCBTtU.hYMxcm').should('be.visible');
      cy.wait(2000)
   });

   it('Scenario 1: User want to be able to checkout after deciding to join VIX VIP Access when user already logged in',() => {
      cy.visit("https://web-staging.rakamin.com/");
      cy.viewport(1280, 720);
      cy.wait(2000)
      cy.get('button').contains('Login')
      .click();
      cy.wait(2000)
      cy.get('input[name="email"]')
      .type('rita@robot-mail.com');
      cy.wait(2000)
      cy.get('input[name="password"]')
      .type('qwertyuiop1234567890');
      cy.wait(2000)
      cy.get('[data-cy="login-submit-button"]')
      .click();
      cy.wait(2000)
      cy.contains('Mulai Karir Digitalmu dalam Hitungan Bulan atau Dapatkan Refund 100%')
      .should('be.visible');
      cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore");
      cy.viewport(1280, 720)
      cy.wait(2000)
      cy.get('button').contains('OK')
      .click();
      cy.wait(2000)
      cy.contains('Home Credit Indonesia')
      .click();
      cy.wait(2000)
      cy.get('[data-cy="register-vix-button"]')
      .click();
      cy.wait(2000)
      cy.contains('Mohon untuk isi aplikasi dengan data yang benar dan sesuai. Seluruh data yang disubmit akan menjadi pertimbangan dalam proses seleksi Virtual Internship.')
      .should('be.visible');
      cy.wait(2000)
      cy.get('input[name="phone_number"]')
      .type('6281254932128');
      cy.wait(2000)
      cy.get('input[name="linkedin_url"]')
      .type('https://www.linkedin.com/in/ritapurnama/');
      cy.wait(2000)
      cy.get('[data-cy="vix-info-source-option-1"]')
      .click();
      cy.wait(2000)
      cy.get('[data-cy="agreement-checkbox"]')
      .click();
      cy.wait(2000)
      cy.get('[data-cy="vix-form-submit-button"]')
      .click();
      cy.wait(2000)
      cy.contains('Lanjutkan untuk mendaftar Program')
      .should('be.visible');
      cy.wait(2000)
      cy.get('button').contains('Lanjutkan')
      .click();
      cy.wait(2000)
      cy.get('[data-cy="vip-access-checkbox"]')
      .click();
      cy.wait(2000)
      cy.get('button').contains('Lanjutkan ke Pembayaran')
      .click();
      cy.wait(2000)


   });

   

});