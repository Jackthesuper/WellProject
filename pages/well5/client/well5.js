Template.well5.helpers({
	'demographic': function(){
		return Demographic.findOne();
	},

	'preference': function(){
		console.log(Preferences.findOne().selected);
		return Preferences.findOne().selected[0];
	},

	'preference2': function(){
		return Preferences.findOne().selected[1];
	},

	bmiCondition: function(){
    const object = Demographic.findOne();
    if(object.bmi<=21){
      return "Underweight";
    }else if(object.bmi<=27){
      return "Normal";
    }else if(object.bmi<=32){
      return "Overweight";
    }else{
      return "Obese";
    }
  },
})

Template.well5.events({
	'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
			Router.go('/login');
	},

	"change .js-select-weight": function(event,template){
	   const weight = $(event.target).val();
     const height = $(".js-height").val();
     const bmi = weight/ (height*height) *703;
     $(".js-bmi").val(Math.round(bmi));
     console.log(bmi);
	},

	'click .js-submit': function(event){
			event.preventDefault();
			console.log("hey u clicked");
			const address = $(".js-address").val();
			const state = $(".js-select-state").val();
			const zipcode = $(".js-select-zipcode").val();
			const household = $(".js-select-household").val();
			const weight = $(".js-select-weight").val();
			const height = $(".js-height").val();
			const bmi = $(".js-bmi").val();
			const ddata=
			{user:Meteor.userId(), address:address, state:state, zipcode:zipcode, household:household, weight:weight, height:height, bmi:bmi};
			console.log(ddata);
			Meteor.call("submitDemographic", ddata);
			console.log("finished");
			Router.go('/meal_selecction');
	},

	'click .js-cancel': function(event){
			event.preventDefault();
			Router.go('/meal_selecction');
	},

	'click .js-go-home': function(event){
			event.preventDefault();
			Router.go('/meal_selecction');
	},

	'click .js-call': function(event){
			event.preventDefault();
			window.alert("Please wait our staff to call you!");
	},
});
