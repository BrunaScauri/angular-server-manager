import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { SupportTicketsComponent } from "./dashboard/support-tickets/support-tickets.component";
import { TrafficStatusComponent } from "./dashboard/traffic-status/traffic-status.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ServerStatusComponent, SupportTicketsComponent, TrafficStatusComponent, HeaderComponent, DashboardItemComponent],
})
export class AppComponent {

}
