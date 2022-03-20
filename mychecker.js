module.exports =function mychecker() {
    var d = new Date();
    var h = d.getHours();
    const day = d.getDay()
    console.log(d+"the time is"+h);
    if((day!=1 || day!=6) && (h>9 && h<17) ){
      console.log("today is not sunday nor saturday");

    //if today is not saturday and it's before 6pm
     return true;
    }
    else
    {
      return false;
    }
  }