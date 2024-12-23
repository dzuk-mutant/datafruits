import Model, { attr, belongsTo, hasMany, type SyncHasMany } from '@ember-data/model';
import type Shrimpo from './shrimpo';
import type ShrimpoVotingCategoryScore from './shrimpo-voting-category-score';

export default class ShrimpoVotingCategory extends Model {
  @belongsTo('shrimpo') declare shrimpo: Shrimpo;
  @hasMany('shrimpo-voting-category-score') declare shrimpoVotingCategoryScores: SyncHasMany<ShrimpoVotingCategoryScore>;

  @attr('string') declare name: string;
  @attr('string') declare emoji: string;

  get sortedScores() {
    const rankedScores = this.shrimpoVotingCategoryScores.sortBy('ranking')
    const uniqueScores = rankedScores.reduce<ShrimpoVotingCategoryScore[]>((acc: ShrimpoVotingCategoryScore[], curr: ShrimpoVotingCategoryScore) => {
      const existingEntry = acc.find(item => item.shrimpoEntry.get('id') === curr.shrimpoEntry.get('id'));
      if (!existingEntry) {
        // Add a new unique entry
        acc.push(curr);
      }
      return acc;

    }, []);
    return uniqueScores;
  }
}
