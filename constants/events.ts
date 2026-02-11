export type Event = {
  id: string;
  title: string;
  location: string;
  date: string;
};

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Festival de Música',
    location: '📍 Teatro al Aire Libre',
    date: '📅 25 Febrero 2026',
  },
  {
    id: '2',
    title: 'Feria Gastronómica',
    location: '📍 Campo Ferial Chuquiago Marka',
    date: '📅 03 Marzo 2026',
  },
  {
    id: '3',
    title: 'Noche de Cine',
    location: '📍 Cine Municipal 6 de Agosto',
    date: '📅 12 Marzo 2026',
  },
];
