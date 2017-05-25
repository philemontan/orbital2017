import { SocbridgePage } from './app.po';

describe('socbridge App', () => {
  let page: SocbridgePage;

  beforeEach(() => {
    page = new SocbridgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
