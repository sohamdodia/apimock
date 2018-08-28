import * as handlers from './handlers';

const routes = {
  loop: {
    method: 'GET',
    path: '/loop',
    handler: handlers.loop
  },

  csv2json: {
    method: 'POST',
    path: '/csv2json',
    handler: handlers.csv2jsonHandler,
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  }
}

export default routes;
