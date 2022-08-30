export class ParkingLotEntity {
  constructor (
    public code: string,
    public capacity: number,
    public openHour: number,
    public closeHour: number,
    public occupiedSpaces : number
  ) {}

  isOpen (date: Date): boolean {
    const hour = date.getHours()
    return (hour >= this.openHour && hour < this.closeHour)
  }

  isFull (): boolean {
    return this.capacity === this.occupiedSpaces
  }
}
