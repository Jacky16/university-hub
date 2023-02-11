export interface University {
  id: number;
  slug: string;
  name: string;
  shortName?: string;
  logoUrl: string;
}

export interface Environments {
  baseUrl: string;
}
