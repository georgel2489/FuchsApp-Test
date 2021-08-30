const assert = require('assert');

describe('LOGIN', () => {
  it('login falied', async () => {
    await browser.reloadSession();
    await browser.pause(3000);
    const intro_button = await $('~intro_button');
    await intro_button.waitForDisplayed({ timeout: 2000 });
    await intro_button.click();

    const go_profile = await $('~go_profile');
    await go_profile.waitForDisplayed({ timeout: 2000 });
    await go_profile.click();

    const email_login = await $('~email_login');
    await email_login.waitForDisplayed({ timeout: 2000 });
    await email_login.addValue("fuchs.dev@devrevolution.com");

    const password_login = await $('~password_login');
    await password_login.waitForDisplayed({ timeout: 2000 });
    await password_login.addValue("BSI#vf2020");

    const remember_me = await $('~remember_me');
    await remember_me.waitForDisplayed({ timeout: 2000 });
    await remember_me.click();

    const login_button = await $('~login_button');
    await login_button.waitForDisplayed({ timeout: 3000 });
    await login_button.click();

    await browser.pause(1000);
    await browser.dismissAlert();
    await browser.pause(1000);

    const error_login = await $('~error_login');
    await error_login.waitForDisplayed({ timeout: 2000 });
    const value_error = await error_login.isExisting();
    assert(value_error)
  });

  it('login succes', async () => {
    await browser.pause(2000);
    const back_login = await $('~back_login');
    await back_login.waitForDisplayed({ timeout: 2000 });
    await back_login.click();

    const go_profile = await $('~go_profile');
    await go_profile.waitForDisplayed({ timeout: 2000 });
    await go_profile.click();

    const email_login = await $('~email_login');
    await email_login.waitForDisplayed({ timeout: 2000 });
    await email_login.addValue("fuchs.dev@devrevolution.com");

    const password_login = await $('~password_login');
    await password_login.waitForDisplayed({ timeout: 2000 });
    await password_login.addValue("BSI#vf2020DevRev");

    const remember_me = await $('~remember_me');
    await remember_me.waitForDisplayed({ timeout: 2000 });
    await remember_me.click();

    const login_button = await $('~login_button');
    await login_button.waitForDisplayed({ timeout: 3000 });
    await login_button.click();

    await browser.pause(1000);
    await browser.dismissAlert();

    const home_custom = await $('~Custom');
    await home_custom.waitForDisplayed({ timeout: 2000 });
    const exist = await home_custom.isExisting();
    assert(exist)
  });
});
