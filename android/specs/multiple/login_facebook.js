const assert = require('assert');

describe('LOGIN FACEBOOK', () => {
  it('login page', async () => {
    await browser.pause(3000);
    const intro_button = await $('~intro_button');
    await intro_button.waitForDisplayed({ timeout: 2000 });
    await intro_button.click();

    const go_profile = await $('~go_profile');
    await go_profile.waitForDisplayed({ timeout: 2000 });
    await go_profile.click();

    const login_button = await $('~login_button_facebook');
    await login_button.waitForDisplayed({ timeout: 3000 });
    const exist = await login_button.isExisting();
    await login_button.click();

    assert(exist)
  });

});
