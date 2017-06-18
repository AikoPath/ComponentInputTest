import { ComponentInputTestPage } from './app.po';

describe('component-input-test App', () => {
  let page: ComponentInputTestPage;

  beforeEach(() => {
    page = new ComponentInputTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
