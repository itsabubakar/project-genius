export async function POST(req) {
    try {
      const body = await req.json();
      const { teamName } = body;
  
      if (!teamName) {
        return new Response(
          JSON.stringify({ message: "Team name is required" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // Generate a random invite code
      const inviteCode = Math.random().toString(36).substr(2, 6).toUpperCase();
  
      return new Response(
        JSON.stringify({ message: "successful", inviteCode }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ message: "Internal Server Error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  