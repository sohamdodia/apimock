import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 

let routes = [];
routes.push(testRoutes.hello);
routes.push(prodRoutes.loop);
routes.push(prodRoutes.csv2json);

export default routes;