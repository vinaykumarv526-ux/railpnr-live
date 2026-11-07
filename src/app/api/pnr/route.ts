import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  return NextResponse.json({
    status: 'online',
    service: 'RailPNR Live API',
    message: 'Indian Railways PNR Status Engine is active.',
  });
}
