import Ember from 'ember';
import layout from '../../templates/ya-form';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'form',
  attributeBindings: ['novalidate'],
  novalidate: true
});

