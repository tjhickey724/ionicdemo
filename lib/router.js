Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});
Router.route("headersFooters");
Router.route('/', {name: 'index'});
Router.route('welcome');
Router.route('schedule');
Router.route('map');
Router.route('photos');
Router.route('people');
Router.route('userAccounts');

Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});

Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
