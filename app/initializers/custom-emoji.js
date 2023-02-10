import emojione from 'emojione';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  const customEmojis = {
    ':bgs:': {
      custom: true,
      uc_base: 'bgs',
      uc_output: '',
      shortnames: [':bgs:'],
      keywords: ['bgs'],
    },
    ':bgs_pog:': {
      custom: true,
      uc_base: 'bgs_pog',
      uc_output: '',
      shortnames: [':bgs_pog:'],
      keywords: ['bgs_pog'],
    },
    ':mcfiredrill:': {
      custom: true,
      uc_base: 'mcfiredrill',
      uc_output: '',
      shortnames: [':mcfiredrill:'],
      keywords: ['mcfiredrill'],
    },
    ':ovenrake:': {
      custom: true,
      uc_base: 'ovenrake',
      uc_output: '',
      shortnames: [':ovenrake:'],
      keywords: ['ovenrake'],
    },
    ':snailzone:': {
      custom: true,
      uc_base: 'snailzone',
      uc_output: '',
      shortnames: [':snailzone:'],
      keywords: ['snail', 'slimethru'],
    },
    ':trekkie:': {
      custom: true,

      uc_base: 'trekkie',
      uc_output: '',
      shortnames: [':trekkie:', ':trekkietrax:'],
      keywords: ['trekkie', 'trekkietrax'],
    },
    ':datafruits:': {
      custom: true,
      animated: true,
      uc_base: 'datafruits',
      uc_output: '',
      shortnames: [':datafruits:', ':datacoin:'],
      keywords: ['datafruits', 'datacoin'],
      extension: 'gif',
    },
    ':salad_dressing:': {
      custom: true,
      uc_base: 'salad_dressing',
      uc_output: '',
      shortnames: [':salad_dressing:', ':onion_salad_dressing:', ':saladdressing:', ':onionsaladdressing:'],
      keywords: ['salad', 'dressing'],
    },
    ':trash:': {
      custom: true,
      animated: true,
      uc_base: 'cooltrash',
      uc_output: '',
      shortnames: [':trash:', ':cooltrash:'],
      keywords: ['trash', 'cooltrash'],
    },
    ':pizza_spin:': {
      custom: true,
      animated: true,
      uc_base: 'pizza_spin',
      uc_output: '',
      shortnames: [':pizza_spin:'],
      keywords: ['pizza_spin'],
    },
    ':jambox:': {
      custom: true,
      animated: true,
      uc_base: 'jambox',
      uc_output: '',
      shortnames: [':jambox:'],
      keywords: ['jambox'],
    },
    ':gorge:': {
      custom: true,
      uc_base: 'gorge',
      uc_output: '',
      shortnames: [':gorge:', ':gorui:'],
      keywords: ['gorge'],
    },
    ':garf:': {
      custom: true,
      animated: true,
      uc_base: 'garf',
      uc_output: '',
      shortnames: [':garf:', ':garfield:'],
      keywords: ['garf'],
    },
    ':grumby:': {
      custom: true,
      animated: true,
      uc_base: 'grumby',
      uc_output: '',
      shortnames: [':grumby:'],
      keywords: ['grumby'],
    },
    ':strawbur:': {
      custom: true,
      animated: true,
      uc_base: 'strawbur',
      uc_output: '',
      shortnames: [':strawbur:'],
      keywords: ['strawbur'],
    },
    ':orangey:': {
      custom: true,
      animated: true,
      uc_base: 'orangey',
      uc_output: '',
      shortnames: [':orangey:'],
      keywords: ['orangey'],
    },
    ':lemoner:': {
      custom: true,
      animated: true,
      uc_base: 'lemoner',
      uc_output: '',
      shortnames: [':lemoner:'],
      keywords: ['lemoner'],
    },
    ':lemoner_real:': {
      custom: true,
      uc_base: 'lemoner_real',
      uc_output: '',
      shortnames: [':lemoner_real:'],
      keywords: ['lemoner_real'],
    },
    ':cabbage:': {
      custom: true,
      animated: true,
      uc_base: 'cabbage',
      uc_output: '',
      shortnames: [':cabbage:'],
      keywords: ['cabbage'],
    },
    ':banaynay:': {
      custom: true,
      animated: true,
      uc_base: 'banaynay',
      uc_output: '',
      shortnames: [':banaynay:'],
      keywords: ['banaynay'],
    },
    ':watermel:': {
      custom: true,
      animated: true,
      uc_base: 'watermel',
      uc_output: '',
      shortnames: [':watermel:'],
      keywords: ['watermel'],
    },
    ':miniburger:': {
      custom: true,
      uc_base: 'miniburger',
      uc_output: '',
      shortnames: [':miniburger:', ':miniburgertime:'],
      keywords: ['miniburger'],
    },
    ':happytrash:': {
      custom: true,
      uc_base: 'happytrash',
      uc_output: '',
      shortnames: [':happytrash:'],
      keywords: ['happytrash'],
    },
    ':pizzap:': {
      custom: true,
      uc_base: 'pizzap',
      uc_output: '',
      shortnames: [':pizzap:'],
      keywords: ['pizzap'],
    },
    ':shrimpshake:': {
      custom: true,
      uc_base: 'shrimpshake',
      uc_output: '',
      shortnames: [':shrimpshake:'],
      keywords: ['shrimpshake'],
    },
    ':shrimpshake_spicy:': {
      custom: true,
      uc_base: 'shrimpshake_spicy',
      uc_output: '',
      shortnames: [':shrimpshake_spicy:'],
      keywords: ['shrimpshake_spicy'],
    },
    ':duckle:': {
      custom: true,
      uc_base: 'duckle',
      uc_output: '',
      shortnames: [':duckle:'],
      keywords: ['duckle'],
    },
    ':deeyex:': {
      custom: true,
      uc_base: 'deeyex',
      uc_output: '',
      shortnames: [':deeyex:'],
      keywords: ['deeyex'],
    },
    ':deeyef:': {
      custom: true,
      uc_base: 'deeyef',
      uc_output: '',
      shortnames: [':deeyef:'],
      keywords: ['deeyef'],
    },
    ':deeyex_hmm:': {
      custom: true,
      uc_base: 'deeyex_hmm',
      uc_output: '',
      shortnames: [':deeyex_hmm:'],
      keywords: ['deeyex_hmm'],
    },
    ':deeyef_hmm:': {
      custom: true,
      uc_base: 'deeyef_hmm',
      uc_output: '',
      shortnames: [':deeyef_hmm:'],
      keywords: ['deeyef_hmm'],
    },
    ':dxdf:': {
      custom: true,
      uc_base: 'dxdf',
      uc_output: '',
      shortnames: [':dxdf:'],
      keywords: ['dxdf'],
    },
    ':thanks:': {
      custom: true,
      uc_base: 'thanks',
      uc_output: '',
      shortnames: [':thanks:'],
      keywords: ['thanks'],
      animated: true,
    },
    ':anysong:': {
      custom: true,
      uc_base: 'anysong',
      uc_output: '',
      shortnames: [':anysong:'],
      keywords: ['anysong'],
      animated: true,
    },
    ':acid:': {
      custom: true,
      uc_base: 'acid',
      uc_output: '',
      shortnames: [':acid:'],
      keywords: ['acid'],
      animated: true,
    },
    ':good_beverage:': {
      custom: true,
      uc_base: 'good_beverage',
      uc_output: '',
      shortnames: [':good_beverage:'],
      keywords: ['good_beverage'],
    },
    ':sshrimp:': {
      custom: true,
      uc_base: 'sshrimp',
      uc_output: '',
      shortnames: [':sshrimp:'],
      keywords: ['sshrimp'],
    },
    ':sshrimp_clear:': {
      custom: true,
      uc_base: 'sshrimp_clear',
      uc_output: '',
      shortnames: [':sshrimp_clear:'],
      keywords: ['sshrimp_clear'],
    },
    ':thisisamazing:': {
      custom: true,
      animated: true,
      uc_base: 'thisisamazing',
      uc_output: '',
      shortnames: [':thisisamazing:'],
      keywords: ['thisisamazing'],
    },
    ':sorrymustabeentheonionsaladdressing:': {
      custom: true,
      animated: true,
      uc_base: 'sorrymustabeentheonionsaladdressing',
      uc_output: '',
      shortnames: [':sorrymustabeentheonionsaladdressing:'],
      keywords: ['sorrymustabeentheonionsaladdressing'],
    },
    ':greasyhotdogs:': {
      custom: true,
      animated: true,
      uc_base: 'greasyhotdogs',
      uc_output: '',
      shortnames: [':greasyhotdogs:', ':greasyfries:', ':greasyonionrings:'],
      keywords: ['greasyhotdogs'],
    },
    ':iphone_girl:': {
      custom: true,
      uc_base: 'iphone_girl',
      uc_output: '',
      shortnames: [':iphone_girl:'],
      keywords: ['iphone_girl'],
    },
    ':bomboclart_bart:': {
      custom: true,
      uc_base: 'bomboclart_bart',
      uc_output: '',
      shortnames: [':bomboclart_bart:'],
      keywords: ['bomboclart_bart'],
    },
    ':mango_hd:': {
      custom: true,
      uc_base: 'mango_hd',
      uc_output: '',
      shortnames: [':mango_hd:'],
      keywords: ['mango_hd'],
    },
    ':viz:': {
      custom: true,
      animated: true,
      uc_base: 'viz',
      uc_output: '',
      shortnames: [':viz:'],
      keywords: ['viz'],
    },
    ':blend:': {
      custom: true,
      uc_base: 'blend',
      uc_output: '',
      shortnames: [':blend:'],
      keywords: ['blend'],
    },
    ':fire2:': {
      custom: true,
      uc_base: 'fire2',
      uc_output: '',
      shortnames: [':fire2:'],
      keywords: ['fire2'],
    },
    ':cheese_teen:': {
      custom: true,
      uc_base: 'cheese_teen',
      uc_output: '',
      shortnames: [':cheese_teen:'],
      keywords: ['cheese_teen'],
    },
    ':metal_guitar:': {
      custom: true,
      uc_base: 'metal_guitar',
      uc_output: '',
      shortnames: [':metal_guitar:'],
      keywords: ['metal_guitar'],
    },
    ':pensive_booty:': {
      custom: true,
      uc_base: 'pensive_booty',
      uc_output: '',
      shortnames: [':pensive_booty:'],
      keywords: ['pensive_booty'],
    },
    ':pricemaster:': {
      custom: true,
      uc_base: 'pricemaster',
      uc_output: '',
      shortnames: [':pricemaster:'],
      keywords: ['pricemaster'],
    },
    ':glop:': {
      custom: true,
      uc_base: 'glop',
      uc_output: '',
      shortnames: [':glop:'],
      keywords: ['glop'],
    },
    ':glorp:': {
      custom: true,
      uc_base: 'glorp',
      uc_output: '',
      shortnames: [':glorp:'],
      keywords: ['glorp'],
    },
  };

  Object.keys(customEmojis).forEach((emoji) => {
    emojione.emojioneList[emoji] = customEmojis[emoji];
  });

  emojione.shortnames = emojione.shortnames.concat(`|${Object.keys(customEmojis).join('|')}`);

  emojione.regShortNames = new RegExp(
    '<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(' +
      emojione.shortnames +
      ')',
    'gi',
  ); //eslint-disable-line no-useless-escape

  //emojione.imagePathPNG = "/assets/images/emojis/";
  emojione.customImagePathPNG = '/assets/images/emojis/';
}

export default {
  name: 'custom-emoji',
  initialize,
};
