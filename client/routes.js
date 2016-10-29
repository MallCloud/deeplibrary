Router.route('/', function () {
  this.render('login');
});

Router.route('/login', function () {
  this.render('login');
});


Router.route('/main', function() {
  this.render('main');
});

Router.route('/main1', function() {
  this.render('main1');
});

Router.route('/lapse', function() {
  this.render('lapse');
});

Router.route('/lockscreen', function() {
  this.render('lockscreen');
});

Router.route('/settings', function() {
  this.render('settings');
});

Router.route('/register', function() {
  this.render('register');
});

Router.route('/input', function() {
  this.render('input');
});

Router.route('/graph', function() {
  this.render('graph');
});
