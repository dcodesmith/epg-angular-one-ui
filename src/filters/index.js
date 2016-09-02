import OrdinalSuffixFilter from './ordinal-suffix.filter';
import TrackTimeFormat from './track-time-format.filter';
import SvgUrl from './svg-url.filter';

export default function (app) {
  app.filter(OrdinalSuffixFilter.name, OrdinalSuffixFilter);
  app.filter(TrackTimeFormat.name, TrackTimeFormat);
  app.filter(SvgUrl.name, SvgUrl);
}
