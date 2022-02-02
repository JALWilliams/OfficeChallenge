class meetingRoom {
  
  constructor(name){
    this.name = name;
    this.availabilityStatus = true;
  }

  isAvailable(){
    return this.availabilityStatus; 
  }

}