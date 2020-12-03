const db = require("../db-connection");
const LIMIT = 10;
const controllers = {
	getAll: (req, res) => {
		const sql = `SELECT * FROM tracks`;

		db.all(sql, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}

			res.json(rows);
		});
	},
	countAll: (req, res) => {
		const query = "SELECT COUNT(*) AS qty FROM Tracks";
		db.get(query, (err, row) => {
			if (err) {
				console.error("Error from countAll Artists: ", err);
				res.status(400).json({ error: err.message });
				return;
			}
			res.json(row.qty);
		});
	},
	getPageByNo: (req, res) => {
		const page = req.params.page - 1;
		const sql = "SELECT  * FROM Tracks LIMIT 10 OFFSET ?";

		db.all(sql, page * LIMIT, (err, rows) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}
			res.json(rows);
		});
	},
	getOne: (req, res) => {},
	create: (req, res) => {
		// read row data from body
	},
	update: (req, res) => {
		// read row data from body
	},
	delete: (req, res) => {},
};

module.exports = controllers;
