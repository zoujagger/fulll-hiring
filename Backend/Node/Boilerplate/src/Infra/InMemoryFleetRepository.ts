// infrastructure/InMemoryFleetRepository.ts
import { Fleet } from '../Domain/entities/Fleet';
import { FleetRepository} from '../Domain/repositories/FleetRepository';

export class InMemoryFleetRepository implements FleetRepository {
    private fleets: Map<string, Fleet> = new Map();


    findById(fleetId: string): Fleet | null {
        return this.fleets.get(fleetId) || null;
    }

    save(fleet: Fleet): void {
        this.fleets.set(fleet.fleetId, fleet);
    }
}
