module.exports = function(app){

		const application = require('./routes/application');
		const users = require('./routes/users');
		const pricing = require('./routes/pricing');
		const appointments = require('./routes/appointments');
		const password = require('./routes/password');
		const appointmentsPortal = require('./routes/appointmentsPortal');

		app.use('/', application);
		app.use('/users', users);
		app.use('/pricing', pricing);
		app.use('/appointments', appointments);
		app.use('/password', password);
		app.use('/appointmentsPortal', appointmentsPortal);
    //other routes..
}