exports.up = function(knex, Promise) {
	return knex.schema.createTable('notes', function(tbl) {
		tbl.increments();
		tbl.string('title', 128).notNullable();
		tbl.text('content');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('notes');
};
