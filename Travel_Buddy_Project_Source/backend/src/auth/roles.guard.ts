// import {
//   Injectable,
//   CanActivate,
//   ExecutionContext,
//   ForbiddenException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(
//     private readonly reflector: Reflector,
//     private readonly jwtService: JwtService,
//   ) {}

//   canActivate(context: ExecutionContext): boolean {
//     // Extract roles required for the route from metadata
//     const requiredRoles = this.reflector.get<string[]>(
//       'roles',
//       context.getHandler(),
//     );

//     // If no roles are specified, allow access
//     if (!requiredRoles) {
//       return true;
//     }

//     // Get the request object
//     const request = context.switchToHttp().getRequest();

//     // Extract the token from the Authorization header
//     const token = request.headers.authorization?.split(' ')[1];

//     // If no token is found, deny access
//     if (!token) {
//       throw new ForbiddenException('No token found');
//     }

//     // Decode the JWT token
//     const user = this.jwtService.decode(token) as any;

//     // If decoding fails or no user roles are found, deny access
//     if (!user || !user.roles) {
//       throw new ForbiddenException('Invalid token or no roles found in token');
//     }

//     // Check if the user's roles match any of the required roles for the route
//     const hasRole = requiredRoles.some((role) => user.roles.includes(role));

//     // If no roles match, deny access
//     if (!hasRole) {
//       throw new ForbiddenException('User does not have the required roles');
//     }

//     // If the user has the required role, allow access
//     return true;
//   }
// }

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ForbiddenException('No token found');
    }

    const user = this.jwtService.decode(token) as any;

    if (!user || !user.roles) {
      throw new ForbiddenException('Invalid token or no roles found in token');
    }

    const hasRole = requiredRoles.some((role) => user.roles.includes(role));

    if (!hasRole) {
      throw new ForbiddenException('User does not have the required roles');
    }

    return true;
  }
}
