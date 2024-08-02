import { value } from './utils';

export class Store {
	value = $state(0);

	increment() {
		this.value = value;
	}
}
