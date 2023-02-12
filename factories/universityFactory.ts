import { University } from "types/types";
import { Factory } from "fishery";
import { faker } from "@faker-js/faker";

const universityFactory = Factory.define<University>(() => ({
  id: parseFloat(Date.now() + faker.random.numeric()),
  slug: faker.lorem.slug(),
  name: faker.company.name(),
  shortName: faker.company.companySuffix(),
  logoUrl: faker.image.imageUrl(),
}));

export const getUniversity = () => universityFactory.build();

export const getUniversities = (count: number) =>
  universityFactory.buildList(count);
