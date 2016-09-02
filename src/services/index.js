import ChannelService from './channel.service.es6';
import ProgrammeService from './programme.service';

export default function (app) {
  app.service(ChannelService.name, ChannelService);
  app.service(ProgrammeService.name, ProgrammeService);
}
