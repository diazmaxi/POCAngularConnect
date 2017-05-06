import { POCAngularConnectPage } from './app.po';

describe('pocangular-connect App', () => {
  let page: POCAngularConnectPage;

  beforeEach(() => {
    page = new POCAngularConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
