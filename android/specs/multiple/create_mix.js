const assert = require('assert');

describe('Create Mix', () => {
    it('create mix', async () => {
        await browser.pause(3000);
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

        const set_weight_continue = await $('~set_weight_continue');
        await set_weight_continue.waitForDisplayed({ timeout: 3000 });
        await set_weight_continue.click();

        const mix_community = await $('~mix_community');
        await mix_community.waitForDisplayed({ timeout: 1000 });
        await mix_community.click();

        const mix_public = await $('~mix_public');
        await mix_public.waitForDisplayed({ timeout: 1000 });
        await mix_public.click();

        // const mix_note = await $('~mix_note');
        // await mix_note.waitForDisplayed({ timeout: 1000 });
        // await mix_note.addValue('Test');

        const continueM = await $('~continue');
        await continueM.waitForDisplayed({ timeout: 2000 });
        await continueM.click();

        const your_mix_title = await $('~your_mix_title');
        await your_mix_title.waitForDisplayed({ timeout: 2000 });
        const exist = await your_mix_title.isExisting();

        assert(exist);
    });
});
