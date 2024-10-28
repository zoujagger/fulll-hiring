const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

import  { Vehicle }  from '../../src/Domain/entities/Vehicule';
import  { Fleet }  from '../../src/Domain/entities/Fleet';





// Dummy fleet and vehicle data for the tests
let fleet : Fleet;
let anotherFleet : Fleet;
let vehicle : Vehicle;


// Step Definitions
Given('my fleet', function () {
    fleet = new Fleet("usetId1", "FleetB1111");
});

Given('a vehicle', function () {
    vehicle = new Vehicle('123ABC', 'Nissan'); // Sample vehicle
});

When('I register this vehicle into my fleet', function () {
    if (!fleet.hasVehicle(vehicle.vehiclePlateNumber)) {
        fleet.registerVehicle(vehicle); // Add the vehicle if it's not already in the fleet
    } else {
        this.errorMessage = 'This vehicle has already been registered into my fleet';
    }
});

Then('this vehicle should be part of my vehicle fleet', function () {
    assert.ok(fleet.hasVehicle(vehicle.vehiclePlateNumber), 'Vehicle should be in the fleet');
});

Given('I have registered this vehicle into my fleet', function () {
    fleet.registerVehicle(vehicle); // Register vehicle into the fleet
});

When('I try to register this vehicle into my fleet', function () {
    if (fleet.hasVehicle(vehicle.vehiclePlateNumber)) {
        this.errorMessage = 'This vehicle has already been registered into my fleet';
    } else {
        fleet.registerVehicle(vehicle);
    }
});

Then('I should be informed this vehicle has already been registered into my fleet', function () {
    assert.strictEqual(this.errorMessage, 'This vehicle has already been registered into my fleet');
});

Given('the fleet of another user', function () {
    anotherFleet = new Fleet("usetId2", "Fleet2222");; // Another user's fleet
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
    anotherFleet.registerVehicle(vehicle); // Add the vehicle to another user's fleet
});

Then('this vehicle should be part of my vehicle fleet and has belong another fleet', function () {
    assert.ok(fleet.hasVehicle(vehicle.vehiclePlateNumber), 'Vehicle should be in my fleet');
    assert.ok(anotherFleet.hasVehicle(vehicle.vehiclePlateNumber), 'Vehicle should be in my anotherFleet');
});

