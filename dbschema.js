let db = {
  users: [
    {
      userId: 'NauDCDAfVxdglV6naELQ84GINyE2',
      bio: 'This is Devinda',
      website: 'http://naveen.com',
      location: 'Kandy, Sri Lanka',
      email: 'devindarajasekara990@gmail.com',
      handle: 'Devinda',
      createdAt: '2020-05-21T09:39:12.647Z',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/37693031746.jpg?alt=media'
    }
  ],
  screams: [
    {
      screamId: 'Uqy37bzlgS35gORR2O15',
      body: 'asasas',
      userHandle: 'cccc',
      createdAt: '2020-06-17T15:48:27.276Z',
      commentCount: 0,
      likeCount: 2,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/no-img.png?alt=media'
    },
    {
      screamId: 'F8CUFgmJzTC6yQPQCuzI',
      body: 'Hello',
      userHandle: 'asasasas',
      createdAt: '2020-06-17T15:43:00.759Z',
      commentCount: 2,
      likeCount: 3,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/no-img.png?alt=media'
    },
    {
      screamId: '40oa4FARwoM1xSYINqNI',
      body: 'Hey!!',
      userHandle: 'Kande',
      createdAt: '2020-06-17T08:59:04.460Z',
      commentCount: 2,
      likeCount: 2,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/no-img.png?alt=media'
    },
    {
      screamId: 'xot5u1ZRLOUSrZy6NsDR',
      body: 'Happy Birthday Devinda',
      userHandle: 'Lahiru',
      createdAt: '2020-06-13T05:18:19.908Z',
      commentCount: 0,
      likeCount: 3,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/51510851716.jpg?alt=media'
    },
    {
      screamId: 'GQReoG4ZbBPsnavFyX3X',
      body: 'Good Morning',
      userHandle: 'Devinda',
      createdAt: '2020-06-13T04:27:34.081Z',
      commentCount: 3,
      likeCount: 3,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/37693031746.jpg?alt=media'
    },
    {
      screamId: 'yGQigPz9ZYGUK0Y3bfHl',
      body: 'Hi Lamai',
      userHandle: 'Devinda',
      createdAt: '2020-06-13T04:22:47.344Z',
      commentCount: 1,
      likeCount: 3,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/37693031746.jpg?alt=media'
    },
    {
      screamId: '4CXB3AEXYqovorfQHl15',
      body: 'Hi...',
      userHandle: 'Devinda',
      createdAt: '2020-06-08T10:42:58.492Z',
      commentCount: 1,
      likeCount: 2,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/37693031746.jpg?alt=media'
    },
    {
      screamId: 'Ou4ldlzEHkW6dUnwyTpx',
      body: 'Hello Everyone',
      userHandle: 'Lahiru',
      createdAt: '2020-06-08T10:40:26.418Z',
      commentCount: 1,
      likeCount: 1,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/51510851716.jpg?alt=media'
    },
    {
      screamId: '44gOe4BH4DPQyEYZ8OMG',
      body: 'Naveen\'s Scream',
      userHandle: 'jane',
      createdAt: '2020-05-21T10:04:34.360Z',
      commentCount: 0,
      likeCount: 2,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/81325150273.jpg?alt=media'
    },
    {
      screamId: 'BpFz1C3xfaZTDPu7azWw',
      body: 'Hello Hello',
      userHandle: 'user',
      createdAt: '2020-05-20T10:13:44.134Z',
      commentCount: 1,
      likeCount: 3,
      userImage: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/no-img.png?alt=media'
    }
  ],
  comments: [
    {
      userHandle: 'Lahiru',
      screamId: '4CXB3AEXYqovorfQHl15',
      body: 'Hello',
      createdAt: '2020-06-17T05:47:21.366Z'
    }
  ],
  notifications: [
    {
      recipient: 'Devinda',
      sender: 'Lahiru',
      read: 'true | false',
      screamId: '4CXB3AEXYqovorfQHl15',
      type: 'like | comment',
      createdAt: '2020-06-17T05:47:24.707Z'
    }
  ]
};
const userDetails = {
  // Redux data
  credentials: {
    userId: 'NauDCDAfVxdglV6naELQ84GINyE2',
      bio: 'This is Devinda',
      website: 'http://naveen.com',
      location: 'Kandy, Sri Lanka',
      email: 'devindarajasekara990@gmail.com',
      handle: 'Devinda',
      createdAt: '2020-05-21T09:39:12.647Z',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/socialape-48ee7.appspot.com/o/37693031746.jpg?alt=media'
  },
  likes: [
    {
      userHandle: 'Devinda',
      screamId: 'yGQigPz9ZYGUK0Y3bfHl'
    },
    {
      screamId: 'Ou4ldlzEHkW6dUnwyTpx',
      userHandle: 'Devinda'
    },
    {
      screamId: 'GQReoG4ZbBPsnavFyX3X',
      userHandle: 'Devinda'
    },
    {
      userHandle: 'Devinda',
      screamId: 'FmlAuPkvG4sHS29sC311'
    },
    {
      userHandle: 'Devinda',
      screamId: 'Uqy37bzlgS35gORR2O15'
    },
    {
      userHandle: 'Devinda',
      screamId: '44gOe4BH4DPQyEYZ8OMG'
    },
    {
      userHandle: 'Devinda',
      screamId: '40oa4FARwoM1xSYINqNI'
    },
    {
      userHandle: 'Devinda',
      screamId: 'BpFz1C3xfaZTDPu7azWw'
    },
    {
      screamId: 'F8CUFgmJzTC6yQPQCuzI',
      userHandle: 'Devinda'
    }
  ]
};

// let db = {
//   users: [
//     {
//       userId: 'dh23ggj5h32g543j5gf43',
//       email: 'user@email.com',
//       handle: 'user',
//       createdAt: '2019-03-15T10:59:52.798Z',
//       imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
//       bio: 'Hello, my name is user, nice to meet you',
//       website: 'https://user.com',
//       location: 'Lonodn, UK'
//     }
//   ],
//   screams: [
//       {
//           userHandle: 'user',
//           body: 'this is the scream body',
//           createdAt: '2020-05-12T17:24:34.695Z',
//           likeCount: 5,
//           commentCount: 2
//       }
//   ]
// }
