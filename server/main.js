import { Meteor } from 'meteor/meteor';


Meteor.publish('predictline', function(){
	return predict.find();
})

Meteor.publish('revenue1line', function(){
	return revenue1.find();
})
Meteor.publish('revenue2line', function(){
	return revenue2.find();
})
Meteor.publish('revenue3line', function(){
	return revenue3.find();
})
Meteor.publish('revenue4line', function(){
	return revenue4.find();
})
Meteor.publish('revenue5line', function(){
	return revenue5.find();
})
Meteor.publish('revenue6line', function(){
	return revenue6.find();
})
Meteor.publish('revenue7line', function(){
	return revenue7.find();
})

Meteor.publish('algoline', function(){
	return algo.find();
})

Meteor.publish('cursettingline', function(){
	return cur_setting.find();
})
Meteor.publish('engagementline', function(){
	return engagement.find();
})
Meteor.publish('intandactline', function(){
	return intandact.find();
})
Meteor.publish('grid_orgline', function(){
	return grid_org.find();
})
Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.users.findOne({email:"test1@yahoo.com"})==false){
  	Roles.addUsersToRoles(Accounts.createUser({email: "test1@yahoo.com", password: "test1234"}), ['admin'], 'default-group');
  }
});