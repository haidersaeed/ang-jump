import { Collectable } from './collectable.model';

export class CollectableService{
	private collectables: Collectable[] = [
		{ description: 'Book collection description.', type: 'Book'},
		{ description: 'Paper collection description.', type: 'Paper'},
		{ description: 'Qujiz collection description.', type: 'Quiz'},
		{ description: 'Photo collection description.', type: 'Photo'},
		{ description: 'Movie collection description.', type: 'Movie'}
	];

	private collection: Collectable[] = [];

	getCollectables(){
		return this.collectables;
	}

	getCollection(){
		return this.collection;
	}

	// add the item to collection
	addToCollection(item: Collectable){
		if(this.collection.indexOf(item) !== -1){
			return;
		}
		this.collection.push(item);
	}

	// remove the item from collection
	removeFromCollection(item: Collectable){
		this.collection.splice(this.collection.indexOf(item), 1);
	}
}