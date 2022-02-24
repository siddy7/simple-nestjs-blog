import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersResolver,
        {
          provide: UsersService,
          useFactory: () => ({
            create: jest.fn((createUserInput: Prisma.UserCreateInput) => (
              {
                "id": 1234,
                ...createUserInput
              }
            )),
            update: jest.fn((id: number, updateUserInput: UpdateUserInput) => {
              return updateUserInput
            }),
            remove: jest.fn((id: number) => (
              {
                "id": id,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address_street": "Kulas Light",
                "address_suite": "Apt. 556",
                "address_city": "Gwenborough",
                "address_zipcode": "92998-3874",
                "address_geo_lat": "-37.3159",
                "address_geo_lng": "81.1496",
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company_name": "Romaguera-Crona",
                "company_catchPhrase": "Multi-layered client-server neural-net",
                "company_bs": "harness real-time e-markets"
              }
            )),
            findOne: jest.fn((id: number) => (
              {
                "id": id,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address_street": "Kulas Light",
                "address_suite": "Apt. 556",
                "address_city": "Gwenborough",
                "address_zipcode": "92998-3874",
                "address_geo_lat": "-37.3159",
                "address_geo_lng": "81.1496",
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company_name": "Romaguera-Crona",
                "company_catchPhrase": "Multi-layered client-server neural-net",
                "company_bs": "harness real-time e-markets"
              }
            )),
            findAll: jest.fn(() => (
              [
                {
                  "id": 1,
                  "name": "Leanne Graham",
                  "username": "Bret",
                  "email": "Sincere@april.biz",
                  "address_street": "Kulas Light",
                  "address_suite": "Apt. 556",
                  "address_city": "Gwenborough",
                  "address_zipcode": "92998-3874",
                  "address_geo_lat": "-37.3159",
                  "address_geo_lng": "81.1496",
                  "phone": "1-770-736-8031 x56442",
                  "website": "hildegard.org",
                  "company_name": "Romaguera-Crona",
                  "company_catchPhrase": "Multi-layered client-server neural-net",
                  "company_bs": "harness real-time e-markets"
                },
                {
                  "id" : 2,
                  "name": "Ervin Howell",
                  "username": "Antonette",
                  "email": "Shanna@melissa.tv",
                  "address_street": "Victor Plains",
                  "address_suite": "Suite 879",
                  "address_city": "Wisokyburgh",
                  "address_zipcode": "90566-7771",
                  "address_geo_lat": "-43.9509",
                  "address_geo_lng": "-34.4618",
                  "phone": "010-692-6593 x09125",
                  "website": "anastasia.net",
                  "company_name": "Deckow-Crist",
                  "company_catchPhrase": "Proactive didactic contingency",
                  "company_bs": "synergize scalable supply-chains"
                }
              ]
            ))
          })
        }],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createUser', () => {
    it('should create and return the supplied User', async () => {
      const createUserInput = {
        "name": "Siddharthan",
        "username": "sid",
        "email": "sid@sid.com",
        "address_street": "Kulas Light",
        "address_suite": "Apt. 556",
        "address_city": "Gwenborough",
        "address_zipcode": "92998-3874",
        "address_geo_lat": "-37.3159",
        "address_geo_lng": "81.1496",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company_name": "Romaguera-Crona",
        "company_catchPhrase": "Multi-layered client-server neural-net",
        "company_bs": "harness real-time e-markets"
      }
      const user = await resolver.createUser(createUserInput);
      expect(user).toEqual(
        {
          "id": 1234,
          ...createUserInput
        }
      )
    })
  })

  describe('updateUser', () => {
    it('should update and return the updated User', async () => {
      const updateUserInput = {
        "id" : 1234,
        "name": "Siddharthan",
        "username": "sid",
        "email": "sid@sid.com",
        "address_street": "Kulas Light",
        "address_suite": "Apt. 556",
        "address_city": "Gwenborough",
        "address_zipcode": "92998-3874",
        "address_geo_lat": "-37.3159",
        "address_geo_lng": "81.1496",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company_name": "Romaguera-Crona",
        "company_catchPhrase": "Multi-layered client-server neural-net",
        "company_bs": "harness real-time e-markets"
      }
      const user = await resolver.updateUser(updateUserInput);
      expect(user).toEqual(updateUserInput);
    })
  })

  describe('removeUser', () => {
    it('should delete the user with given id and return the deleted user', async () => {
      const user = await resolver.removeUser(1234);
      expect(user).toEqual(
        {
          "id": 1234,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address_street": "Kulas Light",
          "address_suite": "Apt. 556",
          "address_city": "Gwenborough",
          "address_zipcode": "92998-3874",
          "address_geo_lat": "-37.3159",
          "address_geo_lng": "81.1496",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company_name": "Romaguera-Crona",
          "company_catchPhrase": "Multi-layered client-server neural-net",
          "company_bs": "harness real-time e-markets"
        }
      )
    })
  })

  describe('getUser', () => {
    it('should find and return the corresponing user', async () => {
      const user = await resolver.findOne(1234);
      expect(user).toEqual(
        {
          "id": 1234,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address_street": "Kulas Light",
          "address_suite": "Apt. 556",
          "address_city": "Gwenborough",
          "address_zipcode": "92998-3874",
          "address_geo_lat": "-37.3159",
          "address_geo_lng": "81.1496",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company_name": "Romaguera-Crona",
          "company_catchPhrase": "Multi-layered client-server neural-net",
          "company_bs": "harness real-time e-markets"
        }
      )
    })
  })

  describe('getUsers', () => {
    it('should find and return a list of users', async () => {
      const users = await resolver.findAll()
      expect(users).toContainEqual(
        {
          "id" : 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address_street": "Victor Plains",
          "address_suite": "Suite 879",
          "address_city": "Wisokyburgh",
          "address_zipcode": "90566-7771",
          "address_geo_lat": "-43.9509",
          "address_geo_lng": "-34.4618",
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company_name": "Deckow-Crist",
          "company_catchPhrase": "Proactive didactic contingency",
          "company_bs": "synergize scalable supply-chains"
        }
      )
    })
  })
});
