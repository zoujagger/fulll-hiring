
import { Fleet } from "../entities/Fleet";
import { Vehicle } from "../entities/Vehicule";


export interface FleetRepository {
    
    // registerVehicle(vehicle: Vehicle): Promise<Vehicle>;
    findById(id: string): Fleet | null;
    save(fleet: Fleet): void;
}