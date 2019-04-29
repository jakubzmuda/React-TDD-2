export const activitiesWrapper = (component) => ({
  getNewActivity: () => {
    component.find('[data-test="random-activity-button"]').simulate('click')
  },
  activityAt: (index) => {
    return component.find('[data-test="activity-entry"]').at(index)
  },
  anyActivity: () => {
    return component.find('[data-test="activity-entry"]')
  }

})