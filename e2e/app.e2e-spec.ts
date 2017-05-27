import { NGPage } from './app.po';

describe('ng App', () => {
  let page: NGPage;

  beforeEach(() => {
    page = new NGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
