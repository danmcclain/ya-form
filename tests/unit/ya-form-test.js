import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { Object: EmberObject, set } = Ember;

moduleForComponent('ya-form', {
  integration: true,
  beforeEach() {
    set(this, 'wrapped', EmberObject.create({
      user: { firstName: 'Derek', lastName: 'Zoolander' }
    }));
  }
});

test('should render the form', function(assert) {
  this.render(hbs`<div>
                    {{#ya-form wrapped as |form|}}
                      <p>{{form.wrapped.user.firstName}}</p>
                    {{/ya-form}}
                  </div>`);

  assert.equal(this.$('form').length, 1, 'there is a form');
  assert.equal(this.$('form p:contains("Derek")').length, 1, 'yields contents');
});
