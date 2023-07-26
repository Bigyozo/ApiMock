import Controllers from '../controllers/index';
import Paths from '../paths/index';

module.exports = (app) => {
  app.post(Paths.API001, Controllers.API001);
  app.post(Paths.API002, Controllers.API002);
};
