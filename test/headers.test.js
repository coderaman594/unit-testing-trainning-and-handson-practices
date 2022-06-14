import { localize } from '@lion/localize';
import '../../locale/inline-data.js';
import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import { Header } from '../src/header/Header.js';
const el = await fixture(html`<loan-header></loan-header>`);
const button = el.shadowRoot.querySelectorAll('button');

describe('loan-header', () => {
  // Write test cases inside this block

  it('checks test for accessibility', async () => {
    expect(el).to.be.accessible();
  });

  it('checks test for the class of form', async () => {
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.have.class('container');
  });

  it('checks the value for header title text', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const headerTxt = await el.shadowRoot.querySelector('p').innerText;
    expect(headerTxt).to.equal('Apply Loan');
  });

  it('checks the accessibility test For EN using class validation', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const enBtn = await el.shadowRoot.querySelector(
      'button[class="en-GB bg-btn-color "]'
    );
    await expect(enBtn).to.be.accessible();
  });

  //test accessibility for NL
  it('checks the accessibility test for NL using id validation', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const nlBtn = await el.shadowRoot.querySelector('button[id="nl-NL"]');
    await expect(nlBtn).to.be.accessible();
  });

  it('checks the accessibility test For language BTN click (EN)', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const enBtn = await el.shadowRoot.querySelector('button[id="en-GB"]');
    await enBtn.click();
    await expect(localize.locale).to.equal('en-GB');
  });

  it('checks the accessibility test For language BTN click(NL)', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const nlBtn = await el.shadowRoot.querySelector('button[id="nl-NL"]');
    await nlBtn.click();
    await expect(localize.locale).to.equal('nl-NL');
  });

  it('checks the accessibility test For localeChanged Event', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const myFunctionStub = Sinon.spy(el, 'localeChanged');
    const nlBtn = await el.shadowRoot.querySelector('button[id="nl-NL"]');
    nlBtn.click();
    expect(myFunctionStub).to.have.callCount(1);
  });
});
