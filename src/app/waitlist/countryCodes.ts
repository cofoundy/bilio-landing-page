export interface CountryCode {
  iso: string;
  name: string;
  nameEs: string;
  dial: string;
  flag: string;
}

export const countryCodes: CountryCode[] = [
  { iso: 'PE', name: 'Peru', nameEs: 'Perú', dial: '+51', flag: '🇵🇪' },
  { iso: 'CO', name: 'Colombia', nameEs: 'Colombia', dial: '+57', flag: '🇨🇴' },
  { iso: 'MX', name: 'Mexico', nameEs: 'México', dial: '+52', flag: '🇲🇽' },
  { iso: 'CL', name: 'Chile', nameEs: 'Chile', dial: '+56', flag: '🇨🇱' },
  { iso: 'AR', name: 'Argentina', nameEs: 'Argentina', dial: '+54', flag: '🇦🇷' },
  { iso: 'EC', name: 'Ecuador', nameEs: 'Ecuador', dial: '+593', flag: '🇪🇨' },
  { iso: 'BO', name: 'Bolivia', nameEs: 'Bolivia', dial: '+591', flag: '🇧🇴' },
  { iso: 'BR', name: 'Brazil', nameEs: 'Brasil', dial: '+55', flag: '🇧🇷' },
  { iso: 'VE', name: 'Venezuela', nameEs: 'Venezuela', dial: '+58', flag: '🇻🇪' },
  { iso: 'PY', name: 'Paraguay', nameEs: 'Paraguay', dial: '+595', flag: '🇵🇾' },
  { iso: 'UY', name: 'Uruguay', nameEs: 'Uruguay', dial: '+598', flag: '🇺🇾' },
  { iso: 'PA', name: 'Panama', nameEs: 'Panamá', dial: '+507', flag: '🇵🇦' },
  { iso: 'CR', name: 'Costa Rica', nameEs: 'Costa Rica', dial: '+506', flag: '🇨🇷' },
  { iso: 'GT', name: 'Guatemala', nameEs: 'Guatemala', dial: '+502', flag: '🇬🇹' },
  { iso: 'DO', name: 'Dominican Republic', nameEs: 'República Dominicana', dial: '+1', flag: '🇩🇴' },
  { iso: 'US', name: 'United States', nameEs: 'Estados Unidos', dial: '+1', flag: '🇺🇸' },
  { iso: 'ES', name: 'Spain', nameEs: 'España', dial: '+34', flag: '🇪🇸' },
];

export function getCountryByIso(iso: string): CountryCode | undefined {
  return countryCodes.find((c) => c.iso === iso);
}
