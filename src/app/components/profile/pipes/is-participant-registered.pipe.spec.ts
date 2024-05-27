import { IsParticipantRegisteredPipe } from './is-participant-registered.pipe';

describe('IsParticipantRegisteredPipe', () => {
  it('create an instance', () => {
    const pipe = new IsParticipantRegisteredPipe();
    expect(pipe).toBeTruthy();
  });
});
