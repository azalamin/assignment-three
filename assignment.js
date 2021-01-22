// https://github.com/azalamin/assignment-three


//Convert kilometer to meter
function kilometerToMeter(kilometer){
   if(kilometer < 0) {
      return "Please make sure you have given positive input";
   } else if(isNaN(kilometer)){
      return "Input is not a text"
   }  else{
      var meter = kilometer * 1000;  // 1 kilometer = 1000 meter        
   }
   return meter;
}


// Budget Calculator
function budgetCalculator(watch, phone, laptop){
   if(watch < 0 || phone < 0 || laptop < 0) {
      return "Input cannot be nagative value"
   } else if(isNaN(watch) || isNaN(phone) || isNaN(laptop)){
      return "Input cannot be text"
   } else{
      var watchPrice = watch * 50;  // 1 watch = 50
      var phonePrice = phone * 100; // 1 phone = 100
      var laptopPrice = laptop * 500;  // 1 laptop = 500
      // Total budget of items
      var totalCost = watchPrice + phonePrice + laptopPrice;
   }
   return totalCost;
}


// Hotel Cost Per day
function hotelCost(days){
   var totalDaysCost = 0;
   if( days < 0 || isNaN(days)){
      return "Invalid number or keywords"
   }
   // 1 to 10 days cost is 100
   else if(days <= 10){
      totalDaysCost = days * 100;
      // 11 to 20 days cost is 80
   } else if(days <= 20){
      var firstPart = 10 * 100;
      var remaining = days - 10;
      var secondPart = remaining * 80;
      totalDaysCost = firstPart + secondPart;
      // From 21 days cost is 50
   } else{
      var firstPart = 10 * 100;
      var secondPart = 10 * 80;
      var remaining = days - 20;
      var thirdPart = remaining * 50;
      totalDaysCost = firstPart + secondPart + thirdPart;
   }
   return totalDaysCost;
}


// Get Max From Array Elements
function megaFriend(friends){
   var max = friends[0];
   for(var i = 0; i < friends.length; i++){
      if(friends[i].length > max.length){
         max = friends[i]
      }
   }
   return max;
}