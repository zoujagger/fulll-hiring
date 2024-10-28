import { Vehicle } from "../entities/Vehicule";


export interface VehicleRepository {
    findAll(): Promise<Vehicle[]>;
    findById(id: string): Promise<Vehicle | null>;
    create(vehicle: Vehicle): Promise<Vehicle>;
    update(vehicle: Vehicle): Promise<void>;
    delete(id: string): Promise<void>;
}