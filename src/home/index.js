import HomeController from './home.controller';

export default function (app) {
  app.controller(HomeController.name, HomeController);
}
