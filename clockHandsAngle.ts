function getClockAngle(hh_mm: string): number {
    // assign hour and minute into 2 number variables
    let hh: number = Number(hh_mm.slice(0,2)) % 12;
    let mm: number = Number(hh_mm.slice(-2))

    // find position of each hand
    let hHand: number = (hh * 360) / 12 + (mm * 360) / (12 * 60);
    let mHand: number = (mm * 360) / 60;

    // calculate smaller angle difference
    let angle = Math.abs(hHand - mHand) < 180 ? Math.abs(hHand - mHand) : 360 - Math.abs(hHand - mHand);

    return angle;
}