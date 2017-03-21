import { GdgAppPage } from './app.po';

describe('gdg-app App', () => {
  let page: GdgAppPage;

  beforeEach(() => {
    page = new GdgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
