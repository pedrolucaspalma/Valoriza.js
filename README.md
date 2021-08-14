# Valoriza
This repo is from a personal project I developed during a bootcamp made by Rocketseat.

## What it is

It contains an API that can register multiple users, set one user as an administrator and set multiple tags for each users.

It also contains a database to store all this information.

## What was used
Valoriza was written using TypeScript for all the logic and ran on Node.js. Additional Frameworks: Express.js

As for the database, i've used TypeORM to code all requests and SQLite as the database driver

## Production

### Rules
- User registration
    [ ] Can't register more than one user with the same e-mail address.
    [ ] Can't register a user if it doesn't have an e-mail

- Tag registration
    [ ] Can't register more than one tag with the same name
    [ ] Can't register a tag without a name
    [ ] An user who is not an administrator cannot perform registrations

- Compliment registration
    [ ] An user cannot register a compliment to itself
    [ ] Cannot registry compliments to invalid users
    [ ] User need to be authenticated in application