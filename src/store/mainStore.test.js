import mainStore from './mainStore';

describe('mainStore', () => {
  it('increment Counter', () => {
    const value = mainStore.count + 1 + 1;
    mainStore.increment();
    mainStore.increment();
    expect(mainStore.count).toBe(value);
  });
  it('clears Counter value', () => {
    mainStore.clear();
    expect(mainStore.count).toBe(0);
  });
  it('decrement Counter', () => {
    const value = mainStore.count - 1 - 1;
    mainStore.decrement();
    mainStore.decrement();
    expect(mainStore.count).toBe(value);
  });
});
