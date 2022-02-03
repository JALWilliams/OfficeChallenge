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

  it ('Change status to unavailble when enter', ()=>{
    room.enter()
    expect(room.isAvailable()).toBe(false)
  });

  it ('Changes status back to avaialble when leave', ()=>{
    room.exit()
    expect(room.isAvailable()).toBe(true)
  });

  it ('Throws an error if I try and enter a occcupied room', () => {
    room.enter();
    expect(room.enter).toThrowError('Occupied!')

  });

});