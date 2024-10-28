// src/cli.ts
import { Command } from 'commander';
import { UserCreateFleetCommand, UserCreateFleetHandler } from './App/commands/UserCreateFleetCommandHandler';
import { InMemoryFleetRepository } from './Infra/InMemoryFleetRepository';

const program = new Command();
const fleetService = new InMemoryFleetRepository();

program
  .name('fleet')
  .description('CLI for fleet management')
  .version('1.0.0');

// Create fleet
program
  .command('create <userId>')
  .description('Create a fleet for a user')
  .action((userId: string) => {
    try {
      const createFleetCommand = new UserCreateFleetCommand(userId, "test");
      const  createFleetCommandHandler = new UserCreateFleetHandler(fleetService);

      const fleet = createFleetCommandHandler.handle(createFleetCommand);
      console.log(`Fleet created with ID: ${fleet?.fleetId} with Name ${fleet?.name}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });

// // Register vehicle to fleet
// program
//   .command('register-vehicle <fleetId> <vehiclePlateNumber>')
//   .description('Register a vehicle in the fleet')
//   .action((fleetId: string, vehiclePlateNumber: string) => {
//     try {
//       fleetService.registerVehicle(fleetId, vehiclePlateNumber);
//       console.log(`Vehicle ${vehiclePlateNumber} registered to fleet ${fleetId}`);
//     } catch (error) {
//       console.error(`Error: ${error.message}`);
//     }
//   });

// // Localize vehicle
// program
//   .command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]')
//   .description('Localize a vehicle in the fleet by providing latitude, longitude, and optionally altitude')
//   .action((fleetId: string, vehiclePlateNumber: string, lat: string, lng: string, alt?: string) => {
//     try {
//       const latitude = parseFloat(lat);
//       const longitude = parseFloat(lng);
//       const altitude = alt ? parseFloat(alt) : undefined;

//       fleetService.localizeVehicle(fleetId, vehiclePlateNumber, latitude, longitude, altitude);
//       console.log(`Vehicle ${vehiclePlateNumber} localized at lat: ${lat}, lng: ${lng}${alt ? `, alt: ${alt}` : ''}`);
//     } catch (error) {
//       console.error(`Error: ${error.message}`);
//     }
//   });

program.parse(process.argv);
