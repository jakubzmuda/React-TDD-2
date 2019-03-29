export class ActivitiesApi {
  constructor(ajax) {
    this.ajax = ajax;
  }

  fetchActivities() {
    return this.ajax({
      method: 'GET',
      url: 'https://www.boredapi.com/api/activity'
    })
  }
}