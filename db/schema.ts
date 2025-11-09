import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const waitlistEntries = sqliteTable('waitlist_entries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  phone: text('phone'),
  annualIncomeRange: text('annual_income_range', { 
    enum: ['<50k', '50k-100k', '100k-200k', '200k-500k', '>500k'] 
  }).notNull(),
  targetHomeBudget: text('target_home_budget', { 
    enum: ['<200k', '200k-300k', '300k-400k', '400k-500k'] 
  }).notNull(),
  purchaseTimeline: text('purchase_timeline', { 
    enum: ['0-6months', '6-12months', '1-2years', '2+years'] 
  }).notNull(),
  currentHousing: text('current_housing', { 
    enum: ['rent', 'own-mortgage', 'own-outright', 'other'] 
  }).notNull(),
  currentMonthlyPayment: integer('current_monthly_payment'),
  zipCode: text('zip_code').notNull(),
  utmSource: text('utm_source'),
  notes: text('notes'),
  // New expense tracking fields
  entertainmentAmount: integer('entertainment_amount'),
  entertainmentProvider: text('entertainment_provider'),
  entertainmentProviderOther: text('entertainment_provider_other'),
  homeInsuranceAmount: integer('home_insurance_amount'),
  homeInsuranceProvider: text('home_insurance_provider'),
  homeInsuranceProviderOther: text('home_insurance_provider_other'),
  utilitiesAmount: integer('utilities_amount'),
  utilitiesProvider: text('utilities_provider'),
  utilitiesProviderOther: text('utilities_provider_other'),
  carPaymentAmount: integer('car_payment_amount'),
  carPaymentProvider: text('car_payment_provider'),
  carPaymentProviderOther: text('car_payment_provider_other'),
  carInsuranceAmount: integer('car_insurance_amount'),
  carInsuranceProvider: text('car_insurance_provider'),
  carInsuranceProviderOther: text('car_insurance_provider_other'),
  internetAmount: integer('internet_amount'),
  internetProvider: text('internet_provider'),
  internetProviderOther: text('internet_provider_other'),
  phoneAmount: integer('phone_amount'),
  phoneProvider: text('phone_provider'),
  phoneProviderOther: text('phone_provider_other'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
export type NewWaitlistEntry = typeof waitlistEntries.$inferInsert;
