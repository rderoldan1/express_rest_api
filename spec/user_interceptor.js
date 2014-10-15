var nock = require('nock');
var interceptor  = nock('http://localhost:3000')
            .get('/api/users')
            .reply(200, {
              users:
              [
                {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  userName: 'rderoldan1',
                  firstName: 'rderoldan1',
                  lastName: 'rderoldan1',
                  email: 'pedro.teixeira@gmail.com'    
                },
                {
                  _id: '123ABCD',
                  _rev: '946B7D1C',
                  userName: 'rderoldan1',
                  firstName: 'rderoldan1',
                  lastName: 'rderoldan1',
                  email: 'pedro.teixeira@gmail.com'    
                }
              ]
            })
            .get('/api/users/123ABC')
            .reply(200, {
            	  _id: '123ABC',
                  _rev: '946B7D1C',
                  userName: 'rderoldan1',
                  firstName: 'rderoldan1',
                  lastName: 'rderoldan1',
                  email: 'pedro.teixeira@gmail.com'    	
            })
            .post('/api/users', {
              key: 'value' 
            })
            .reply(200, {message: "User Added"})
            .put('/api/users/123ABC', {
              key: 'value' 
            })
            .reply(200, {message: "User updated"})