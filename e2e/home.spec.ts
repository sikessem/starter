import { expect, test } from "@playwright/test";

test('has "Sikessem" in title', async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Sikessem/);
});
