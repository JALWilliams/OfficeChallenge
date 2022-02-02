describe ( 'Office', ()=>{

  let ft;

  beforeEach(()=>{
    ft = new office ();
  });

  it ('Add meeting room to office', ()=>{
    ft.addMeetingRoom('Lantana')
    expect(ft.meetingRooms).toEqual(['Lantana'])
  });

});