import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {


  Meteor.publish('presences', function() {
    return Presences.find({}, { userId: true });
  });

  Meteor.publish("users", function () {
    return Meteor.users.find({});
  });

});
