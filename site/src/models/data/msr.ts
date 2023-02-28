export interface MsrEvent {
  start: string;
  type: string;
  detailuri: string;
  name: string;
}

export interface MsrRecordSet {
  total: number;
}

export interface MsrEvents {
  recordset: MsrRecordSet;
  events: MsrEvent[];
}

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// interface ClockInterface {
//   tick(): void;
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log("beep beep");
//   }
// }
