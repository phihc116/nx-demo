import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  }
}
