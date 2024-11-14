import { Hono } from "hono";
import { getConnInfo } from "hono/bun";

const app = new Hono();

app.get("/", (c) => {
	return c.json(getConnInfo(c));
});

export default {
	port: 4343,
	fetch: app.fetch,
};
