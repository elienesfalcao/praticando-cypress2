describe('Acessando o site demoaut', () => {
  it('Clicando em cada card', () => {
    cy.visit('http://ww1.demoaut.com/')

    cy.get('#master-1').click()
    cy.visit('http://ww1.demoaut.com/caf/?ses=Y3JlPTE2ODA1MjIxNTAmdGNpZD13dzEuZGVtb2F1dC5jb202NDJhYmJhNjI1ZTEwNC45OTA3MDgyMSZ0YXNrPXNlYXJjaCZkb21haW49ZGVtb2F1dC5jb20mYV9pZD0zJnNlc3Npb249bUppTEh6Nk9XYzZlZHVKdGVTVlM=&query=Demo%20Software&afdToken=ChMIgrbN7tCN_gIVXK-VAh0rfw_6EmwBJ3TYYSgezpJEJKmsASws72mD4ci6_YqtdIGJ8gAs2n6B7lzHWxvBpBCmrPcm3Akp3qIl57irq-moXlFuhkr1BccawF9fqhGl1D8dgihoQytzljRCAsVGM43mB6I4jD7DQsQDztzTVOy3HXs&nb=0&rurl=https%3A%2F%2Freiload-88128.medium.com%2Ftop-10-sites-para-praticar-automa%25C3%25A7%25C3%25A3o-de-testes-web-1f2f4e54ff80&nm=50&nx=98&ny=80&is=493x598&clkt=190')
    cy.visit('https://br.seekweb.com/ws?q=conta%20demo%20trader&asid=sw_co_gc10_03&mt=b&nw=s&de=c&ap=&ac=27862&cid=19787027641&aid=145161736245&locale=pt_BR&ch=2299&gclid=EAIaIQobChMI8bWE1ryO_gIVY-hcCh05TQWPEAAYASAAEgIdxfD_BwE'
    )
  })
})