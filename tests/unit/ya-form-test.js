import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ya-form', {
  integration: true
});

test('should render the form', function(assert) {
  this.render(hbs`<div>{{#ya-form}}hi{{/ya-form}}</div>`);

  assert.equal(this.$('form').length, 1, 'there is a form');
  assert.equal(this.$('form').text(), 'hi\n', 'yields contents');
});
