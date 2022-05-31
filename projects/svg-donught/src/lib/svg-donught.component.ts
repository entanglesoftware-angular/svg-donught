import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  donughtDefaultConfig,
  donughtDefaultSegmentConfig,
  donughtDefaultTextConfig,
} from './svg-donught.default';
import {
  IDonughtSegmentArray,
  IDonughtSegmentArrayConfig,
  IDonughtTextArray,
  IDonughtTextArrayConfig,
  IDonughtConfig,
} from './svg-donught.interface';

@Component({
  selector: 'app-svg-donught[config]',
  templateUrl: './svg-donught.component.html',
  styleUrls: ['./svg-donught.component.scss'],
})
export class SvgDonughtComponent implements OnChanges {
  /**
   * @var config : IDonughtConfig
   * input variable used for constructing donught
   */
  @Input() config!: IDonughtConfig;

  /**
   * @var
   * used in the template
   */

  donughtSegmentArr: IDonughtSegmentArray[] = [];
  donughtTextArr: IDonughtTextArray[] = [];

  /**
   * default configuration used
   */

  defaultDonughtTextArray: IDonughtTextArrayConfig[] = donughtDefaultTextConfig;
  donughtSvgConfig: IDonughtConfig = donughtDefaultConfig;
  defaultDonughtSegmentArray: IDonughtSegmentArrayConfig[] =
    donughtDefaultSegmentConfig;

  getDonughtSegmentArray(): IDonughtSegmentArrayConfig[] {
    const donughtSegmentArr =
      this.donughtSvgConfig.donughtSegmentArray.length == 0
        ? this.defaultDonughtSegmentArray
        : this.donughtSvgConfig.donughtSegmentArray;

    let donughtSegmentArrayConfig: IDonughtSegmentArrayConfig[] = [];

    if (
      this.donughtSvgConfig.isSpaceBetweenSegments &&
      this.donughtSvgConfig.defaultSpaceBetweenSegmentColor
    ) {
      donughtSegmentArr.forEach((donughtSegment) => {
        const prevSegment: IDonughtSegmentArrayConfig = {
          segmentPercentage:
            this.donughtSvgConfig.defaultSpaceBetweenSegmentPercent! / 2,
          strokeColor: this.donughtSvgConfig.defaultSpaceBetweenSegmentColor!,
        };
        const currSegment = {
          strokeColor: donughtSegment.strokeColor,
          segmentPercentage:
            donughtSegment.segmentPercentage -
            this.donughtSvgConfig.defaultSpaceBetweenSegmentPercent!,
        };
        const nextSegment = prevSegment;
        donughtSegmentArrayConfig.push(prevSegment);
        donughtSegmentArrayConfig.push(currSegment);
        donughtSegmentArrayConfig.push(nextSegment);
      });
    } else {
      donughtSegmentArrayConfig = donughtSegmentArr;
    }

    if (this.donughtSvgConfig.isAntiClockwise) {
      const reversedSegmentArrayConfig: IDonughtSegmentArrayConfig[] = [];

      if (donughtSegmentArr.length == 1) {
        // reverse and original will be same

        const singleSegmentPercent = this.donughtSvgConfig
          .isSpaceBetweenSegments
          ? donughtSegmentArr[0].segmentPercentage -
            this.donughtSvgConfig.defaultSpaceBetweenSegmentPercent!
          : donughtSegmentArr[0].segmentPercentage;
        const singleSegmentColor = donughtSegmentArr[0].strokeColor;
        const defaultSegmentColor = this.donughtSvgConfig.defaultRingColor!;

        console.log(singleSegmentColor, defaultSegmentColor);
        console.log(donughtSegmentArrayConfig);

        donughtSegmentArrayConfig.forEach((donughtSegmentConfig, index) => {
          if (
            donughtSegmentConfig.segmentPercentage == singleSegmentPercent &&
            donughtSegmentConfig.strokeColor == singleSegmentColor
          ) {
            donughtSegmentArrayConfig[index] = Object.assign({
              strokeColor: defaultSegmentColor,
              segmentPercentage: 100 - singleSegmentPercent,
            });
          }
        });
        // Change the default color here
        this.donughtSvgConfig.defaultRingColor = singleSegmentColor;
        console.log(donughtSegmentArrayConfig);
      } else {
        donughtSegmentArrayConfig = reversedSegmentArrayConfig
          .concat(donughtSegmentArrayConfig)
          .reverse();
      }
    }
    return donughtSegmentArrayConfig;
  }

  processDonughtSegment() {
    const donughtSegmentArr = this.getDonughtSegmentArray();

    let currentSegmentLength = 0;

    for (const donughtSegment of donughtSegmentArr) {
      // Circumference − All preceding segments’ total length + First segment’s offset = Current segment offset
      const segmentOffset = 100 - currentSegmentLength + 25;
      currentSegmentLength += donughtSegment.segmentPercentage;

      this.donughtSegmentArr.push({
        strokeColor: donughtSegment.strokeColor,
        strokeDashoffset: segmentOffset.toString(),
        strokeDasharray: [
          donughtSegment.segmentPercentage.toString(),
          (100 - donughtSegment.segmentPercentage).toString(),
        ].join(' '),
      });
    }
  }

  processDonughtText() {
    const donughtTextConfig =
      this.donughtSvgConfig.donughtSegmentTextArray.length == 0
        ? this.defaultDonughtTextArray
        : this.donughtSvgConfig.donughtSegmentTextArray;

    for (const donughtText of donughtTextConfig) {
      this.donughtTextArr.push({
        text: donughtText.text,
        class: `${this.donughtSvgConfig.chartLabelClass} ${
          donughtText.class ?? ''
        }`,
        x: donughtText.x ?? '50%',
        y: donughtText.y ?? '50%',
      });
    }
  }

  constructor() {}

  processDonught() {
    this.donughtSvgConfig = { ...this.donughtSvgConfig, ...this.config };
    this.processDonughtSegment();
    this.processDonughtText();
  }

  resetDonught() {
    this.donughtSegmentArr = [];
    this.donughtTextArr = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resetDonught();
    this.processDonught();
  }
}
