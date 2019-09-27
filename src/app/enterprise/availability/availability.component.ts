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

  labelData = [
    {
      "label": "Inbound",
      "colorcode": "red",
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

      ]
    },
    {
      "label": "Outbound",
      "colorcode": "blue",
      "available": [
        {
          "date": "01-Sep-2019",
          "time": [
            {
              "starttime": 6.30,
              "endtime": 7
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
          "date": "07-Sep-2019",
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
