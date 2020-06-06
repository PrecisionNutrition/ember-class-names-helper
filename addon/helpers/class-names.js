import { helper } from '@ember/component/helper';
import classnames from 'classnames';

export default helper(function classNames(params, hash) {
  return classnames(...params, hash);
});
