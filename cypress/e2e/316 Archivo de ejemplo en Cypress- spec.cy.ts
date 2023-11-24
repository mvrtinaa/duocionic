describe('Verificar mi aplicación', () => {

  const numero = Math.floor(Math.random() * 1000000) + 1;

  it('Verificar inicio de sesión con credenciales incorrectas', () => {
    cy.visit('/').then(() => {
      cy.get('#correo').invoke('val', '');
      cy.get('#correo').type('correo-inexistente@duocuc.cl');
      cy.get('#password').invoke('val', '');
      cy.get('#password').type('1234');
      cy.contains('Ingresar').click();
    });
  })

  it('Verificar inicio de sesión con credenciales correctas', () => {
    cy.visit('http://localhost:8100/login').then(() => {
      cy.get('#correo').invoke('val', '');
      cy.get('#correo').type('atorres@duocuc.cl');
      cy.get('#password').invoke('val', '');
      cy.get('#password').type('1234');
      cy.contains('Ingresar').click();
      cy.intercept('/home/tabs/tab1').as('route').then(() => {
        cy.get('#saludo').contains('¡Bienvenido(a) Ana Torres!');
        cy.get('#Cerrar').click();
      });
    });
  })

  it('Verificar publicación en foro', () => {
    cy.visit('http://localhost:8100/login').then(() => {
      cy.get('#correo').invoke('val', '');
      cy.get('#correo').type('atorres@duocuc.cl');
      cy.get('#password').invoke('val', '');
      cy.get('#password').type('1234');
      cy.contains('Ingresar').click();
      cy.intercept('/home/tabs/tab1').as('route').then(() => {
        
        cy.get('#saludo').contains('¡Bienvenido(a) Ana Torres!');
        
        
      });
      cy.visit('http://localhost:8100/home/tabs/tab3').then(()=>{
          cy.get('#tituloforo input').type(`Título de prueba ${numero}`, {force: true});
          cy.get('#contenidoforo textarea').type(`Contenido de prueba ${numero}`, {force: true});
          cy.contains('Guardar').click({force: true});
          cy.wait(3000);
          cy.contains('Aceptar').click();
          cy.wait(3000);
          cy.get('#Cerrar').click();
        })
    });
  })

    it(`Verificar eliminación en foro de la última publicación con el título que contiene ${numero}`, () => {
    cy.visit('http://localhost:8100/login').then(() => {
      cy.get('#correo').invoke('val', '');
      cy.get('#correo').type('atorres@duocuc.cl');
      cy.get('#password').invoke('val', '');
      cy.get('#password').type('1234');
      cy.contains('Ingresar').click();
      cy.intercept('/home/tabs/tab1').as('route').then(() => {
        cy.get('#saludo').contains('¡Bienvenido(a) Ana Torres!');
        cy.visit('http://localhost:8100/home/tabs/tab3').then(()=>{
          cy.contains('Eliminar').click({force: true});
          cy.wait(3000);
          cy.contains('Aceptar').click();
          cy.wait(3000);
          cy.contains(`Título de prueba ${numero}`).should('not.exist');
          cy.get('#Cerrar').click();
        })
      });
    });
  })
});
