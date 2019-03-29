import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
import * as sinon from 'sinon'
import chalk from 'chalk'
import _ from 'lodash'

export default class AjaxStub {

  static newStub() {
    return new AjaxStub()
  }

  constructor() {
    this.stub = sinon.stub()
  }

  instance() {
    return this.stub
  }

  success(options, response, status = 200) {
    return this.stubAjax(options, () => Observable.of({
      response,
      status: status
    }))
  }

  error(options, response, status) {
    return this.stubAjax(options, () => Observable.throw({
      xhr: {
        response: response
      },
      status: status
    }))
  }

  stubAjax(options, requestHandler) {
    this.stub.withArgs(options).callsFake(requestHandler);
    this.stub.callsFake((actualOptions) => {
      assertRequestsDifference(options, actualOptions)
    });
    return this
  }
}

const assertRequestsDifference = (expectedOptions, actualOptions) => {
  const areNotSame = !_.isEqual(expectedOptions, actualOptions);
  if (areNotSame) {
    process.stdout.write(chalk.red('\nUnable to match request\'s actual parameters with expected\n'));
    expect(actualOptions).toEqual(expectedOptions)
  }
};
