describe('GoRest API User CRUD Operations', () => {
    const apiUrl = 'https://gorest.co.in/public/v2/users';
    const accessToken = '4a8a0657331a8aff8a8c1a8640afb0a907a8f3a20e4f1ec534a4edbf6450756f';
    let userId;

    it('GET - Retrieve all users', () => {
      cy.request({
        method: 'GET',
        url: apiUrl,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body, null, 2));
      });
    });

    it('POST - Create a new user', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: {
          name: 'John Doe',
          gender: 'male',
          email: `johndoe${Math.floor(Math.random() * 10000)}@example.com`,
          status: 'active'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        cy.log(JSON.stringify(response.body, null, 2));

        userId = response.body.id;
      });
    });

    it('PATCH - Update an existing user', () => {
      cy.request({
        method: 'PATCH',
        url: `${apiUrl}/${userId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: {
          name: 'John Doe Updated'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('John Doe Updated');
        cy.log(JSON.stringify(response.body, null, 2));
      });
    });

    it('DELETE - Delete the user', () => {
      cy.request({
        method: 'DELETE',
        url: `${apiUrl}/${userId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(204);
  
        cy.request({
          method: 'GET',
          url: `${apiUrl}/${userId}`,
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          failOnStatusCode: false
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(404);
        });
      });
    });
  });
  