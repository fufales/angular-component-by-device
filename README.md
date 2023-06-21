# Angular - Render Component By Device

## Install - `ngx-device-detector`

This is an angular wrapper for node-device-detector, which is a library that allows you to detect the device type, brand, model, operating system, browser, and client of a user agent string1. It provides a service and a module that you can import in your app.module.ts file and inject in your components.

```
npm i ngx-device-detector
```

## Usage

To install this library, run:
```
npm install ngx-device-detector --save --force
```

In your component where you want to use the Device Service
```
import { DeviceDetectorService } from 'ngx-device-detector';
```

Declare the variables inside the Component Class
```
// Declare variables
deviceInfo: any;
deviceType: any;
```

Change the constructor and inject the variables
```
// Inject DeviceDetectorService
constructor(private deviceService: DeviceDetectorService)
{
    this.deviceInfo = this.deviceService.getDeviceInfo();
}
```

## Result
The file should looks like this example below:

```
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
```

## Examples

- [testing-lp.component.ts](/src/app/testing-lp/testing-lp.component.ts)
    - On this file you will find the main configuration of the component under the sub-domain `/test`.
- [testing-lp.component.html](/src/app/testing-lp/testing-lp.component.html)
    - On this file you will find the HTML implementation to load different templates base on the device type. (Example below).

### HTML example
```
<app-testing-lp-desktop *ngIf="deviceType === true"></app-testing-lp-desktop>

<app-testing-lp-mobile *ngIf="deviceType === false"></app-testing-lp-mobile>
```


Documented by Christopher Quiros.