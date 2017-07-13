function repeatTest($scope) {
  var dataString = '['+
    '{name: "Bob", joinTime: "04/14/2017 13:59:29", leaveTime: "04/14/2017 14:10:50", duration: "15", devise: "Leitner LH", skype: "v. 16.05.185", accessPoint: "WP654", server: {id: "18.30.12.15", sessions: 11, avgMos: "5.53"}, pool: {id: "pool@poool.com", sessions: 11, avgMos: "5.53"}, site: {id: "Veni", sessions: 10, avgMos: "5.12"}},'+
	'{name: "Jhon", joinTime: "04/14/2017 13:59:38", leaveTime: "04/14/2017 14:10:30", duration: "14", devise: "Mother LH", skype: "v. 16.05.186", accessPoint: "WP616", server: {id: "18.30.12.16", sessions: 20, avgMos: "5.53"}, pool: {id: "pool2@poool.com", sessions: 15, avgMos: "3.25"}, site: {id: "Vidi", sessions: 9, avgMos: "5.17"}},'+
	'{name: "Andrew", joinTime: "04/14/2017 13:59:47", leaveTime: "04/14/2017 14:11:20", duration: "16", devise: "Father LH", skype: "v. 16.05.185", accessPoint: "AP633", server: {id: "18.30.12.17", sessions: 14, avgMos: "5.53"}, pool: {id: "pool3@poool.com", sessions: 1, avgMos: "4.15"}, site: {id: "Vici", sessions: 7, avgMos: "5.22"}},'+
	'{name: "Bob", joinTime: "04/14/2017 14:59:29", leaveTime: "04/14/2017 15:10:50", duration: "15", devise: "Leitner LH", skype: "v. 16.05.185", accessPoint: "WP657", server: {id: "28.30.12.15", sessions: 11, avgMos: "5.53"}, pool: {id: "pool@poool.com", sessions: 11, avgMos: "5.53"}, site: {id: "Veni", sessions: 10, avgMos: "5.12"}},'+
	'{name: "Jhon", joinTime: "04/14/2017 14:59:38", leaveTime: "04/14/2017 15:10:30", duration: "14", devise: "Mother LH", skype: "v. 16.05.186", accessPoint: "WP626", server: {id: "28.30.12.16", sessions: 20, avgMos: "5.53"}, pool: {id: "pool2@poool.com", sessions: 15, avgMos: "3.25"}, site: {id: "Vidi", sessions: 9, avgMos: "5.17"}},'+
	'{name: "Andrew", joinTime: "04/14/2017 14:59:47", leaveTime: "04/14/2017 15:11:20", duration: "16", devise: "Father LH", skype: "v. 16.05.185", accessPoint: "AP333", server: {id: "28.30.12.17", sessions: 14, avgMos: "5.53"}, pool: {id: "pool3@poool.com", sessions: 1, avgMos: "4.15"}, site: {id: "Vici", sessions: 7, avgMos: "5.22"}}'+  
  ']';
  $scope.people = eval(dataString);
  var namesSet = {};
  $scope.people.forEach(function(person) {namesSet[person.name] = person});
  $scope.names = Object.keys(namesSet).map(function(name) {return {'name': name}});
  $scope.toogleSelection = function(name) {
	$scope.people.forEach(function(person) {person.selected = person.name == name;});	
  }
}