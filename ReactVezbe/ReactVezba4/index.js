const { MongoClient } = require('mongodb');

async function main() {
    const client = new MongoClient(
        'mongodb://sedcuser:sedcpass@localhost:27017/main?authSource=main',
        { useUnifiedTopology: true, } 
    );
    try {
        const connection = await client.connect();
        const db = connection.db('main');
        await db.dropCollection('users');
        const usersCollection = db.collection('users');

        await usersCollection.insertMany([
            { name: 'John Doe', email: 'john@doe.com'},
            { name: 'Jane Doe', email: 'jane@doe.com' },
            { name: 'Mark Doe', email: 'mark@doe.com' },
            { name: 'Kelly Doe', email: 'kelly@doe.com' }
        ]);

        await usersCollection.updateOne({ email: 'john@doe.com'}, {
          $set: { name: 'John Mitchel Doe'}
        });

        await usersCollection.updateOne({ email: 'john@doe.com'}, {
            $set: { age: 50 }
        });

        await usersCollection.updateOne({ email: 'john@doe' }, {
            $unset: { age: null }
        });

        await usersCollection.updateOne({email: 'john@doe.com' }, {
            $push: {
                colors: {
                    $each: ['red', 'green', 'blue']
                }
            }
        });

        await usersCollection.updateOne({ email: 'john@doe.com' }, {
            $pull: {
                colors: {
                    $in: ['red', 'green']
                }
            }
        })

        const cursor = usersCollection.find({}, {limit: 4, sort: { email: 1}});

        while(await cursor.hasNext()) {
            const user = await cursor.next();
            console.log('User: ', user.name)
        };

        await cursor.forEach(user => {
            console.log('User: ', user.name)
        })

        const users = await cursor.toArray();
        console.log('Users array: ', users);

        await connection.close();
    } catch(e) {
        console.log('An error has occured', e);
    }
}

main();