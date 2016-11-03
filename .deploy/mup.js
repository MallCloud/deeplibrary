module.exports = {
  servers: {
    one: {
      host: '35.160.251.195',
      username: 'ubuntu',
      pem: 'aws-key/kockajimmy'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'deeplibrary',
    path: '/home/cortana/Desktop/deeplibrary',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
    	PORT: 3000,
      ROOT_URL: 'http://35.160.251.195:3000',
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
