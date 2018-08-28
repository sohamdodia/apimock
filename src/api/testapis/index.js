import * as handlers from './handlers';

const routes = {
  hello: {
    method: 'GET',
    path: '/hello',
    handler: handlers.hello
  }
};

export default routes;
