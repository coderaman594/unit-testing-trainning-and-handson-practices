import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html`<basic-details></basic-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');

describe('Basic details', () => {
  // Test
  it('works', async () => {
    const el = await fixture(html` <basic-details></basic-details> `);
  });

  // Checks for accessibility
  it('checks for accessibility', async () => {
    expect(el).to.be.accessible;
  });

  // Checks for spy function
  it('checks for spy to _toDashboard', () => {
    const SpyMethod = Sinon.spy(el, '_toDashboard');
    el._toDashboard();
    expect(SpyMethod.calledOnce).to.be.true;
  });

  // Checks for Loan Type Value
  xit('checks for Loan Type Value', async () => {
    const LoanTypeText = await el.shadowRoot.querySelector('#type').textContent;
    //console.log(LoanTypeText);
    expect(LoanTypeText).to.eql('Home Loan');
  });

  // Checks for spy function
  xit('checks for spy function', async () => {
    const amountValue = el.shadowRoot.querySelectorAll('.amount')[0]
      .textContent;
    //console.log(amountValue);
    expect(amountValue).to.equal(10000);
  });

  // Checks for spy function
  it('checks for spy function', async () => {
    const myspy = Sinon.spy(el, '_captureDetails');
    el.shadowRoot.querySelector('form').submit();
    expect(myspy.calledOnce).to.be.false;
  });
});
