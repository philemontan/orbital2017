import { Mockup1Page } from './app.po';

describe('mockup1 App', () => {
  let page: Mockup1Page;

  beforeEach(() => {
    page = new Mockup1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
