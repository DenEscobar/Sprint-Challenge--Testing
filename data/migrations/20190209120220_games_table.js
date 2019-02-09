
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', table =>{
        table.string('name', 255).notNullable();
        table.string('genre', 255).notNullable();
        table.date('releaseYear');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games')
};
