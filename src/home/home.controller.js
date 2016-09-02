import moment from 'moment';

export default function HomeController($scope, ChannelService, ProgrammeService) {
  var vm = this;
  vm.channelName = '';
  vm.channels = [];
  vm.todaysChannels = [];
  vm.csv = null;
  vm.allProgrammes = [];
  vm.programmeDates = [];
  vm.selectedDateProgrammes = {};

  const DATE_FORMAT = `YYYY-MM-DD`;

  getChannels();
  getProgrammes();

  vm.addChannel = () => {
    let data = {
      name: this.channelName
    };

    ChannelService.create(data).then(res => {
      getChannels();
      vm.channelName = '';
    }, err => {
      console.log('err', err);
    });
  };

  function getChannels() {
    return ChannelService.read().then(res => {
      vm.channels = res;
      return vm.channels;
    });
  }

  function getProgrammes() {
    return ProgrammeService.readAll({
        // find: {
        //   date: {
        //     '$gte': new Date(2016, 2, 11),
        //     '$lt': new Date(2016, 2, 12)
        //   }
        // },
        // sort: 'startTime',
        populate: 'channel'
      })
      .then(res => {
        console.log(res);
        vm.allProgrammes = res;
        vm.programmeDates = getProgrammeDates(res);
        vm.selectedDate = vm.programmeDates[0];
        return vm.result;
      }, function(err) {
        console.log(err);
      });
  }

  $scope.$on('fileChooser:changed', (event, file) => {
    vm.csv = file;
  });

  $scope.$on('dateSelector:changed', (event, selectedDate) => {
    var todaysDate = new Date(selectedDate.date).toISOString();
    setSelectedDateProgrammes(todaysDate);
  });

  function setSelectedDateProgrammes(todaysDate) {
    var todaysProgrammes = [];
    vm.selectedDateProgrammes = {};
    todaysProgrammes = _.filter(vm.allProgrammes, { date: todaysDate });

    vm.todaysChannels = _.uniqBy(_.map(todaysProgrammes, 'channel'), 'code');

    todaysProgrammes.forEach(parseProgrammes);
  }

  function parseProgrammes(programme, index, programmes) {
    vm.selectedDateProgrammes[programme.channel.code] = _.filter(programmes, {
      'channel': programme.channel
    });
  }

  function getProgrammeDates(programmes) {
    let programmeDates = [];
    let dates = programmes.map(function(programme) {
      return new Date(programme.date);
    });
    let endDate = new Date(Math.max.apply(null, dates));
    let startDate = new Date(Math.min.apply(null, dates));
    let numberOfDays = moment(endDate).diff(moment(startDate), 'days') + 1;
    let i;

    for (i = 0; i < numberOfDays; i++) {
      programmeDates[i] = {
        day: i + 1,
        date: moment(startDate).add(i, 'days').format(DATE_FORMAT)
      };
    }

    return programmeDates;
  }

  vm.onUpload = function() {
    let formData = new FormData();

    if (vm.csv) {
      formData.append('programme', vm.csv);
    }

    ProgrammeService.create(formData).then(res => {
      vm.allProgrammes = vm.allProgrammes.concat(res);
      vm.programmeDates = getProgrammeDates(vm.allProgrammes);
    }, err => {
      console.log('err', err);
    });
  }

}
