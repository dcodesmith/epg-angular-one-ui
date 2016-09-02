var config = require('../config/' + NODE_ENV);

export default function ($provide) {
  $provide.provider('config', () => {
    return {
      $get() {
        return JSON.parse(config);
      }
    }
  });
}
