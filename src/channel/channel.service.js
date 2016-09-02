function ChannelService(config, $resource) {
  var service = {};
  var API_URL = config.API_URL + '/channel/:id';

  service.resource = $resource(API_URL, { id: '@id' }, {
    create: { method: 'POST' },
    readOne: { withCredentials: true },
    update: { method: 'PUT' },
    delete: { method: 'DELETE' }
  });

  service.create = function(data) {
    return this.resource.create(data).$promise;
  };

  service.readOne = function(data) {
    return this.resource.readOne(data).$promise;
  };

  service.update = function(data) {
    return this.resource.update(data).$promise;
  };

  service.delete = function(data) {
    return this.resource.delete(data).$promise;
  };

  return service;
}

module.exports = ChannelService;
