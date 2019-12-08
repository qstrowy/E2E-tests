import {browser} from 'protractor';
import { JoinConciseElements } from '../pages/joinConciseElements';

describe('This test is to verifies if is there any open position for tester in Concise Rzeszow', () => {

  const joinConcise = new JoinConciseElements();

  //Test data
  const hrEmail = 'nkotyla@concisesoftware.com';

  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.baseUrl);
    await joinConcise.confirmCookies();
  });  

  it('should check if user is on Rzeszow branch page and if main menu is displayed', async () => {
    expect(browser.getCurrentUrl()).toContain('/rzeszow');
    expect(joinConcise.mainMenuComponent.isDisplayed()).toBe(true, 
      'Main menu element is not displayed.');
  });

  it('should go to Join our team entry', async () => {
    await joinConcise.clickOnJoinOurTeam();
    await expect(joinConcise.jobsListElement.isDisplayed()).toBe(true, 
      'List with currently open positions is not displayed.');
  });

  it('should check if QA Team Leader job offer is still present', async () => {
    await expect(joinConcise.qaJobOffer.isDisplayed()).toBe(true, 
      'QA Team Leader job offer is not displayed.');
  });

  it('should press on QA Team Leader job offer', async () => {
    await joinConcise.clickQaTeamleaderJobOffer();
    await expect(joinConcise.pageHeader.getText()).toEqual('QA Team Leader', 'Job title is different than QA Team Leader');
  });

  it('should press on Apply for a job button and check if correct email is displayed', async () => {
    await joinConcise.clickApplyForJob();
    await expect(joinConcise.jobApplicationEmail.getText()).toContain(hrEmail);
  });
});
