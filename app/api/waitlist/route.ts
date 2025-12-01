import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { waitlistEntries } from '@/db/schema';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'email',
      'firstName',
      'lastName',
      'annualIncomeRange',
      'targetHomeBudget',
      'purchaseTimeline',
      'currentHousing',
      'zipCode'
    ];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Validate zip code (5 digits)
    if (!/^\d{5}$/.test(body.zipCode)) {
      return NextResponse.json(
        { error: 'Zip code must be 5 digits' },
        { status: 400 }
      );
    }
    
    // Insert into database
    const result = await db.insert(waitlistEntries).values({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone || null,
      annualIncomeRange: body.annualIncomeRange,
      targetHomeBudget: body.targetHomeBudget,
      purchaseTimeline: body.purchaseTimeline,
      currentHousing: body.currentHousing,
      currentMonthlyPayment: body.currentMonthlyPayment || null,
      zipCode: body.zipCode,
      utmSource: body.utmSource || null,
      notes: body.notes || null,
      // New expense tracking fields
      entertainmentAmount: body.entertainmentAmount || null,
      entertainmentProvider: body.entertainmentProvider || null,
      entertainmentProviderOther: body.entertainmentProviderOther || null,
      homeInsuranceAmount: body.homeInsuranceAmount || null,
      homeInsuranceProvider: body.homeInsuranceProvider || null,
      homeInsuranceProviderOther: body.homeInsuranceProviderOther || null,
      utilitiesAmount: body.utilitiesAmount || null,
      utilitiesProvider: body.utilitiesProvider || null,
      utilitiesProviderOther: body.utilitiesProviderOther || null,
      carPaymentAmount: body.carPaymentAmount || null,
      carPaymentProvider: body.carPaymentProvider || null,
      carPaymentProviderOther: body.carPaymentProviderOther || null,
      carInsuranceAmount: body.carInsuranceAmount || null,
      carInsuranceProvider: body.carInsuranceProvider || null,
      carInsuranceProviderOther: body.carInsuranceProviderOther || null,
      internetAmount: body.internetAmount || null,
      internetProvider: body.internetProvider || null,
      internetProviderOther: body.internetProviderOther || null,
      phoneAmount: body.phoneAmount || null,
      phoneProvider: body.phoneProvider || null,
      phoneProviderOther: body.phoneProviderOther || null,
      createdAt: new Date()
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist',
        id: Number(result.lastInsertRowid)
      },
      { status: 201 }
    );
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Waitlist submission error:', error);
    
      // Handle duplicate email
      if (error.message?.includes('UNIQUE constraint failed')) {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
