class meetingRoom {
  
  constructor(name){
    this.name = name;
    this.availabilityStatus = true;
  }

  isAvailable(){
    return this.availabilityStatus; 
  }

  enter(){
    if (!this.availabilityStatus){
      throw new Error('Occupied!');
    }
    return this.availabilityStatus = false;
  }

  exit(){
    return this.availabilityStatus = true;
  }

}