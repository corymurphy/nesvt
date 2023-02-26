export class ClubEvent {
  startDate: string;
  type: string | undefined;
  name: string | undefined;

  constructor(startDate: string) {
    this.startDate = startDate;
  }
}
