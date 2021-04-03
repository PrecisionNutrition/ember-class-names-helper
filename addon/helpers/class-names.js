import { helper } from '@ember/component/helper';
import classnames from 'classnames';

/**
 * Params and hash are actually Proxies from glimmer:
 *
 * - params is a PositionalArgsProxy: https://github.com/glimmerjs/glimmer-vm/blob/09a959a14c3da4875f460ddfe545a80a7af93b04/packages/%40glimmer/manager/lib/util/args-proxy.ts#L102-L133
 * - hash is a NamedArgsProxy: https://github.com/glimmerjs/glimmer-vm/blob/09a959a14c3da4875f460ddfe545a80a7af93b04/packages/%40glimmer/manager/lib/util/args-proxy.ts#L61-L100
 *
 * and hence have slightly different behaviours than arrays and conventional Javascript objects
 */
export default helper(function classNames(params, hash) {
  // convert hash to a plain Javascript object
  const entries = Object.entries(hash);
  hash = Object.fromEntries(entries);
  return classnames(...params, hash);
});
