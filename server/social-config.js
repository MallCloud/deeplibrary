ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '12345678901234567890',
    secret: 'secret12345678901234567890'
});

ServiceConfiguration.configurations.remove({
  service: 'google'
});
ServiceConfiguration.configurations.insert({
  service: 'google',
  clientId: '166546407562-dtp3pm99elrfdslm19q53nv60fo1kp7.apps.googleusercontent.com',
  secret: 'z2UhNwjp64SUNi_V4cUaY9p'
});