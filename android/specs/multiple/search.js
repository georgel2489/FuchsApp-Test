const assert = require('assert');
const SEARCH_TEXTS = ['Anise', 'Garlic', 'Coriander', 'Chilli mix', 'Beans', 'Fish', 'lamb', 'chichken', 'pepper', 'Garam Massala', 'Cajun', 'Curry'];

describe('GLOBAL SEARCH', () => {
    it('search', async () => {
        await browser.reloadSession();
        await browser.pause(3000);
        const intro = await $('~intro_button');
        await intro.waitForDisplayed({ timeout: 2000 });
        await intro.click();

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

        for (let text of SEARCH_TEXTS) {
            const search = await $('~global_search');
            await search.waitForDisplayed({ timeout: 2000 });
            await search.addValue(text);
            await browser.pause(3000);
        }

        const search_input = await $('~global_search');
        await search_input.waitForDisplayed({ timeout: 2000 });
        const exist = await search_input.isExisting();
        assert(exist)
    });
});
