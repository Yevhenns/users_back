import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers() {
    return [
      { id: 1, name: 'anna', age: '21' },
      { id: 2, name: 'hanna', age: '22' }
    ]
  }
}
