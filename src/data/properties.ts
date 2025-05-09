export interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  location: string;
  availability: 'Available Now' | 'Coming Soon';
  description: string;
  beds: number;
  bathrooms: number;
  size: number; // in sq ft
}

export const locations = [
  'Poonamallee, Chennai',
  'Pallavaram, Chennai',
  'Nungambakkam, Chennai',
  'Ekkatuthangal, Chennai',
  'Kondhwa, Pune',
  'Hinjawadi, Pune',
  'Andheri East, Mumbai',
  'Vile Parle, Mumbai',
  'Laxmi Nagar, Delhi',
  'South Campus, Delhi'
];

export const properties: Property[] = [
  {
    id: 1,
    title: 'Eugene House',
    image: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 3599,
    location: 'Poonamallee, Chennai',
    availability: 'Available Now',
    description: 'Distinguished location as it offers good connectivity via bus and railway Station.',
    beds: 1,
    bathrooms: 1,
    size: 800
  },
  {
    id: 2,
    title: 'Doncaster House',
    image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 5800,
    location: 'Pallavaram, Chennai',
    availability: 'Available Now',
    description: 'Situated in a location which is conveniently close to hotels, markets and main IT parks.',
    beds: 1,
    bathrooms: 1,
    size: 900
  },
  {
    id: 3,
    title: 'Odense House',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 5500,
    location: 'Nungambakkam, Chennai',
    availability: 'Coming Soon',
    description: 'Premium accommodations promise a harmonious blend of opulence and functionality.',
    beds: 2,
    bathrooms: 1,
    size: 800
  },
  {
    id: 4,
    title: 'Zolo Cascade',
    image: 'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 4200,
    location: 'Ekkatuthangal, Chennai',
    availability: 'Available Now',
    description: 'This property allows its residents easy access to a bunch of IT companies.',
    beds: 3,
    bathrooms: 2,
    size: 1100
  },
  {
    id: 5,
    title: 'Austin House',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 3800,
    location: 'Kondhwa, Pune',
    availability: 'Coming Soon',
    description: 'We offer ample services ranging from fully furnished affordable accommodations to 24X7 security survelliance.',
    beds: 3,
    bathrooms: 2,
    size: 1600
  },
  {
    id: 6,
    title: 'Florence House',
    image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 4500,
    location: 'Hinjawadi, Pune',
    availability: 'Available Now',
    description: 'Efficient and stylish micro property with smart home features.',
    beds: 1,
    bathrooms: 1,
    size: 500
  },
  {
    id: 7,
    title: 'Norman House',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 5700,
    location: 'Andheri East, Mumbai',
    availability: 'Available Now',
    description: 'Our premium accommodation redefine comfort and practicality.',
    beds: 3,
    bathrooms: 2.5,
    size: 2000
  },
  {
    id: 8,
    title: 'New Orleans House',
    image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 5900,
    location: 'Vile Parle, Mumbai',
    availability: 'Coming Soon',
    description: 'We provide you with spacious rooms and extremely caring staff always at your service.',
    beds: 3,
    bathrooms: 2,
    size: 1900
  },
  {
    id: 9,
    title: 'Cardiff House',
    image: 'https://images.pexels.com/photos/53603/bedroom-architectural-interior-lifestyle-53603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 5000,
    location: 'Laxmi Nagar, Delhi',
    availability: 'Available Now',
    description: 'We offer fully furnished premium accommodations at affordable prices.',
    beds: 3,
    bathrooms: 3,
    size: 2200
  },
  {
    id: 10,
    title: 'Sendai House',
    image: 'https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 2800,
    location: 'South Campus, Delhi',
    availability: 'Available Now',
    description: 'Apart from basic facilities this property also lets you enjoy club services.',
    beds: 2,
    bathrooms: 1,
    size: 1000
  },
  {
    id: 11,
    title: 'Lafayette House',
    image: 'https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 2300,
    location: 'Koramangala, Bengaluru',
    availability: 'Coming Soon',
    description: 'Modern PG in luxury high-rise with amazing amenities.',
    beds: 1,
    bathrooms: 1,
    size: 650
  },
  {
    id: 12,
    title: 'Kiev House',
    image: 'https://images.pexels.com/photos/4713245/pexels-photo-4713245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 1600,
    location: 'Kumaraswamy Layout, Bengaluru',
    availability: 'Available Now',
    description: 'We provide premium options that ensures a dreamy, comfortable abode for everyone.',
    beds: 4,
    bathrooms: 3,
    size: 2600
  }
];