import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import Sinon from 'sinon';

const el = await fixture(html`<customer-details></customer-details>`);
const button = el.shadowRoot.querySelectorAll('lion-button');

describe('customer details', () => {
  // Test
  it('works', async () => {
    const el = await fixture(html`<customer-details></customer-details> `);
  });

  // Checks for accessibility
  it('checks for accessibility', async () => {
    expect(el).to.be.accessible;
  });

  // Checks for spy function
  it('checks for spy to _toEmidetails', () => {
    const SpyMethod = Sinon.spy(el, '_toEmidetails');
    button[0].click();
    expect(SpyMethod.calledOnce).to.be.true;
  });
});
