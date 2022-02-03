describe ( 'Office', ()=>{

  let ft;
  let lantana;
  let plaza;

  beforeEach(()=>{
    ft = new office ();
    lantana = new meetingRoom('Lantana');
    plaza = new meetingRoom('Plaza')
  });

  it ('Add meeting room to office', ()=>{
    ft.addMeetingRoom(lantana);
    expect(ft.meetingRooms).toEqual(['Lantana']);
  });

  it ('List the meeting rooms', ()=>{
    ft.addMeetingRoom(lantana);
    expect(ft.viewMeetingRooms()).toEqual(['Lantana']);
  });

  it ('List of available rooms', ()=>{
    ft.addMeetingRoom(lantana);
    ft.addMeetingRoom(plaza);
    lantana.enter();

    expect(ft.viewAvailableMeetingRooms()).toEqual(['Plaza']);

  });

});