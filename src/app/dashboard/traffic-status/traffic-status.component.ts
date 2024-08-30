import { Component } from '@angular/core';

import { DUMMY_TRAFFIC_DATA } from './DUMMY_TRAFFIC_DATA';

@Component({
  selector: 'app-traffic-status',
  standalone: true,
  imports: [],
  templateUrl: './traffic-status.component.html',
  styleUrl: './traffic-status.component.css'
})
export class TrafficStatusComponent {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
