(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("Rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        Room.add = function(room) {
            //Use the firebase method $add here
             rooms.$add(room);
        }; 

        return Room;
    }

   angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();