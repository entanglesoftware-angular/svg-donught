# Svg Donught

## A responsive svg library for donut formation

![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fentanglesoftware-angular%2Fsvg-donught&labelColor=%231a214d&countColor=%23bb3624&style=flat)

Svg Donught is an angular based lightweight library used for making donut chart with svg which make it extra-ordinary responsive even for the mobiile view. You will have full control over the chart.

## Demo

You can find the demo link [here](https://entanglesoftware-angular.github.io/svg-donught/)

## Installation

`npm i svg-donught`

## Usage

1. Register the `SvgDonughtModule` module into correct module (e.g app.module.ts)
   > `import { SvgDonughtModule } from 'svg-donught';`

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SvgDonughtModule } from "svg-donught";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SvgDonughtModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. Make a variable inside your component of type `IDonughtConfig`
   > `import { IDonughtConfig } from 'svg-donught/lib/svg-donught.interface';`

```typescript
import { Component } from "@angular/core";
import { IDonughtConfig } from "svg-donught/lib/svg-donught.interface";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "donught-demo";
  defaultSegmentDonught: IDonughtConfig = {
    donughtSegmentArray: [],
    donughtSegmentTextArray: [],
  };
}
```

3. Include the `app-svg-donught` selector into your template

```typescript
<app-svg-donught [config]="defaultSegmentDonught"></app-svg-donught>
```

Hurray You are good to go !! 😋 😋

## API

> `import { SvgDonughtModule } from 'svg-donught';`

`selector: app-svg-donught`

### Interfaces

- IDonughtConfig - interface for donught configuration
- IDonughtSegmentArrayConfig - interface for donught segment array configuration
- IDonughtTextArrayConfig - interface for donught text array

### @Inputs()

| Input  | Type           | Required | Description               |
| ------ | -------------- | -------- | ------------------------- |
| config | IDonughtConfig | **Yes**  | Configuration for donught |

### Interface definitions

#### IDonughtSegmentArrayConfig

| Input             | Type   | Required | Description                   | Defaults |
| ----------------- | ------ | -------- | ----------------------------- | -------- |
| strokeColor       | string | **Yes**  | Color of donught segment      |          |
| segmentPercentage | string | **Yes**  | Percentage of donught segment |          |

#### IDonughtTextArrayConfig

| Input | Type   | Required | Description                  | Defaults |
| ----- | ------ | -------- | ---------------------------- | -------- |
| text  | string | **Yes**  | Configuration for donught    |          |
| class | string | **No**   | Class of svg text            |          |
| x     | string | **No**   | Horizontal alignment of text | 50%      |
| y     | string | **No**   | Vertical alignment of text   | 50%      |

#### IDonughtConfig

| Input                             | Type                       | Required | Description                                | Defaults                                       |
| --------------------------------- | -------------------------- | -------- | ------------------------------------------ | ---------------------------------------------- |
| donughtSegmentArray\*             | IDonughtSegmentArrayConfig | **Yes**  | Segments used for construction of donughts | []                                             |
| donughtSegmentTextArray\*         | IDonughtTextArrayConfig    | **Yes**  | Centered text of donught                   | []                                             |
| isSpaceBetweenSegments            | boolean                    | **No**   | Is Space between segment needed            | false                                          |
| defaultSpaceBetweenSegmentPercent | number                     | **No**   | Percent used for b/w segment               | 1 % gap b/w segements                          |
| height                            | string                     | **No**   | Height of donught w.r.t container          | 100%                                           |
| width                             | string                     | **No**   | Width of donught w.r.t container           | 100%                                           |
| viewbox                           | string                     | **No**   | View Box of the svg container              | 0 0 42 42                                      |
| strokeWidth                       | string                     | **No**   | Stroke width of the svg                    | 5                                              |
| donughtContext                    | string                     | **No**   | Context of svg                             | 21                                             |
| donughtRadius                     | string                     | **No**   | Radius of donught                          | 15.91549430918952 [100/2π = 15.91549430918952] |
| donughtHoleRadius                 | string                     | **No**   | Radius of donught                          | 11.1408460164 [70/2π = 11.1408460164]          |
| defaultRingColor                  | string                     | **No**   | Default color of ring                      | #D7E4EC                                        |
| innerRingColor                    | string                     | **No**   | Default color of inner ring                | transparent                                    |
| ringStrokeColor                   | string                     | **No**   | Default color of ring stroke               | #ccc                                           |
| donughtHoleColor                  | string                     | **No**   | Default color of donught hole              | #fff                                           |
| svgClass                          | string                     | **No**   | Default class of svg                       | donught-svg additional-svg                     |
| donughtContainerClass             | string                     | **No**   | Default class of donught container         | donught additional-donught                     |
| donughtHoleClass                  | string                     | **No**   | Default class of donught hole              | donught-hole additional-hole                   |
| donughtRingClass                  | string                     | **No**   | Default class of donught ring              | donught-ring additional-ring                   |
| donughtSegmentClass               | string                     | **No**   | Default class of donught segment           | donught-segment additional-segment             |
| chartTextClass                    | string                     | **No**   | Default class of chart text                | chart-text additional-chart-text               |
| chartLabelClass                   | string                     | **No**   | Default class of chart label               | chart-label additional-chart-label             |

