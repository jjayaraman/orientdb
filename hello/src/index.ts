//  With Nodejs Legacy API to read from ODB 2.x older version
var OrientDB = require('orientjs');

const test = async () => {
  console.log('starting....');

  try {
    var server = OrientDB({
      host: 'localhost',
      port: 2424,
      username: 'root',
      password: 'orientdb',
      useToken: true,
    });

    var db = server.use({
      name: 'demodb',
      username: 'admin',
      password: 'admin',
    });

    console.log('Using Database:', db.name);

    // db.open()
    //   .then(function () {
    //     return db.query('SELECT FROM Countries LIMIT 1');
    //   })
    //   .then(function (res: any) {
    //     console.log(res);
    //     db.close().then(function () {
    //       console.log('closed');
    //     });
    //   });

    // db.class.get('Countries').then((Player: any) => {
    //   console.log(`prop :: `, Player.property);

    //   Player.property.list().then(function (properties: any) {
    //     console.log(
    //       Player.name + 'class has the following properties: ',
    //       properties
    //     );
    //   });
    // });

    db.class.list().then(function (classes: any) {
      console.log(
        'There are ' + classes.length + ' classes in the db:'
        // classes
      );
    });
  } catch (err) {
    console.log('Errrrror: ', err);
  }
};

test();
