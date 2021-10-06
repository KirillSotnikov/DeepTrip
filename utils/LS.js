export class LS {
  #name = null;
  #lsObject = null;
  constructor(options) {
    this.#name = options.name;

    const lsObject = window.localStorage.getItem(this.#name);
    this.#lsObject = lsObject && lsObject.length ? JSON.parse(lsObject) : {};
  }

  get lsObject() {
    return this.#lsObject;
  }

  uploadInfo() {
    window.localStorage.setItem(this.#name, JSON.stringify(this.#lsObject));
  }

  setLsObject(data) {
    this.#lsObject = data;
  }
}

export class SavedCardsLS extends LS {
  constructor() {
    super({
      name: 'saved-places-list'
    });
  }

  addSavedCard(place) {
    const newPlaces = () => {
      if (this.lsObject.places.includes(place)) return this.lsObject.places;
      return [
        ...this.lsObject.places,
        place
      ]
    }
    const newObject = {
      ...this.lsObject,
      places: this.lsObject.places ? newPlaces() : [place],
    }
    this.setLsObject(newObject);
    this.uploadInfo();
  }

  removeSavedCard(place) {
    const newObject = {
      ...this.lsObject,
      places: this.lsObject.places
        ? this.lsObject.places.filter(item => item !== place)
        : [],
    }
    this.setLsObject(newObject);
    this.uploadInfo();
  }

  get places() {
    return this.lsObject.places || [];
  }

  static mainClient = null;

  static get client () {
    if (!this.mainClient) {
      this.mainClient = new SavedCardsLS();
    }
    return this.mainClient;
  }
}
