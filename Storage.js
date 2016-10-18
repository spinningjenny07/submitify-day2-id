/* jslint esversion:6 */

/*
	This is our extensible storage object. We've written it so that we can
	replace any parts of it in the future with calls to file system or mongo
	without too much effort.
*/
function Storage() {
	var projects = []; // array of Project objects
	var users = []; // array of User objects

	/*
		Takes in a user object to store, and stores
		it in the users array
	*/
	this.addUser = (user, cb) => {
		console.log(user);
		users.push(user);
		if (cb) {
			cb();
		}
	};

	this.addProject = (project, cb)  => {
		// cb = callback
		projects.push(project);
		if (cb) {
			cb();
		}
	};

	this.getAllProjects = (cb) => {
		// cb = callback
		cb(projects);
	};

	this.getProjectByName = (name, cb) => {
		for (var p of projects) {
			if (p.name === name) {
				cb(p);
			}
		}
	};

	/*
		Takes in a username string and returns the user
		with that username
	*/
	this.getUserByUsername = (name, cb) => {
		console.log("test", users);
		for (var u of users) {
			console.log(u.username, name, u.username === name);
			if (u.username === name) {
				cb(u);
				return;
			}
		}
		cb(null);
	};
}

module.exports = Storage;
