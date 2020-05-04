import Emitter from 'event-emitter';
import PageDispatcher from './page-dispatcher';

class PageStore extends Emitter {
  constructor() {
    super();

    this.id = 1;
    this.pages = [];
  }

  handle = (payload) => {
    if (payload.action === 'ADD_PAGE') {
      const id = this.id++;
      const title = `New Page ${id}`;

      const page = {
        id,
        title,
      };

      this.pages.push(page);
    }
  };

  getState = () => ({
    pages: this.pages,
  });
}

const pageStore = new PageStore();

PageDispatcher.register((payload) => {
  if (payload.action === 'ADD_PAGE') {
    pageStore.handle(payload);
  }

  pageStore.emit('change');
});

export default pageStore;
