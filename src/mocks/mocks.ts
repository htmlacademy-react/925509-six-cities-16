import { PlaceType, LocationLinkType } from '../types/types';

export const placesList: PlaceType[] = [
  {
    id: 'a337d56d-4e89-4df2-ba9b-aafb6fada7eb',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 199,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.1,
  },
  {
    id: '288be741-cb4b-4920-9b53-3e6b3514e282',
    title: 'Wood and stone place',
    type: 'room',
    price: 249,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.945361,
      longitude: 6.962974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
  },
  {
    id: '14355225-995e-4ffe-aa97-f1327c01e11a',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 138,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.860557,
      longitude: 4.376697,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
  },
  {
    id: '6f0e7511-bf7e-4daa-b921-4b28257df80f',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 193,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.842557,
      longitude: 4.363696999999999,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
  },
  {
    id: '991324b0-f17f-4382-a08c-cd6976918b58',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 204,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.35054,
      longitude: 4.908976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
  },
];

export const locationsList: LocationLinkType[] = [
  {
    title: 'Paris',
    link: '#',
  },
  {
    title: 'Cologne',
    link: '#',
  },
  {
    title: 'Brussels',
    link: '#',
  },
  {
    title: 'Amsterdam',
    link: '#',
  },
  {
    title: 'Hamburg',
    link: '#',
  },
  {
    title: 'Dusseldorf',
    link: '#',
  },
];
