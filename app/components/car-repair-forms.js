import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],

newRepair: {
    repairname: null,
    repairdate: null,
    suggestedmaintenancedate: null,
    repaircost: null,
    repaircomment: null,
  },

  actions: {

    save () {
      let data = this.get('newTrip');
      data.trip = this.get('trip');
      this.sendAction('save', data);
      this.set('newTrip.location', null);
      this.set('newTrip.start_date', null);
      this.set('newTrip.end_date', null);
      this.set('newTrip.who', null);
      this.set('newTrip.more_info', null);
      this.set('newTrip', {});
    },

    cancel () {
      this.sendAction('cancel', this.get('trip'));
    },
  },
});
