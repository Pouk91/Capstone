import DS from 'ember-data';

export default DS.Model.extend({
  repairname:  DS.attr('string'),
  repairdate:  DS.attr('datetime'),
  suggestedmaintenancedate: DS.attr('datetime'),
  repaircost: DS.attr('decimal'),
  repaircomment:  DS.attr('string')
});
