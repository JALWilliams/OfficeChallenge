describe('Meeting Rooms', ()=>{

  let room;

  beforeEach(()=>{
    room = new meetingRoom('Lantana');
  });

  it('Meeting room to have a name', ()=>{

    expect(room.name).toEqual('Lantana');
  });

  it ('check if room available', ()=>{
    expect(room.isAvailable()).toBe(true)
  });

});