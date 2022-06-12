/* eslint-disable import/no-extraneous-dependencies */
import { Factory } from "miragejs";

import { faker } from "@faker-js/faker";

export const finances = Factory.extend({
  name(i: number) {
    return `User ${i + 1}`;
  },
  email() {
    return faker.internet.email().toLocaleLowerCase();
  },
  createdAt() {
    return faker.date.recent(5, new Date());
  },
});
