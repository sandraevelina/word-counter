beforeAll(async () => {
  await page.goto('http://localhost:3000/');
});

it('basic test', async () => {
  const text = await page.$('p:has-text("learn react")');

  await expect(text).toMatchText('learn react');
});
