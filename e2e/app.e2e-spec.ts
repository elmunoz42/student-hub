import { StudentHubPage } from './app.po';

describe('student-hub App', function() {
  let page: StudentHubPage;

  beforeEach(() => {
    page = new StudentHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
