import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | class-names', function (hooks) {
  setupRenderingTest(hooks);

  test('helper works', async function (assert) {
    this.fancy = false;
    this.primary = true;
    this.disabled = true;

    await render(hbs`{{class-names
      "button"
      (if this.fancy "bg-white rounded-lg p-6")
      button--primary=this.primary
      is-disabled=this.disabled
    }}`);

    assert.equal(this.element.textContent, 'button button--primary is-disabled');

    this.set('disabled', false);
    this.set('fancy', true);

    assert.equal(this.element.textContent, 'button bg-white rounded-lg p-6 button--primary');
  });

  test('cn alias works', async function (assert) {
    this.primary = false;
    this.disabled = true;

    await render(hbs`{{cn
      "button"
      button--primary=this.primary
      is-disabled=this.disabled
    }}`);

    assert.equal(this.element.textContent, 'button is-disabled');
  });
});
