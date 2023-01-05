const OrientDBClient = require('orientjs').OrientDBClient;

const test2 = async () => {
  console.log('starting....');

  let client = await OrientDBClient.connect({
    host: 'localhost',
    port: 2424,
  });

  let session = await client.session({
    name: 'demodb',
    username: 'admin',
    password: 'admin',
  });
  // use the session
  // console.log(`session: ${session}`);`

  try {
    // let result = await session.query('select from DBInfo').all();
    // console.log(result);

    let res = await session
      .command('create class Room IF NOT EXISTS extends V')
      .one();
    console.log(`res : ${res}`);
  } catch (err) {
    console.log('Errrrror: ', err);
  }

  // close the session
  await session.close();
  console.log('Session Closed');

  await client.close();
  console.log('Client Closed');

  // OrientDBClient.connect({
  //   host: 'localhost',
  //   port: 2424,
  // })
  //   .then((client: any) => {
  //     console.log('client : ' + client);

  //     return client.close();
  //   })
  //   .then(() => {
  //     console.log('Client closed');
  //   });
};

test2();
