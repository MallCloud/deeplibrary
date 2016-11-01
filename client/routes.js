Router.route('/', function () {
  this.render('login');
});

Router.route('/login', function () {
  this.render('login');
});


Router.route('/main', function() {
  this.render('main');
});
/*
Router.route('/main1', function() {
  this.render('main1');
});

Router.route('/input', function() {
  this.render('input');
});

Router.route('/lockscreen', function() {
  this.render('lockscreen');
});

Router.route('/settings', function() {
  this.render('settings');
});
*/
Router.route('/lapse', function() {
  this.render('lapse');
});

Router.route('/churn', function() {
  this.render('churn');
});

Router.route('/action', function() {
  this.render('action');
});

Router.route('/influence', function() {
  this.render('influence');
});


Router.route('/target', function() {
  this.render('target');
});



Router.route('/register', function() {
  this.render('register');
});


Router.route('/graph', function() {
  this.render('graph');
});
