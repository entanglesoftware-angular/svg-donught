export interface IDonughtSegmentArrayConfig {
  strokeColor: string;
  segmentPercentage: number;
}

export interface IDonughtSegmentArray {
  strokeColor: string;
  strokeDashoffset: string;
  strokeDasharray: string;
}

export interface IDonughtTextArrayConfig {
  text: string;
  class?: string;
  x?: string;
  y?: string;
}

export interface IDonughtTextArray {
  text: string;
  class: string;
  x: string;
  y: string;
}

export interface IDonughtConfig {
  svgClass?: string;
  donughtContainerClass?: string;
  donughtHoleClass?: string;
  donughtRingClass?: string;
  donughtSegmentClass?: string;
  chartTextClass?: string;
  chartLabelClass?: string;
  height?: string;
  width?: string;
  viewbox?: string;
  donughtHoleColor?: string;
  ringStrokeColor?: string;
  innerRingColor?: string;
  defaultRingColor?: string;
  donughtHoleRadius?: string;
  donughtRadius?: string;
  donughtContext?: string;
  strokeWidth?: string;
  isSpaceBetweenSegments?: boolean;
  isAntiClockwise?: boolean;
  defaultSpaceBetweenSegmentColor?: string;
  defaultSpaceBetweenSegmentPercent?: number;
  donughtSegmentArray: IDonughtSegmentArrayConfig[];
  donughtSegmentTextArray: IDonughtTextArrayConfig[];
}
