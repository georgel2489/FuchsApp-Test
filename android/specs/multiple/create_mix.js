const assert = require('assert');

describe('CREATE MIX', () => {
    it('create mix', async () => {
        // await browser.reloadSession();
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

        const intro_button = await $('~Custom');
        await intro_button.waitForDisplayed({ timeout: 2000 });
        await intro_button.click();

        const items = [];
        while (items.length < 6) {
            const r = Math.floor(Math.random() * 9);
            if (items.indexOf(r) === -1) items.push(r);
        }

        for (let j = 0; j < items.length; j++) {
            const intro_button1 = await $(`~item_${items[j]}`);
            await intro_button1.waitForDisplayed({ timeout: 1000 });
            await intro_button1.click();
        }

        const selected_spices_continue = await $('~selected_spices_continue');
        await selected_spices_continue.waitForDisplayed({ timeout: 2000 });
        await selected_spices_continue.click();

        const date = new Date();
        const mix_title = await $('~mix_title');
        await mix_title.waitForDisplayed({ timeout: 1000 });
        await mix_title.addValue(date);

        const plus1 = Math.floor(Math.random() * 5);
        for (let i = 0; i < plus1; i++) {
            const plus = await $(`~plus_${plus1}`);
            await plus.waitForDisplayed({ timeout: 1000 });
            await plus.click();
        }

        const plus2 = Math.floor(Math.random() * 5);
        for (let i = 0; i < plus2; i++) {
            const plus = await $(`~plus_${plus2}`);
            await plus.waitForDisplayed({ timeout: 1000 });
            await plus.click();
        }
        const plusM = await $(`~minus_${plus2}`);
        await plusM.waitForDisplayed({ timeout: 1000 });
        await plusM.click();

        const plus3 = Math.floor(Math.random() * 5);
        for (let i = 0; i < plus3; i++) {
            const plus = await $(`~plus_${plus3}`);
            await plus.waitForDisplayed({ timeout: 1000 });
            await plus.click();
        }

        const plus = await $('~create_mix_continue');
        await plus.waitForDisplayed({ timeout: 2000 });
        await plus.click();

        const addW = Math.floor(Math.random() * 20);
        for (let i = 0; i < addW; i++) {
            const plusW = await $('~plus_weight');
            await plusW.waitForDisplayed({ timeout: 1000 });
            await plusW.click();
        }

        const minusW = await $('~minus_weight');
        await minusW.waitForDisplayed({ timeout: 1000 });
        await minusW.click();

        // const input_weight = await $('~input_weight');
        // await input_weight.waitForDisplayed({ timeout: 3000 });
        // await input_weight.click();

        const set_weight_continue = await $('~set_weight_continue');
        await set_weight_continue.waitForDisplayed({ timeout: 3000 });
        await set_weight_continue.click();

        const mix_community = await $('~mix_community');
        await mix_community.waitForDisplayed({ timeout: 1000 });
        await mix_community.click();

        const mix_public = await $('~mix_public');
        await mix_public.waitForDisplayed({ timeout: 1000 });
        await mix_public.click();

        const continueM = await $('~continue');
        await continueM.waitForDisplayed({ timeout: 2000 });
        await continueM.click();

        const your_mix_title = await $('~your_mix_title');
        await your_mix_title.waitForDisplayed({ timeout: 2000 });
        const exist = await your_mix_title.isExisting();

        // const go_save_mix_qr = await $('~go_save_mix_qr');
        // await go_save_mix_qr.waitForDisplayed({ timeout: 2000 });
        // await go_save_mix_qr.click();

        // const save_mix_qr = await $('~save_mix_qr');
        // await save_mix_qr.waitForDisplayed({ timeout: 2000 });
        // await save_mix_qr.click();

        assert(exist);
    });
});
