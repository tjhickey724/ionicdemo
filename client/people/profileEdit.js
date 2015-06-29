Template.profileEdit.helpers({
	myEmail: function(){
		return this.emails[0].address},
	photo:function(){ 
		return Gravatar.imageUrl(Gravatar.hash(this.emails[0].address,{secure:true}))}
})

Template.profileEdit.events({
	"submit #profile-edit-form": function(event){
		console.log("processing form info!!!")
		event.preventDefault();
		var bio = event.target.bio.value;
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var userName = event.target.userName.value;
		console.log(JSON.stringify(['editinfo',bio,firstName,lastName,userName]))
		Meteor.users.update(this._id,
			{$set:{'profile.bio':bio, 
					'profile.firstName':firstName, 
					'profile.lastName':lastName,
					'profile.userName':userName}});
		Router.go('/profile/'+this._id);
		
	}
})