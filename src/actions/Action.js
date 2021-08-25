// @flow

import {BlotFormatter} from '../BlotFormatter';

export class Action {
  formatter: BlotFormatter;

  constructor(formatter: BlotFormatter) {
    this.formatter = formatter;
  }

  onCreate() {}

  onDestroy() {}

  onUpdate() {}
}
