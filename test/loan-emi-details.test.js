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
});
