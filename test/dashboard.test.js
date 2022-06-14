import Sinon from 'sinon';
import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard.js';

describe('dashboard', () => {
  // Checks works
  it('works', async () => {
    const el = await fixture(html`<dash-board></dash-board>`);
  });

  // Checks for accessibility
  it('checks for accessibility', async () => {
    const el = await fixture(html`<dash-board></dash-board>`);
    await expect(el).to.be.accessible;
  });
  
  // Checks for dashboard overview accessibility
  it('checks for Dashboard Overview accessibility', async () => {
    const el = await fixture(html`<dashboard-overview></dashboard-overview>`);
    await expect(el).to.be.accessible;
  });
});
