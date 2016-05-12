module.exports = function(app, express, jerts, db, connectDB) {
	var jertsRouter = express.Router();

	jertsRouter.route('/')
		.get(function(req, res) {
			jerts.find({}).toArray(function(err, docs) {
        		if (err) res.send(err);
        		res.json(docs);
			});
		})
		.post(function(req, res) {
			var newJert;

			console.log(req.body);
			if (req.body.name && req.body.description && req.body.url) {
				newjert = {
					name: req.body.name,
					description: req.body.description,
					url: req.body.url
				};

				jerts.insert(newjert, function(err, result) {
					if (err) res.send(err);
					console.log("new Jert inserted");
				});

				db.close();
        		connectDB();
			}

		});

	jertsRouter.route('/:jert_id')
		.get(function(req, res) {

		});

	return jertsRouter;
};
