class office {

  constructor(){
    this.meetingRoomsInstances = [];
    this.meetingRooms = [];
    this.availableRooms = [];
  }

  
  addMeetingRoom(instanceRoom2){
    // here we are getting instance
    this.meetingRoomsInstances.push(instanceRoom2);
    // here we are just getting the name for the lsit 
    this.meetingRooms.push(instanceRoom2.name); 
    // return this.meetingRooms;
  }

  viewMeetingRooms(){
    return this.meetingRooms;
  }

  viewAvailableMeetingRooms(){

      this.availableRooms = [];
      
      this.meetingRoomsInstances.forEach((room)=>{
        if (room.availabilityStatus){
          return this.availableRooms.push(room.name);
        }
        if (!room.availabilityStatus){
          return;
        }
      });

      return this.availableRooms;
  }

}
