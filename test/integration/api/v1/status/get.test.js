test("GET in /api/v1/status shold be return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  // Verify if is defined
  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();
  // Verify Value
  const parseDateResponseBody = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toBe(parseDateResponseBody);
  // database version
  const postgresVersion = responseBody.dependencies.database.version;
  expect(postgresVersion).toBeDefined();
  const regexVersion = new RegExp("[0-9][0-9].[0-9]([0-9])");
  expect(postgresVersion).toMatch(regexVersion);
  // max connections
  const maxConnections = responseBody.dependencies.database.max_connections;
  expect(maxConnections).toBeDefined();
  const parseMaxConnections = maxConnections;
  expect(parseMaxConnections).not.toBeNaN();
  //active connections
  const activeConnections =
    responseBody.dependencies.database.active_connections;
  expect(activeConnections).toBeDefined();
  const parseActiveConnections = Number(activeConnections);
  expect(parseActiveConnections).not.toBeNaN();
  expect(parseActiveConnections).toBe(1);
});
