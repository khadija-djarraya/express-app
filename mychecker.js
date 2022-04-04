module.exports =function mychecker() {
    var d = new Date();
    var h = d.getHours();
    const day = d.getDay()

    console.log(day+" the time is "+h);
    if(day!==0 || day!==6 /*&& (h<9 && h>19)*/ ){
      console.log("welcome! today is not sunday nor saturday...");

    //if today is not saturday and it's before 6pm
     return true;
    }
    else
    {
      console.log("it's the weekend! can't access today..");

      return false;
    }
  }