import { helper } from '@ember/component/helper';
import emojione from 'emojione';

export function emojiPath(args: any) {
  return emojione.shortnameToPath(args[0]);
}

export default helper(emojiPath);
