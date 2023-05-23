import { PassportSerializer } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "../typeorm/entities/User";

@Injectable()
export class SessionSerializer extends PassportSerializer{
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: User, done: Function) {
    console.log('Serialize user')
    done(null, user)
  }

  async deserializeUser(payload: any, done: Function) {
    // @ts-ignore
    const user = await this.authService.findUser(payload.id);
    console.log('Deserialize user')
    console.log(user)
    return user? done(null, user): done(null, null)
  }
}