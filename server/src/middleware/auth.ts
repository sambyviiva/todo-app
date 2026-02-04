import type { FastifyReply, FastifyRequest } from "fastify";

export const getAuthMiddleware =
  (knownKey: string) => (request: FastifyRequest, reply: FastifyReply, done: () => void) => {
    const apiKey = request.headers["x-api-key"];

    if (!apiKey || apiKey !== knownKey) {
      if (!apiKey) {
        request.log.warn("Unauthorized access attempt with undefined api key");
      }

      if (apiKey !== knownKey) {
        request.log.warn("Unauthorized access attempt with invalid api key");
      }

      return reply.code(401).send({ error: "Unauthorized" });
    }

    done();
  };