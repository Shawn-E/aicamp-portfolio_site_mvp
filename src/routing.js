module.exports = async function(app, cfg) {
	// Index Page
	app.get('/', async function(req, res){
		res.render('index', {
		});
	});

	// Skills Page
	app.get('/skills', async function(req, res){
		res.render('skills', {
		});
	});

	// Contact Page
	app.get('/contact', async function(req, res){
		res.render('contact', {
			
		})
	})

	// Contact Form 
	app.get('/backend/forms/submit/contact', async function(req, res){
		let name = req.body.name.replaceAll("'", "''").replaceAll('"', '""').replaceAll('`', '``');
		let email = req.body.email.replaceAll("'", "''").replaceAll('"', '""').replaceAll('`', '``');
		let subject = req.body.subject.replaceAll("'", "''").replaceAll('"', '""').replaceAll('`', '``');
		let message = req.body.message.replaceAll("'", "''").replaceAll('"', '""').replaceAll('`', '``');

		// Blacklist System
		let blacklisted_names = ["CryptoCrab"]
		let blacklisted_emails = ["s@shawnengmann.com"]
		let blacklisted_subjects = ["Free Money"]
		let blacklisted_message = ["Free Products"]

		// Checking if requests contains blacklisted items

		if(blacklisted_names.contains(name) || blacklisted_emails.contains(email) || blacklisted_subjects.contains(subject) || blacklisted_message.contains(message)){ 
			res.send("From Entry Denied")
		} else {
			res.redirect(`/contact/?submitted=${encodeURIComponent('true')}`);
		}



	});
}


