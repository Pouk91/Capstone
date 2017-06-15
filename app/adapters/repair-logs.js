import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    // console.log(api)
    let serialized = this.serialize(record, {includeId: true});
    // console.log(serialized)
    let repairsId = serialized.repair_id;
    let url = `${api}/car-repairs/${repairsId}/car-repairs`;
    let data = {item: serialized};

    return this.ajax(url, 'POST', {data});
  }
});
