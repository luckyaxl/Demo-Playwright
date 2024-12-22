import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('pin code 1 of').click();
  await page.getByLabel('pin code 1 of').fill('2');
  await page.getByLabel('pin code 2 of').fill('4');
  await page.getByLabel('pin code 3 of').fill('4');
  await page.getByLabel('pin code 4 of').fill('2');
  await page.getByRole('button', { name: 'Verify' }).click();
  await expect(page.locator('[id="toast\\:toast\\:1\\:description"]')).toContainText('Toast Description');
});