//  With Nodejs Legacy API to read from ODB 2.x older version
var OrientDB = require('orientjs');

export default interface ScheduledAccess {
  cameraId?: string;
  companyId?: string;
  title?: string;
}

//----------------------------------------------------------------

const bulk = async () => {
  console.log('starting....');

  var server = OrientDB({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'admin',
    useToken: true,
  });

  var db = server.use({
    name: 'jaydb',
    username: 'admin',
    password: 'admin',
  });

  try {
    const scheduledAccessList: Array<ScheduledAccess> = [
      {
        companyId: 'company1',
        cameraId: 'camera1',
        title: 'title1',
      },
      {
        companyId: 'company2',
        cameraId: 'camera2',
        title: 'title2',
      },
    ];

    console.log('Using Database:', db.name);

    // for (const scheduledAccess of scheduledAccessList) {
    //   db.let('player', function (p: any) {
    //     p.create('vertex', 'ScheduledAccess').set(scheduledAccess);
    //   });
    // }

    // var trx = await db
    //   .let('player', function (p: any) {
    //     p.create('vertex', 'ScheduledAccess').set({
    //       title: 'title2',
    //     });
    //   })
    //   .let('player', function (p: any) {
    //     p.create('vertex', 'ScheduledAccess').set({
    //       title: 'title3',
    //     });
    //   })
    //   .commit()
    //   .return('$edge')
    //   .all()
    //   .then(function (results: any) {
    //     console.log(`Results: `, results);
    //   });

    const titles = ['title21', 'title31'];
    // const fxs = [];

    // for (const title of titles) {
    //   const x = (p: any) => {
    //     p.create('vertex', 'ScheduledAccess').set(title);
    //   };
    //   fxs.push(x);
    // }

    for (const scheduledAccess of scheduledAccessList) {
      await db
        .let('player', (p: any) => {
          p.create('vertex', 'ScheduledAccess').set(scheduledAccess);
        })
        .commit()
        .return('$edge')
        .all()
        .then(function (results: any) {
          console.log(`Results: `, results);
        });
    }
  } catch (err) {
    console.log('Errrrror: ', err);
  }
  process.exit();
};

bulk();
