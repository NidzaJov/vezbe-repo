const { deleteUser } = require('./src/db/Database');

async function main() {
    const User = require('./src/models/User')
    const db = require('./src/db/Database');
    const me = new User({name: 'Nikola', dateOfBirth: 1981})
    await db.create(me);
    const readUser = await db.findUser(1603392402201)
    console.log(readUser);
}

main();