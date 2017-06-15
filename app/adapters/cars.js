import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    // console.log(api)
    let serialized = this.serialize(record, {includeId: true});
    // console.log(serialized)
    let carId = serialized.car_id;
    let url = `${api}/lists/${carId}/repairs`;
    let data = {item: serialized};

    return this.ajax(url, 'POST', {data});
  }
});
