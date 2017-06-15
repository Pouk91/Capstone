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
      let data = this.get('newRepair');
      data.repair = this.get('repair');
      this.sendAction('save', data);
      this.set('newRepair.repairname', null);
      this.set('newRepair.repairdate', null);
      this.set('newRepair.suggestedmaintenancedate', null);
      this.set('newRepair.repaircost', null);
      this.set('newRepair.repaircomment', null);
      this.set('newRepair', {});
    },

    cancel () {
      this.sendAction('cancel', this.get('repair'));
    },
  },
});
