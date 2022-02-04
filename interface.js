// FLOW: user input -> event listener -> update model -> update view to reflect change in model
// Unlike with spec we don't have a before block as such 
  
  // const ft = new office();
  // const kyat = new meetingRoom(); 
  
  
  document.querySelector('#enter').addEventListener('click', ()=>{
    kyat = new meetingRoom(); 
    kyat.enter();
    document.querySelector('#availabiltiy').innerText = 'Available: '+ kyat.availabilityStatus;
  });

  document.querySelector('#exit').addEventListener('click', ()=>{
    kyat = new meetingRoom(); 
    kyat.exit();
    document.querySelector('#availabiltiy').innerText = 'Available: '+ kyat.availabilityStatus;
  });

  document.querySelector('#available-meeting-rooms-button').addEventListener('click', ()=>{
    kyat = new meetingRoom(); 
    ft = new office();
    ft.addMeetingRoom(kyat);
    ft.viewAvailableMeetingRooms();

    document.querySelector('#meeting-rooms-array').innerText = ft.viewMeetingRooms();    
  });

