import { PraktikantenProjektPage } from './app.po';

describe('praktikanten-projekt App', function() {
  let page: PraktikantenProjektPage;

  beforeEach(() => {
    page = new PraktikantenProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
