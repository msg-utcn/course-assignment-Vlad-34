# Authentication NestJS

## What we have 

- In the application we will have 3 modules
  - The `Users Module` which will handle users and verify credentials. It exposes **secured** endpoints for getting information about users.
  - Our good old `Question Management Module` which exposes our **secured** endpoints for handling questions.
  - The new `Auth Module` which exposes 
    - An endpoint to register a user (unsecured)
    - An endpoint to login our user
      - This will require to send the `username` and `password` in order to get an access token

## Auth Module
- Here we have the `auth.module` which imports
  - The `Users Module` to get access to the users
  - The `Passport Module` an middleware to manage our authentication
  - The `JWT Module` an utilities library for handling JWT
    - Here we will provide a `secret` for our JWT through environment variables
    - We will set the `signOn` options with `expirationPeriod` for our JWT of `6000s`

## Libraries to install

#### Dependencies
- `npm install @nestjs/jwt`
- `npm install @nestjs/passport`
- `npm install passport`
- `npm install passport-jwt`
- `npm install passport-local`


#### Dev Dependencies
- `npm install --save-dev @types/passport-jwt`
- `npm install --save-dev @types/passport-local`
- `npm install --save-dev @types/bcrypt` (in case you didn't add it previously)

## Auth Service

- Create `auth.service`
- Annotate with `Injectable()` and add it to `provider` in `auth.module`
- Create a `validate` method which receives the credentials as `LoginUserDto`, verifies the credentials using `users.service` and if valid returns the `user`, otherwise returns `null`
- Create a `login` method
  - Receives a `JwtPayloadDto` (email, userId, sub)
  - Create a jwt token using `JwtService` `sign` method

## Strategies
We will have 2 strategies
- Local Strategy which will handle the `login` endpoint that uses the `username, password`
- The JWT Strategy which is used to check if the `user` is authenticated for our secured routes

### Local Strategy

- Will inherit the generic strategy ```LocalStrategy extends PassportStrategy(Strategy)``` where `Strategy` object is taken from `passport-local`
- We will specify which fields are used in the body of the request ```super({ usernameField: 'email', passwordField: 'password' });```
- Will create a `validate` method which uses the previously created `auth.service` validate method
  - It receives as input `email: string, password: string`
  - If it returns null => throw an `UnauthorizedException`
  - Otherwise, return the user

### Jwt Strategy

- Will inherit the generic strategy ```JwtStrategy extends PassportStrategy(Strategy)``` where `Strategy` object is taken from `passport-jwt`
- We will specify how the token is decoded in the constructor and taking the secret from the `configService`
```typescript   
super({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: false,
  secretOrKey: configService.get('JWT_SECRET'),
});
```
- the `validate` will just send back the decoded token

### Guards
- Create an enum for `AuthGuardTypes` with `Local` and `JWT` as values
- We will create a `LocalAuthGuard` by extending `extends AuthGuard(AuthGuardTypes.Local)` 
- We will create a `JwtAuthGuard` by extending `extends AuthGuard(AuthGuardTypes.JWT)` 

### Controllers
- Create a `auth.controllers` with a `login` endpoint and a `register` endpoint
- Annotate with `@UseGuards(LocalAuthGuard)` the `login` endpoint
- Annotate the `users.controller` and `question-management.controller` with `@UseGuards(JwtAuthGuard)`

## Other Materials

- [Authentication in 100s](https://www.youtube.com/watch?v=UBUNrFtufWo)
- [NestJS Passport](https://docs.nestjs.com/recipes/passport#implementing-passport-jwt)
- [Auth0](https://youtu.be/yufqeJLP1rI) (Optional)
