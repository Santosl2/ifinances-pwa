/* eslint-disable no-shadow */
import { createServer, Model, ActiveModelSerializer } from "miragejs";

import * as factories from "./factories";

type User = {
  name: string;
  email: string;
  created_at: Date;
};

export function makeServer(environment = "test") {
  createServer({
    environment,
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    serializers: {
      application: ActiveModelSerializer,
    },

    factories,

    seeds(server) {
      server.createList("finances", 1);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });
}
