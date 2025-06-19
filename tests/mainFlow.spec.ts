import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker/locale/en'

test ('websiteGenerator', async ({page}) => {
await page.goto('https://10web.io/ai-website-builder/')

//Prompt and generation
const promptarea = page.locator('.inputs-container textarea[name="description"]');
await promptarea.click();
await promptarea.pressSequentially('generate a simple website')
await page.locator('span.only_generate_text').click();
await page.waitForURL(/.*setup-onboarding\/v2-ai-website-building.*/);

//Styles and editing
const nextBtn = page.getByText('Next', { exact: true });
await expect(nextBtn).toBeVisible();
await expect(nextBtn).toBeEnabled();
await nextBtn.click();

const colorCards = page.locator('.color-set-container');
const selectedCard = colorCards.nth(3);
await selectedCard.locator('..').click();

const themeOptions = page.locator('.db-style');
const selectedTheme = themeOptions.nth(3);
await selectedTheme.click();

//final generation
const finalGeneratorBtn = page.getByText('Generate', {exact: true});
await finalGeneratorBtn.click() 

//Sign up modal
const signUpModal = page.getByText('Create your free account to view and customize your website.');
await expect(signUpModal).toBeVisible();
await page.getByText('Sign up with Email').click()

const email = faker.internet.email();
const firstName = faker.person.firstName();    
const lastName = faker.person.lastName();       

await page.locator('input[placeholder="Email"]').fill(email)
await page.locator('input[placeholder="First name"]').fill(firstName)
await page.locator('input[placeholder="Last name"]').fill(lastName)
await page.locator('input[placeholder="Password"]').fill('Qw123456@')

await page.locator('.signup-short-flow__title').click({ delay: 50});

const signUpBtn = page.locator('button:has-text("Sign Up")');
await expect(signUpBtn).toBeVisible();
await expect(signUpBtn).toBeEnabled();
await signUpBtn.click();

await expect(page.getByText('Your website is ready!')).toBeVisible();

//Key element
await page.getByText('Preview And Edit').click();
const keyElement = page.getByText('Get Started');
await expect(keyElement).toBeVisible();



});