import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | country-layer-page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:country-layer-page');
    assert.ok(route);
  });
});
