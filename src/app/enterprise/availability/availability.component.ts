/**
 * Created by kedar on 29/9/19.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ee-availability',
  templateUrl: 'availability.component.html'
})

export class AvailabilityDemoComponent implements OnInit {

  tzonedata =
    [{ timezone: 'New South Wales' }, { timezone: 'Greenwich Mean Time' },
    { timezone: 'Central European' }, { timezone: 'Vladivostok Standard' },
    { timezone: 'Omsk' }
    ];

  classData = [
    {
      "label": "Physics",
      "colorcode": "red",
      "textcolor": "white",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 5,
              "endtime": 6.30
            },
            // ,
            // {
            //   "starttime": 10,
            //   "endtime": 1
            // }
          ]
        },
        {
          "date": "02-Sep-2019",
          "time": [
            {
              "starttime": 7.30,
              "endtime": 8
            },
            // ,
            // {
            //   "starttime": 10,
            //   "endtime": 1
            // }
          ]
        },
      ]
    },
    {
      "label": "Maths",
      "colorcode": "blue",
      "textcolor": "white",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 9.30,
              "endtime": 10
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "04-Sep-2019",
          "time": [
            {
              "starttime": 10.30,
              "endtime": 11
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "07-Sep-2019",
          "time": [
            {
              "starttime": 12.30,
              "endtime": 13
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        }
      ]
    },
    {
      "label": "Biology",
      "colorcode": "green",
      "textcolor": "white",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 12,
              "endtime": 13
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "08-Sep-2019",
          "time": [
            {
              "starttime": 9.30,
              "endtime": 11
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "10-Sep-2019",
          "time": [
            {
              "starttime": 11,
              "endtime": 12
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        }
      ]
    },
  ];


  doctorData = [
    {
      "label": "Apollo",
      "colorcode": "#ff9900",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 5,
              "endtime": 6.30
            },
            // ,
            // {
            //   "starttime": 10,
            //   "endtime": 1
            // }
          ]
        },
        {
          "date": "02-Sep-2019",
          "time": [
            {
              "starttime": 7.30,
              "endtime": 8
            },
            // ,
            // {
            //   "starttime": 10,
            //   "endtime": 1
            // }
          ]
        },
      ]
    },
    {
      "label": "AIIMS",
      "colorcode": "#ac00e6",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 9.30,
              "endtime": 10
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "04-Sep-2019",
          "time": [
            {
              "starttime": 10.30,
              "endtime": 11
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "07-Sep-2019",
          "time": [
            {
              "starttime": 12.30,
              "endtime": 13
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        }
      ]
    },
    {
      "label": "NIHHANS",
      "colorcode": "#0000b3",
      "textcolor": "white",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 12,
              "endtime": 13
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "08-Sep-2019",
          "time": [
            {
              "starttime": 9.30,
              "endtime": 11
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "10-Sep-2019",
          "time": [
            {
              "starttime": 11,
              "endtime": 12
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        }
      ]
    },
    {
      "label": "CMC",
      "colorcode": "#00cca3",
      "available": [
        {
          "date": "05-Sep-2019",
          "time": [
            {
              "starttime": 12,
              "endtime": 13
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "06-Sep-2019",
          "time": [
            {
              "starttime": 9.30,
              "endtime": 11
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        },
        {
          "date": "09-Sep-2019",
          "time": [
            {
              "starttime": 11,
              "endtime": 12
            },
            // {
            //   "starttime": 11,
            //   "endtime": 14
            // }
          ]
        }
      ]
    },
  ];
  constructor() {
  }
  ngOnInit() {
  }


}
