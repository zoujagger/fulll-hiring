import { Vehicle } from "./Vehicule";
import {v4 as uuidv4} from 'uuid';



export class Fleet {

    private vehicles: Vehicle[] = [];
    public readonly fleetId: string;


    constructor(public readonly userId: string, public name: string) {
       this.fleetId = uuidv4() + userId;
    }

    registerVehicle(vehicle: Vehicle): void {
        if (!this.vehicles.some(v => v.vehiclePlateNumber === vehicle.vehiclePlateNumber)) {
            this.vehicles.push(vehicle);
        } else {
            throw new Error('This vehicle has already been registered into fleet');
        }
    }

    hasVehicle(vehicleId: string): boolean {
        return this.vehicles.some(v => v.vehiclePlateNumber === vehicleId);
    }
}