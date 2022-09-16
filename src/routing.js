module.exports = async function(app) {

	app.get("/", async function(res, req){
		res.render('index', {
			
		});
	});

}

