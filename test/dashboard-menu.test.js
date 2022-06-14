import Sinon from 'sinon';
import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard.js';

const el = await fixture(html`<dashboard-menu></dashboard-menu>`);
const button = el.shadowRoot.querySelector('button');

describe('dashboard menu', () => {
  // Test
  it('works', async () => {
    const el = await fixture(html`<dashboard-menu></dashboard-menu>`);
  });
  // Checks for accessibility
  it('checks for accessibility', async () => {
    await expect(el).to.be.accessible;
  });
  // Checks for dashboard menu
  it('checks Dashboard menu', async () => {
    const getOverview = Sinon.spy(el, 'getOverview');
    el.firstUpdated();
    expect(getOverview.calledOnce).to.be.true;
  });
  // Checks for spy function
  it('checks for spy to _setTypeInLS', () => {
    const SpyMethod = Sinon.spy(el, '_setTypeInLS');
    button.click();
    expect(SpyMethod.calledOnce).to.be.true;
  });
});
