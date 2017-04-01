import { ClientHtmlPage } from './app.po';

describe('client-html App', () => {
  let page: ClientHtmlPage;

  beforeEach(() => {
    page = new ClientHtmlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
