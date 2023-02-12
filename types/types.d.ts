export interface University {
  id: number;
  slug: string;
  name: string;
  shortName?: string;
  logoUrl: string;
}

export interface UniversityResponse {
  data: University[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total?: number;
    };
  };
}

export interface Environments {
  baseUrl: string;
}
