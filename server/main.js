import { Meteor } from 'meteor/meteor';


Meteor.publish('predictline', function(){
	return predict.find();
})

Meteor.publish('revenueline', function(){
	return revenue.find();
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