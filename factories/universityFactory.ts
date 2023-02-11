import { University } from "types/types";
import { Factory } from "fishery";
import { faker } from "@faker-js/faker";

const universityFactory = Factory.define<University>(() => ({
  id: Number(faker.datatype.uuid()),
  slug: faker.lorem.slug(),
  name: faker.company.name(),
  shortName: faker.company.companySuffix(),
  logoUrl: faker.image.imageUrl(),
}));

export const getUniversity = () => universityFactory.build();
