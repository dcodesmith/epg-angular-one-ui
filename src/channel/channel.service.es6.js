export default function ChannelService (config, $resource) {
  let service = {};
  let API_URL = config.API_URL + '/channels/:id';

  service.resource = $resource(API_URL, {
    id: '@id'
  }, {
    create: {
      method: 'POST'
    },
    read: {
      method: 'GET',
      isArray: true
    },
    update: {
      method: 'PUT'
    },
    delete: {
      method: 'DELETE'
    }
  });

  service.create = (data) => {
    return service.resource.create(data).$promise;
  }

  service.read = (data) => {
    return service.resource.read(data).$promise;
  }

  service.update = (data) => {
    return service.resource.update(data).$promise;
  }

  service.delete = (data) => {
    return service.resource.delete(data).$promise;
  }

  return service;
}

// module.exports = function (app) {
//   app.service('UserService', UserService);
// }

// class MyController {
//   constructor(userService) {
//     userService.getFullName()
//       .then(result => this.userName = result.fullName);
//   }
// }
