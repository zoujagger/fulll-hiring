
export type Location = {
    longitude: number;
    latitude: number;
}

export class Vehicle {

    private location: Location;

    constructor(public readonly vehiclePlateNumber: string, public model: string) { }

    updateLocation(location: Location): void {
        this.location = location;
    }
}