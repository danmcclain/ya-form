import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { set } = Ember;

moduleForComponent('ya-form', {
  integration: true,
  beforeEach() {
    set(this, 'user', { firstName: 'Derek', lastName: 'Zoolander' });
  }
});

test('should render the form', function(assert) {
  this.render(hbs`<div>
                    {{#ya-form user as |form|}}
                      <p>{{form.model.firstName}}</p>
                    {{/ya-form}}
                  </div>`);

  assert.equal(this.$('form').length, 1, 'there is a form');
  assert.equal(this.$('form p:contains("Derek")').length, 1, 'yields contents');
});
