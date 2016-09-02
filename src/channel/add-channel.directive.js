import template from './add-channel.tpl';
import _ from 'lodash';

export default function addChannel (ChannelService) {

  function AddChannelController () {
    var vm = this;
    vm.name = name;
    vm.channels = [];
    vm.selectedChannel = '';

    getAllChannel();

    this.add = () => {
      const data = { name: this.name };
      ChannelService
        .create(data)
        .then(res => {
          getAllChannel();
          console.log('res', res);
        }, err => {
          console.log('err', err);
        });
    };

    function getAllChannel () {
      return ChannelService
        .read({})
        .then(function(res){
          vm.channels = res;
          vm.selectedChannel = vm.channels[0].id;
          return vm.channels;
        });
    }
  }

  return {
    restrict: 'E',
    scope: {},
    template: template,
    replace: true,
    controllerAs: 'channel',
    controller: AddChannelController
  }
}

/*
export default function (app) {
  app.directive('addChannel', addChannel);
};
*/
