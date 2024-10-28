import { Fleet } from "../../Domain/entities/Fleet";
import { FleetRepository } from "../../Domain/repositories/FleetRepository";



export class UserCreateFleetCommand {
    constructor(
        public userId: string,
        public fleetName: string
    ) { }
}


// commandHandlers/RegisterVehicleHandler.ts
export class UserCreateFleetHandler {
    constructor(private fleetRepository: FleetRepository) { }

    handle(command: UserCreateFleetCommand): Fleet | null {
        // const fleet = this.fleetRepository.findById(command.fleetId);
        if (!command.userId) {
            throw new Error('Fleet cannot create');
        }

        const fleet = new Fleet(command.userId, command.fleetName);
        this.fleetRepository.save(fleet); 
        return fleet;       
    }
}
