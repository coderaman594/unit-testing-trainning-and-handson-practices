import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { stub } from 'sinon';
import * as LoanApplication from '../src/LoanApplication.js';
import '../loan-application.js';

let el;

describe('LoanApplication', () => {
  // Write test cases inside this block

  before(async () => {
    el = await fixture(html`<loan-application></loan-application>`);
  });

  it('checks for accessibility', async () => {
    expect(el).to.be.accessible();
  });
});
