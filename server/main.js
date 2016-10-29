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
Meteor.startup(() => {
  // code to run on server at startup
  
});