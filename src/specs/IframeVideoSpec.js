// @flow

import {UnclickableBlotSpec} from './UnclickableBlotSpec';
import {BlotFormatter} from '../BlotFormatter';

export class IframeVideoSpec extends UnclickableBlotSpec {
  constructor(formatter: BlotFormatter) {
    super(formatter, 'iframe.ql-video');
  }
}
