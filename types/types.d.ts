export interface University {
  id: number | string;
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

export interface HeadStructure {
  title: string;
  description: string;
}

export interface HomePageData {
  title: string;
  description: string;
  card: {
    title: string;
    description: string;
    universitiesHref: string;
  };
}
