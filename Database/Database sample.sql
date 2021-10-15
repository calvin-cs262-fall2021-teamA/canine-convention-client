-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE User (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	passwords varchar(50) NOT NULL,
	Phone_number varchar(50) NOT NULL,
	time timestamp
	);

CREATE TABLE Dog (
	ID integer PRIMARY KEY, 
	Age varchar(50) NOT NULL,
	Breed varchar(50) NOT NULL,
	Personality varchar(50) NOT NULL,
	Gender varchar(50) NOT NULL,
	Neutered? varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Event (
	UserID REFERENCES User(ID), 
	DogID integer REFERENCES Dog(ID),
	location varchar(50) NOT NULL,
	Time integer,
	);

-- Allow users to select data from the tables.
GRANT SELECT ON User TO PUBLIC;
GRANT SELECT ON Dog TO PUBLIC;
GRANT SELECT ON Event TO PUBLIC;

