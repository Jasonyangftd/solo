var app = angular.module('app', []);


app.controller('MainController', function ($scope) {
  $scope.heads = headers;
  $scope.mondayLunch = mondayLunchArray;
  $scope.tuesdayLunch = tuesdayLunchArray;
  $scope.wendnesdayLunch = wendnesdayLunchArray;
  $scope.thursdayLunch = thursdayLunchArray;
  $scope.fridayLunch = fridayLunchArray;
  $scope.saturdayLunch = saturdayLunchArray;

  $scope.mondayDinner = mondayDinnerArray;;
  $scope.tuesdayDinner = tuesdayDinnerArray;
  $scope.wendnesdayDinner = wendnesdayDinnerArray;
  $scope.thursdayDinner = thursdayDinnerArray;
  $scope.fridayDinner = fridayDinnerArray;
  $scope.saturdayDinner = saturdayDinnerArray;
  $scope.sunday = sundayArray;
  // $scope.lunchShifts = lunchWorkShifts;;
  // $scope.dinnerShifts = dinnerWorkShifts;;
  // $scope.lunchAvaList = lunchLists;;
  // $scope.dinnerAvaList = dinnerLists;;
  // $scope.weekDays = workDays;
  $scope.getTotalHours = getTotal;
  $scope.total = totalHours;

  $scope.checkConflicts = checkCon;
  $scope.showConflicts = conflicts;
})