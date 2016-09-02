export default function ProgrammeService (config, $resource) {
  let service = {};
  const API_URL = `${config.API_URL}/programmes/:id`;

  service.resource = $resource(API_URL, {
    id: '@id'
  }, {
    create: {
      url: `${config.API_URL}/programmes/import`,
      method: 'POST',
      headers: {'content-Type': undefined},
      transformRequest: function (data) {
        return data;
      },
      isArray: true
    },
    read: {
      method: 'GET'
    },
    readAll: {
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

  service.readAll = (data) => {
    return service.resource.readAll(data).$promise;
  }

  service.update = (data) => {
    return service.resource.update(data).$promise;
  }

  service.delete = (data) => {
    return service.resource.delete(data).$promise;
  }

  return service;
}
