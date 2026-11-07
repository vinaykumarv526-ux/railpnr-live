import { NextRequest, NextResponse } from 'next/server';
import { getPnrStatus, isValidPnr } from '@/lib/pnr-service';
import { PnrApiResponse } from '@/types/pnr';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pnr = searchParams.get('pnr');

  if (!pnr) {
    return NextResponse.json<PnrApiResponse>(
      {
        success: false,
        error: 'PNR number is required. Please provide a 10-digit PNR.',
      },
      { status: 400 }
    );
  }

  const cleanPnr = pnr.trim();
  if (!isValidPnr(cleanPnr)) {
    return NextResponse.json<PnrApiResponse>(
      {
        success: false,
        error: 'Invalid PNR format. PNR must be exactly 10 numeric digits.',
      },
      { status: 400 }
    );
  }

  try {
    const data = await getPnrStatus(cleanPnr);
    return NextResponse.json<PnrApiResponse>({
      success: true,
      data,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch PNR status';
    return NextResponse.json<PnrApiResponse>(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const pnr = body?.pnr;

    if (!pnr || !isValidPnr(String(pnr).trim())) {
      return NextResponse.json<PnrApiResponse>(
        {
          success: false,
          error: 'Please enter a valid 10-digit Indian Railways PNR number.',
        },
        { status: 400 }
      );
    }

    const data = await getPnrStatus(String(pnr).trim());
    return NextResponse.json<PnrApiResponse>({
      success: true,
      data,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json<PnrApiResponse>(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
