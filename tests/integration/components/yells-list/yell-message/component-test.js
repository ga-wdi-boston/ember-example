import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('yells-list/yell-message', 'Integration | Component | yells list/yell message', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{yells-list/yell-message}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#yells-list/yell-message}}
      template block text
    {{/yells-list/yell-message}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
