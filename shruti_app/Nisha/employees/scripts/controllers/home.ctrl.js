angular.module('myApp').controller('HomeController',function($scope,$location, $rootScope){
	console.log('inside home');
  $scope.logout = function()
  {
	  
	  $location.path('/');
  }
	$rootScope.employees =[
		{
		"empId":"A1001",
		"firstName":"Emmanuel",
		"lastName":"Mathew",
		"designmation":"Director",
		"departmant":"Managment",
		"age":"41",
		"mobile":"123456789",
		"emailAddress":"emmanuel@gmail.com",
		"location":"US"
		},
		{
		"empId":"A1002",
		"firstName":"Jim",
		"lastName":"Alaxander",
		"designmation":"Technical Architect",
		"departmant":"Software",
		"age":"32",
		"mobile":"123456789",
		"emailAddress":"jim@gmail.com",
		"location":"US"
		},
		{
		"empId":"A1003",
		"firstName":"Stefanus",
		"lastName":"Budhipramano",
		"designmation":"Lead Manager",
		"departmant":"Datacenter Operatons",
		"age":"37",
		"mobile":"123456789",
		"emailAddress":"stefaus@gmail.com",
		"location":"US"
		},
		{
		"empId":"A1004",
		"firstName":"Allen",
		"lastName":"Hannan",
		"designmation":"System Administrator",
		"departmant":"Software",
		"age":"24",
		"mobile":"123456789",
		"emailAddress":"allen@gmail.com",
		"location":"US"
		},
		{
		"empId":"A1005",
		"firstName":"Andrew",
		"lastName":"Nugent",
		"designmation":"Developer",
		"departmant":"Software",
		"age":"26",
		"mobile":"123456789",
		"emailAddress":"andrew@gmail.com",
		"location":"US"
		},
	]
});