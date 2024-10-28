import { Vehicle } from "../../Domain/entities/Vehicule";
import { FleetRepository } from "../../Domain/repositories/FleetRepository";



export class RegisterVehicleCommand {
    constructor(
        public fleetId: string,
        public vehicleId: string,
        public vehicleName: string
    ) { }
}


// commandHandlers/RegisterVehicleHandler.ts
export class RegisterVehicleHandler {
    constructor(private fleetRepository: FleetRepository) { }

    handle(command: RegisterVehicleCommand) {
        const fleet = this.fleetRepository.findById(command.fleetId);
        if (!fleet) {
            throw new Error('Fleet not found');
        }

        const vehicle = new Vehicle(command.vehicleId, command.vehicleName);
        fleet.registerVehicle(vehicle);
        this.fleetRepository.save(fleet);
    }
}
