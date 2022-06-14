import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { localize } from '@lion/localize';
import '../../locale/inline-data.js';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';
const el = await fixture(html`<loanemi-details></loanemi-details>`);
const button = el.shadowRoot.querySelectorAll('lion-button');

describe('Loan EMI details', () => {
  // Write test cases inside this block
  beforeEach(function () {
    localStorage.setItem(
      'emi',
      '{"interestRate":"7.00","monthlyEMI":"447.73","principal":"10000.00","interest":"745.42","totalAmount":"10745.42"}'
    );
  });
  afterEach(function () {
    localStorage.removeItem('emi');
  });

  it('checks for accessibility', async () => {
    expect(el).to.be.accessible();
  });

  it('checks for h2 heading textValue', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.be.exist;
    expect(h2.textContent).to.be.equal('EMI Details');
  });

  it('checks for spy the method _toBasicDetails', () => {
    const SpyMethodBasicDetails = Sinon.spy(el, '_toBasicDetails');
    button[0].click();
    expect(SpyMethodBasicDetails.calledOnce).to.be.true;
  });

  it('checks for spy the method _toCustomer', () => {
    const SpyMethodToCustomer = Sinon.spy(el, '_toCustomer');
    button[1].click();
    expect(SpyMethodToCustomer.calledOnce).to.be.true;
  });
});