## Technologies Used

`svg-donught` uses following tech to work properly:

- [Angular 13] - HTML enhanced for web apps!
- [scss] - an extension to css

Svg-donught is an open source project with a [public repository][dill]
on GitHub.

## Examples configurations

`1. Simple one segment configuration donught`

```typescript
oneSegmentConfig: IDonughtConfig = {
  defaultRingColor: "#001f3f",
  donughtSegmentTextArray: [
    {
      text: "One Color",
      class: "first",
    },
    {
      text: "donught",
      class: "second",
    },
  ],
  donughtSegmentArray: [
    {
      strokeColor: "#85144b",
      segmentPercentage: 40,
    },
  ],
};
```

`2. Anti-clockwise space b/w segments one segment donught`

```typescript
oneSegmentConfigAntiClockwiseWithSpace: IDonughtConfig = {
  defaultRingColor: "#001f3f",
  donughtSegmentTextArray: [
    {
      text: "Anti clockwise",
      class: "first",
    },
    {
      text: "space b/w",
      class: "second",
    },
  ],
  donughtSegmentArray: [
    {
      strokeColor: "#85144b",
      segmentPercentage: 40,
    },
  ],
  isAntiClockwise: true,
  isSpaceBetweenSegments: true,
};
```

`3. Three segment donught with space b/w of 12 percent`

```typescript
threeSegmentDonughtWithTwelvePercentWhiteSpace: IDonughtConfig = {
  donughtSegmentArray: [
    {
      strokeColor: "#E3B448",
      segmentPercentage: 40,
    },
    {
      strokeColor: "#CBD18F",
      segmentPercentage: 23,
    },
    {
      strokeColor: "#3A6B35",
      segmentPercentage: 37,
    },
  ],
  donughtSegmentTextArray: [
    {
      text: "3 Segment",
      class: "first",
    },
    {
      text: "space b/w",
      class: "second",
    },
  ],
  isSpaceBetweenSegments: true,
  defaultSpaceBetweenSegmentPercent: 12,
};
```

## Development

Want to contribute? Great! You are welcome here !! Let's build together 🙂

Fork or clone the repo from [our repository][dill]

```sh
git clone https://github.com/entanglesoftware-angular/svg-donught
```

Open your favorite Terminal and navigate to the project directory.

```sh
cd svg-donught
```

Start the project using following command.

```sh
ng serve
```

Open your favorite browser and hit the url.

```sh
http://localhost:4200/
```

Make a change in your file and instantaneously see your updates!!

## License

MIT

## 🤝 Connect with us:

Want to stay tuned for latest updates or share feedbacks. Follow us at following:

<a href="https://www.linkedin.com/in/yushi95/"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/linkedin.svg" alt="Yu Shi | LinkedIn" width="21px"/></a>
<a href="https://instagram.com/yushi.95"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/instagram.svg" alt="Yu Shi | Instagram" width="21px"/></a>
<a href="https://yushi95.medium.com/"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/medium.svg" alt="Yu Shi | Medium" width="21px"/></a>
</br>

💬 If you have any question/feedback, please do not hesitate to reach out to me at tech@entanglesoftware.com

## 📈 GitHub Stats

[![Yu's github stats](https://github-readme-stats.vercel.app/api?username=entanglesoftware)](https://github.com/entanglesoftware-angular)

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/entanglesoftware-angular/svg-donught
[git-repo-url]: https://github.com/entanglesoftware-angular/svg-donught
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angular 13]: https://angular.io/
[scss]: https://sass-lang.com/
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
