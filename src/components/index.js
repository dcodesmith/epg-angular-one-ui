import SvgIconDirective from './svg-icon.directive';
import FileChooserDirective from './file-chooser.directive';
import DateSelectorDirective from './date-selector.directive';
import ScheduleItemDirective from './schedule-item.directive';
import ProgrammeGuideDirective from './programme-guide.directive';

export default function (app) {
  app.directive(SvgIconDirective.name, SvgIconDirective);
  app.directive(FileChooserDirective.name, FileChooserDirective);
  app.directive(DateSelectorDirective.name, DateSelectorDirective);
  app.directive(ScheduleItemDirective.name, ScheduleItemDirective);
  app.directive(ProgrammeGuideDirective.name, ProgrammeGuideDirective);
}
