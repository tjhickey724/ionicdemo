Template.profileRow.helpers({
	email: function(){
		return this.emails[0].address;
	},
	photo2:function(){
		console.log(this.emails[0].address);
		return "http://www.cs.brandeis.edu//~tim/hickey-apr08.gif"},
	photo:function(){
		console.log(this.emails[0]);
		return Gravatar.imageUrl(
			Gravatar.hash(
				this.emails[0].address,
				{secure:true}))}
})