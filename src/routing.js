module.exports = async function(app, cfg) {

	app.get("/", async function(req, res){
		res.render('index', {
		});
	});
}

