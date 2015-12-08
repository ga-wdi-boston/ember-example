import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  yellsSorting: ['createdAt:desc'],
  sortedYells: Ember.computed.sort('yells', 'yellsSorting')
});
