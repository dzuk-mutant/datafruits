import ApplicationAdapter from './application';
import classic from 'ember-classic-decorator';

@classic
export default class TrackFavorite extends ApplicationAdapter {
  namespace = 'api';
}
