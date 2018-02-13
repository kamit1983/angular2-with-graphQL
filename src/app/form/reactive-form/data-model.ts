export class Hero {
    id = 0;
    name = '';
    addresses: Address[];
  }
  
  export class Address {
    street = '';
    city   = '';
    state  = '';
    zip    = '';
  }
  
  export const heroes: Hero[] = [
    {
      id: 1,
      name: 'Iron Man',
      addresses: [
        {street: '10880 Malibu Point',  city: 'Malibu', state: 'CA',  zip: '94801'},
        {street: '456 Maple', city: 'Los Angeles', state: 'CA', zip: '94800'},
      ]
    },
    {
      id: 2,
      name: 'Superman',
      addresses: [
        {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
      ]
    },
    {
      id: 3,
      name: 'Batman',
      addresses: [ ]
    },
  ];
  
  export const states = ['CA', 'MD', 'OH', 'VA'];
  
  