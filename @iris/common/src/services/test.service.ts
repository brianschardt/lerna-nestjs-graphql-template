import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  test() {
    console.log('test*********askdjfhalskdjfhalsdkfq725843958');
  }

  testVar(name: string) {
    console.log(`test var ${name}`);
  }
}
