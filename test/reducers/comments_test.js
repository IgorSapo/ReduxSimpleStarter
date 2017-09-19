import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  const prevState = ['First comment'];

  it('handle action with unknown type', () => {
    const randomAction = {
      type: 'RANDOM',
      payload: 'Random payload'
    };
    const newState = commentReducer(prevState, randomAction);
    expect(newState).to.deep.equal(prevState);
  })

  it('handles action of type SAVE_COMMENT', () => {
    const correctAction = {
      type: SAVE_COMMENT,
      payload: 'Second comment'
    };
    const newState = commentReducer(prevState, correctAction);
    expect(newState.pop()).to.equal('Second comment');
  })
})