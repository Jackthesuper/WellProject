Symptoms=new Meteor.Collection('symptoms');
Comments=new Meteor.Collection('comments');
Rides=new Meteor.Collection('rides');
Issues=new Meteor.Collection('issues');
Settings=new Meteor.Collection('settings');
Demographic=new Meteor.Collection('demographic');
Preferences=new Meteor.Collection('preferences');
Meals=new Meteor.Collection('meals');

Symptoms.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Comments.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Rides.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Issues.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Settings.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Demographic.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Preferences.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});

Meals.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;},
});
