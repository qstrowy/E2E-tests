import {ElementFinder} from 'protractor/built/element';
import {element, by, browser} from 'protractor';

export class EstimateProject {
  servicesUrl: string;
  estimateProjectButton: ElementFinder;
  estimateProjectTitle: ElementFinder;
  nameInput: ElementFinder;
  ndaYesRadio: ElementFinder;
  ndaNoRadio: ElementFinder;
  submitEstimationFormButton: ElementFinder;
  fullFormValidatorMessage: ElementFinder;

  constructor() {
    this.servicesUrl = 'https://concisesoftware.com/services/';

    this.estimateProjectButton = element(by.css('[href="/estimate-project"]'));
    this.estimateProjectTitle = element(by.cssContainingText('h1', 'ESTIMATE PROJECT'));

    this.nameInput = element.all(by.id('name')).get(0);
    this.ndaYesRadio = element(by.id('nda_yes'));
    this.ndaNoRadio = element(by.id('nda_no'));
    this.submitEstimationFormButton = element(by.css('[type="submit"]'));
    this.fullFormValidatorMessage = element(by.id('full-form_validator'));
  }
 
  public async clickEstimateProjectButton() {
    await browser.actions().mouseMove(this.estimateProjectButton).perform();
    await this.estimateProjectButton.click();
  }

  public async enterTextToNameInput(name) {
    await browser.actions().mouseMove(this.nameInput).perform();
    await this.nameInput.sendKeys(name)
  }

  public async selectNdaYesRadioButton() {
    await browser.actions().mouseMove(this.ndaYesRadio).perform();
    await this.ndaYesRadio.click();
  }

  public async submitForm() {
    await browser.actions().mouseMove(this.submitEstimationFormButton).perform();
    await this.submitEstimationFormButton.click();
  }
}
