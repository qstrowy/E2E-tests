import {browser} from 'protractor';
import { EstimateProject } from '../pages/estimateProjectElements';
import { JoinConciseElements } from '../pages/joinConciseElements';

describe('This test is to verify if validation on project estimation form works correctly', () => {

  const estimateProject = new EstimateProject();
  const joinConcise = new JoinConciseElements();

  const name = 'Test1';
  const validationFormMessage = 'There are errors in your form. Please fill required fields.';

  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get(estimateProject.servicesUrl);
  });  

  it('should check if user is on Services page and if main menu is displayed', async () => {
    expect(browser.getCurrentUrl()).toContain('/services');
    expect(joinConcise.mainMenuComponent.isDisplayed()).toBe(true, 
      'Main menu element is not displayed.');
  });

  it('should press on Estimate Project button', async () => {
    await estimateProject.clickEstimateProjectButton();
    await expect(estimateProject.estimateProjectTitle.isDisplayed()).toBe(true, 
      'Estimate project title is not present.');
  });

  it('should enter Name in form', async () => {
    await estimateProject.enterTextToNameInput(name);
    await expect(estimateProject.nameInput.getAttribute('value')).toEqual(name);
  });

  it('should check NDA Yes radio button and verify if correct radio button is selected', async () => {
    await estimateProject.selectNdaYesRadioButton();
    await expect(estimateProject.ndaYesRadio.isSelected()).toBe(true);
    await expect(estimateProject.ndaNoRadio.isSelected()).toBe(false);
  });

  it('should click on estimate Form (submit) button', async () => {
    await estimateProject.submitForm();
    await expect(estimateProject.fullFormValidatorMessage.getText()).toContain(validationFormMessage);
  });
});
