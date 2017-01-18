import { IsItPage } from './app.po';

describe('is-it App', function() {
  let page: IsItPage;

  beforeEach(() => {
    page = new IsItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
