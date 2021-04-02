import { helper } from '@ember/component/helper';
import classnames from 'classnames';

export default helper(function classNames(params, hash) {
  const hashAsObject = {};
  for (const key in hash) {
    hashAsObject[key] = hash[key];
  }
  return classnames(...params, hashAsObject);
});
