import _ from 'lodash'

export const buildFullState = (...fns) => compose(fns)({
  activities: []
})

export const withActivities = (activities) => (current) => ({
  ...current,
  activities: [
    ...current.activities,
    ...activities
  ]
})

const compose = (fns) => _.flow(fns)
