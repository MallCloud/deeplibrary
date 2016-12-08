Router.route('/', function () {
  this.render('login');
});

Router.route('/login', function () {
  this.render('login');
});


Router.route('/main', function() {
  this.render('main');
  this.render('churndata_update_form',{
    to:'modal_churndata'
  });
});

Router.route('/knowledge', function() {
  this.render('knowledge');
  this.render('churndata_update_form',{
    to:'modal_churndata'
  });
  this.render('data_update_form',{
    to:'modal'
  });
  this.render('predata_update_form',{
    to:'modal_pre'
  });
  this.render('algorithmdata_update_form',{
    to:'modal_algorithm'
  });
  this.render('preandrev_update_form',{
    to:'modal_preandrev'
  });
  this.render('algo_cur_data_update_form',{
    to:'modal_algo_cur_data'
  });
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
  this.render('churndata_update_form',{
    to:'modal_churndata'
  });
  this.render('algorithmdata_update_form',{
    to:'modal_algorithm'
  });
  this.render('preandrev_update_form',{
    to:'modal_preandrev'
  });
  this.render('algo_cur_data_update_form',{
    to:'modal_algo_cur_data'
  });
});

Router.route('/churn', function() {
  this.render('churn');
  this.render('churndata_update_form',{
    to:'modal_churndata'
  });
  this.render('algorithmdata_update_form',{
    to:'modal_algorithm'
  });
  this.render('preandrev_update_form',{
    to:'modal_preandrev'
  });
  this.render('algo_cur_data_update_form',{
    to:'modal_algo_cur_data'
  });
});

Router.route('/action', function() {
  this.render('action');
});

Router.route('/influence', function() {
  this.render('influence');
  this.render('churndata_update_form',{
    to:'modal_churndata'
  });
  this.render('algorithmdata_update_form',{
    to:'modal_algorithm'
  });
  this.render('preandrev_update_form',{
    to:'modal_preandrev'
  });
  this.render('algo_cur_data_update_form',{
    to:'modal_algo_cur_data'
  });
});


Router.route('/target', function() {
  this.render('target');
  this.render('churndata_update_form',{
    to:'modal_churndata'
  });
  this.render('algorithmdata_update_form',{
    to:'modal_algorithm'
  });
  this.render('preandrev_update_form',{
    to:'modal_preandrev'
  });
  this.render('algo_cur_data_update_form',{
    to:'modal_algo_cur_data'
  });
});



Router.route('/register', function() {
  this.render('register');
});


Router.route('/graph', function() {
  this.render('graph');
});
