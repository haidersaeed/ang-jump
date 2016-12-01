import { AngJumpPage } from './app.po';

describe('ang-jump App', function() {
  let page: AngJumpPage;

  beforeEach(() => {
    page = new AngJumpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
