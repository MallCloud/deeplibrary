module.exports = {
  servers: {
    one: {
      host: '52.41.186.122',
      username: 'ubuntu',
      pem: 'aws-key/xanthelabs.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'deeplibrary',
    path: '/home/cortana/Projects/JSProjects/deeplibrary',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
    	PORT: 3000,
      ROOT_URL: 'http://52.41.186.122:3000',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
