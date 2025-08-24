var convertTemperature = function(celsius) {
  let ans=[];
  let kelvin=celsius+273.15;
  let Fahrenheit=(celsius*1.80)+32.00
  ans.push(kelvin,Fahrenheit) 
  return ans 
};
console.log(convertTemperature(36.50));
