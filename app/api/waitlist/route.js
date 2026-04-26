import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ count: count ?? 0 });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();

    if (!name || !email) {
      return Response.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('waitlist').insert([
      {
        name,
        email,
      },
    ]);

    if (error) {
      if (error.code === '23505') {
        return Response.json(
          { error: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }

      return Response.json({ error: error.message }, { status: 500 });
    }

    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    return Response.json({
      message: 'You are on the Tierra waitlist.',
      count: count ?? 0,
    });
  } catch {
    return Response.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}