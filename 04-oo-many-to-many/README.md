Many to Many Relationship
===

## SWBATs
- Implement both sides of a many to many relationships
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate Single Source of Truth by not storing collections of objects on other objects
- Demonstrate Single Source of Truth by not storing one object in multiple collections


## Objectives
- Review Relationships (one to many => has many, belongs to)
- Expand on relationships to express many to many
  - We'll build out a new relationship from scratch to teach this concept

User -< Tweet
League -< Team -< Player  

Driver -< Ride >- Passenger 
Driver has many rides
Driver has many Passengers through Rides

Passenger has many rides
Passenger has many Drivers through Rides

Movie -< Role >- Actor

CodingLibrary -< Library >- Language

Doctor -< Appointment >- Patient
1. For a doctor, find all the appointments
2. For those appointments, get the patient's info

Train -< TimeSlot/ScheduleTime >-  Commuter

AlienSpecies -< Colony >- Planet
1. For a species, find all the colonies
2. For those colonies, get the planet's info
