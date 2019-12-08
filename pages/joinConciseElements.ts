import {ElementFinder} from 'protractor/built/element';
import {element, by, browser} from 'protractor';

export class JoinConciseElements {
  cookiesOkButton: ElementFinder;
  mainMenuComponent: ElementFinder;
  joinOurTeam: ElementFinder;
  jobsListElement: ElementFinder;
  qaJobOffer: ElementFinder;
  qaTeamLeaderLink: ElementFinder;
  pageHeader: ElementFinder;
  applyForJobButton: ElementFinder;
  jobApplicationEmail: ElementFinder;
  
  constructor() {
    this.cookiesOkButton = element(by.css('[id="cn-accept-cookie"]'));
    this.mainMenuComponent = element(by.id('main-menu'));
    this.joinOurTeam = element(by.css('[id=main-menu] [class*="menu-item-58"]'));
    this.jobsListElement = element.all(by.css('[class="job_listings"]')).get(0);
    this.qaJobOffer = element(by.cssContainingText('h3', 'QA Team Leader'));
    this.qaTeamLeaderLink = element(by.css('[href*="qa-team-leader"]'));
    this.pageHeader = element(by.css('[class="blog__detail-title"]'));
    this.applyForJobButton = element(by.css('[class*="application_button"]'));
    this.jobApplicationEmail = element(by.css('[class="job_application_email"]'));
  }
 
  public async confirmCookies() {
    await this.cookiesOkButton.click();
  }

  public async clickOnJoinOurTeam() {
    await this.joinOurTeam.click();
  }

  public async clickQaTeamleaderJobOffer() {
    await browser.actions().mouseMove(this.qaTeamLeaderLink).perform();
    await this.qaTeamLeaderLink.click();
  }

  public async clickApplyForJob() {
    await browser.actions().mouseMove(this.applyForJobButton).perform();
    await this.applyForJobButton.click();
  }
}
