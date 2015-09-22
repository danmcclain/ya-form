import Ember from 'ember';
import layout from '../../templates/ya-form';

const { Component } = Ember;

const YaFormComponent = Component.extend({
  layout,
  tagName: 'form',
  attributeBindings: ['novalidate'],
  novalidate: true
});

export default YaFormComponent.reopenClass({
  positionalParams: ['model']
});
