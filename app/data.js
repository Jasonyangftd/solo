var headers = ['WorkShift','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'SundayShifts','Sunday'];
// var lunchWorkShifts = ['10:00-4:00(-1)','11:00-4:00(-30)','11:15-4:00(-30)','11:45-3:45','12:00-4:00'];
// var dinnerWorkShifts = ['4:00-9:30(-30)','4:00-9:00','4:00-8:00','4:45-8:45','4:30-9:30'];
// var workDays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// var shift1Hours = 5;
// var shift2Hours = 4.5;
// var shift3Hours = 3.75;
// var shift4Hours = 4;
// var shift5Hours = 4;
// var shift6Hours = 5;
// var shift7Hours = 4;
// var shift8Hours = 4;
// var shift9Hours = 5;

var totalHours = {
  'Eileen': {'name': 'Eileen', 'workingHours': 0}, 
  'Vicky': {'name': 'Vicky', 'workingHours': 0}, 
  'Kimmy': {'name': 'Kimmy', 'workingHours': 0}, 
  'Katy': {'name': 'Katy', 'workingHours': 0}, 
  'Wendy': {'name': 'Wendy', 'workingHours': 0}, 
  'Tong': {'name': 'Tong', 'workingHours': 0}, 
  'Jeff': {'name': 'Jeff', 'workingHours': 0}, 
  'Karry': {'name': 'Karry', 'workingHours': 0}, 
  'Charlie': {'name': 'Charlie', 'workingHours': 0}, 
  'Harvey': {'name': 'Harvey', 'workingHours': 0}, 
  'Sam': {'name': 'Sam', 'workingHours': 0}, 
  'Joan': {'name': 'Joan', 'workingHours': 0}, 
  'Maggey': {'name': 'Maggey', 'workingHours': 0}, 
  'Mathew': {'name': 'Mathew', 'workingHours': 0}, 
  'Boa': {'name': 'Boa', 'workingHours': 0}, 
  'Eva': {'name': 'Eva', 'workingHours': 0}, 
  'Harry': {'name': 'Harry', 'workingHours': 0}
};

var getTotal = function(){
  for (var key in totalHours){
    totalHours[key].workingHours = 0.
  }

  var innerFuncA = function(){
    var optionValuesA =[];
    $('.shiftA option:selected').each(function() {
      optionValuesA.push($(this).val());
    });

    for (var i = 0; i < optionValuesA.length; i++){
      totalHours[optionValuesA[i]].workingHours += 5;
    }
  };

  var innerFuncB = function(){
    var optionValuesB =[];
    $('.shiftB option:selected').each(function() {
      optionValuesB.push($(this).val());
    });

    for (var i = 0; i < optionValuesB.length; i++){
      totalHours[optionValuesB[i]].workingHours += 4;
    }
  };

  var innerFuncC = function(){
    var optionValuesC =[];
    $('.shiftC option:selected').each(function() {
      optionValuesC.push($(this).val());
    });

    for (var i = 0; i < optionValuesC.length; i++){
      totalHours[optionValuesC[i]].workingHours += 4.5;
    }
  };

  var innerFuncD = function(){
    var optionValuesD =[];
    $('.shiftD option:selected').each(function() {
      optionValuesD.push($(this).val());
    });

    for (var i = 0; i < optionValuesD.length; i++){
      totalHours[optionValuesD[i]].workingHours += 3.75;
    }
  };
  var innerFuncSA = function(){
    var optionValuesSA =[];
    $('.shiftSA option:selected').each(function() {
      optionValuesSA.push($(this).val());
    });

    for (var i = 0; i < optionValuesSA.length; i++){
      totalHours[optionValuesSA[i]].workingHours += 9;
    }
  };  
  var innerFuncSB = function(){
    var optionValuesSB =[];
    $('.shiftSB option:selected').each(function() {
      optionValuesSB.push($(this).val());
    });

    for (var i = 0; i < optionValuesSB.length; i++){
      totalHours[optionValuesSB[i]].workingHours += 7;
    }
  };  
  var innerFuncSC = function(){
    var optionValuesSC =[];
    $('.shiftSC option:selected').each(function() {
      optionValuesSC.push($(this).val());
    });

    for (var i = 0; i < optionValuesSC.length; i++){
      totalHours[optionValuesSC[i]].workingHours += 7;
    }
  };  
  var innerFuncSD = function(){
    var optionValuesSD =[];
    $('.shiftSD option:selected').each(function() {
      optionValuesSD.push($(this).val());
    });

    for (var i = 0; i < optionValuesSD.length; i++){
      totalHours[optionValuesSD[i]].workingHours += 7;
    }
  };  
  var innerFuncSE = function(){
    var optionValuesSE =[];
    $('.shiftSE option:selected').each(function() {
      optionValuesSE.push($(this).val());
    });

    for (var i = 0; i < optionValuesSE.length; i++){
      totalHours[optionValuesSE[i]].workingHours += 6;
    }
  };
  
  innerFuncA();
  innerFuncB();
  innerFuncC();
  innerFuncD();
  innerFuncSA();
  innerFuncSB();
  innerFuncSC();
  innerFuncSD();
  innerFuncSE();

  // console.dir(totalHours.eileen)
}























