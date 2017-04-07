import { BreakfastClubPage } from './app.po';

describe('breakfast-club App', () => {
  let page: BreakfastClubPage;

  beforeEach(() => {
    page = new BreakfastClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
