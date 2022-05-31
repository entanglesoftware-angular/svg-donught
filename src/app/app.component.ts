import { Component } from '@angular/core';
import { IDonughtConfig } from 'dist/svg-donught/lib/svg-donught.interface';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'donught-svg';

  defaultSegmentDonught: IDonughtConfig = {
    donughtSegmentArray: [],
    donughtSegmentTextArray: [],
  };

  defaultColorSegmentDonught: IDonughtConfig = {
    donughtSegmentArray: [],
    defaultRingColor: '#001f3f',
    donughtSegmentTextArray: [
      {
        text: 'Default Color',
        class: 'first',
      },
      {
        text: 'donught',
        class: 'second',
      },
    ],
  };

  oneSegmentConfig: IDonughtConfig = {
    ...this.defaultColorSegmentDonught,
    donughtSegmentTextArray: [
      {
        text: 'One Color',
        class: 'first',
      },
      {
        text: 'donught',
        class: 'second',
      },
    ],
    donughtSegmentArray: [
      {
        strokeColor: '#85144b',
        segmentPercentage: 40,
      },
    ],
  };

  oneSegmentConfigAntiClockwise: IDonughtConfig = {
    ...this.oneSegmentConfig,
    donughtSegmentTextArray: [
      {
        text: 'One Color',
        class: 'first',
      },
      {
        text: 'anti-clockwise',
        class: 'second',
      },
    ],
    isAntiClockwise: true,
  };

  oneSegmentConfigAntiClockwiseWithSpace: IDonughtConfig = {
    defaultRingColor: '#001f3f',
    donughtSegmentTextArray: [
      {
        text: 'Anti clockwise',
        class: 'first',
      },
      {
        text: 'space b/w',
        class: 'second',
      },
    ],
    donughtSegmentArray: [
      {
        strokeColor: '#85144b',
        segmentPercentage: 40,
      },
    ],
    isAntiClockwise: true,
    isSpaceBetweenSegments: true,
  };

  threeSegmentDonught: IDonughtConfig = {
    donughtSegmentArray: [
      {
        strokeColor: '#E3B448',
        segmentPercentage: 40,
      },
      {
        strokeColor: '#CBD18F',
        segmentPercentage: 23,
      },
      {
        strokeColor: '#3A6B35',
        segmentPercentage: 37,
      },
    ],
    donughtSegmentTextArray: [
      {
        text: '3 Segment',
        class: 'first',
      },
      {
        text: 'donught',
        class: 'second',
      },
    ],
  };

  threeSegmentDonughtAnticlockwise: IDonughtConfig = {
    ...this.threeSegmentDonught,
    isAntiClockwise: true,
    donughtSegmentTextArray: [
      {
        text: 'Anti-clockwise',
        class: 'first',
      },
      {
        text: '3 segment',
        class: 'second',
      },
    ],
  };

  threeSegmentDonughtWithWhiteSpace: IDonughtConfig = {
    ...this.threeSegmentDonught,
    isSpaceBetweenSegments: true,
    donughtSegmentTextArray: [
      {
        text: 'Segment',
        class: 'first',
      },
      {
        text: 'space b/w',
        class: 'second',
      },
    ],
  };

  threeSegmentDonughtWithTwelvePercentWhiteSpace: IDonughtConfig = {
    ...this.threeSegmentDonughtWithWhiteSpace,
    defaultSpaceBetweenSegmentPercent: 12,
  };

  threeSegmentDonughtWithTwelvePercentWhiteSpaceAntiClockwise: IDonughtConfig =
    {
      ...this.threeSegmentDonughtWithWhiteSpace,
      defaultSpaceBetweenSegmentPercent: 12,
      isAntiClockwise: true,
    };
}
