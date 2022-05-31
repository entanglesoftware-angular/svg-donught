/**
 * Default config used to display the svg donught
 */
export const donughtDefaultSegmentConfig = [
  {
    strokeColor: '#E3B448',
    segmentPercentage: 0,
  },
];

export const donughtDefaultTextConfig = [
  {
    text: 'Default',
    class: 'first',
    y: '50%',
  },
  {
    text: 'donught',
    class: 'second',
    y: '50%',
  },
];

/**
 * donughtRadius r = C/(2π) [100/2π = 15.91549430918952]
 * viewBox [double the cx & cy]
 * donughtContext [cx & cy = 21]
 * donughtHoleRadius [70/2π = 11.1408460164]
 */

export const donughtDefaultConfig = {
  svgClass: 'donught-svg additional-svg',
  donughtContainerClass: 'donught additional-donught',
  donughtHoleClass: 'donught-hole additional-hole',
  donughtRingClass: 'donught-ring additional-ring',
  donughtSegmentClass: 'donught-segment additional-segment',
  chartTextClass: 'chart-text additional-chart-text',
  chartLabelClass: 'chart-label additional-chart-label',
  height: '100%',
  width: '100%',
  viewbox: '0 0 42 42',
  donughtHoleColor: '#fff',
  ringStrokeColor: '#ccc',
  innerRingColor: 'transparent',
  defaultRingColor: '#D7E4EC',
  donughtHoleRadius: '11.1408460164',
  donughtRadius: '15.91549430918952',
  donughtContext: '21',
  strokeWidth: '5',
  isSpaceBetweenSegments: false,
  isAntiClockwise: false,
  defaultSpaceBetweenSegmentColor: '#fff',
  defaultSpaceBetweenSegmentPercent: 1,
  donughtSegmentArray: [],
  donughtSegmentTextArray: [],
};
