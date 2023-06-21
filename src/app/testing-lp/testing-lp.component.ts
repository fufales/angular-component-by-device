import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-testing-lp',
  templateUrl: './testing-lp.component.html',
  styleUrls: ['./testing-lp.component.css']
})

export class TestingLpComponent {

  // Declare variables
  deviceInfo: any;
  deviceType: any;

  // Inject DeviceDetectorService
  constructor(private deviceService: DeviceDetectorService)
  {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit(): void {
    
    // Check if this device is Desktop
    // Send true or false to deviceType variable
    this.deviceType = this.deviceService.isDesktop();
  }

}
