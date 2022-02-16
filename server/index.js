//Require app module
const app = require('./app');

port = 3001;

//Listen on port
app.set('port',process.env.PORT || port)

const server = app.listen(app.get('port'));
console.log('Server on port: ',app.get('port'));