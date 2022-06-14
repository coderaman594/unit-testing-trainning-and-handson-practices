import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success', () => {
  // Write test cases inside this block
  it('Checks for Element Accessible', async () => {
    const el = await fixture(html`<loan-success></loan-success>`);
    expect(el).to.be.accessible();
  });
  it('Passes spy on Validataion ', async () => {
    const el = await fixture(html`<loan-success></loan-success>`);
    const mySpyMethod = Sinon.spy(el, '_toHome');
    el.shadowRoot.querySelector('button').click();
    expect(mySpyMethod.calledOnce).to.be.true;
  });
});

describe('Error', () => {
  // Write test cases inside this block
  it('Checks for Element Accessible', async () => {
    const el = await fixture(html`<loan-error></loan-error>`);
    expect(el).to.be.accessible();
  });
  it('checks for home method', async () => {
    const spyMethod = Sinon.spy(el, '_toHome');
    const button = el.shadowRoot.querySelectorAll('lion-button');
    button[0].click();
    expect(spyMethod.calledOnce).to.be.true;
  });
});
