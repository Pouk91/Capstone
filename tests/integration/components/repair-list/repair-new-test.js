import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repair-list/repair-new', 'Integration | Component | repair list/repair new', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repair-list/repair-new}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#repair-list/repair-new}}
      template block text
    {{/repair-list/repair-new}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
