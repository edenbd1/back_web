export function authenticate(request, reply, done) {
    if (request.method === 'OPTIONS') {
      return done();
    }
  
    try {
      const token = request.headers.authorization?.replace("Bearer ", "");
      if (!token) {
        reply.code(401).send({ error: "No token provided" });
        return;
      }
  
      const decoded = request.server.jwt.verify(token);
      request.user = decoded;
      done();
    } catch (error) {
      reply.code(401).send({ error: "Invalid token" });
    }
  }