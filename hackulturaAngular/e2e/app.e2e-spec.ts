import { HackulturaAngularPage } from './app.po';

describe('hackultura-angular App', () => {
  let page: HackulturaAngularPage;

  beforeEach(() => {
    page = new HackulturaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
