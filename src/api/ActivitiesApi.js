export class ActivitiesApi {
  constructor(ajax) {
    this.ajax = ajax;
  }

  getActivities() {
    return this.ajax({
      method: 'GET',
      url: 'https://www.boredapi.com/api/activity'
    })
  }
}