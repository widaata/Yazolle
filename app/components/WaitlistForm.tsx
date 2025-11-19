'use client';

import { useState, FormEvent } from 'react';

// Provider options for different expense categories
const providerOptions = {
  entertainment: ['Netflix', 'Hulu', 'Disney+', 'Amazon Prime', 'HBO Max', 'Spotify', 'Apple Music', 'YouTube Premium', 'Other - please specify'],
  homeInsurance: ['State Farm', 'Allstate', 'GEICO', 'Progressive', 'USAA', 'Liberty Mutual', 'Farmers', 'Nationwide', 'Other - please specify'],
  utilities: ['PG&E', 'ConEd', 'Duke Energy', 'Southern Company', 'American Electric Power', 'Xcel Energy', 'Other - please specify'],
  carPayment: ['Honda Financial', 'Toyota Financial', 'Ford Credit', 'GM Financial', 'Chase Auto', 'Capital One Auto', 'Wells Fargo Auto', 'Other - please specify'],
  carInsurance: ['State Farm', 'GEICO', 'Progressive', 'Allstate', 'USAA', 'Liberty Mutual', 'Farmers', 'Nationwide', 'Other - please specify'],
  internet: ['Comcast Xfinity', 'Verizon', 'AT&T', 'Charter Spectrum', 'Cox', 'Optimum', 'CenturyLink', 'Other - please specify'],
  phone: ['Verizon', 'AT&T', 'T-Mobile', 'Sprint', 'Cricket', 'Mint Mobile', 'Visible', 'Google Fi', 'Other - please specify']
};

interface ExpenseFieldProps {
  category: string;
  title: string;
  amountField: string;
  providerField: string;
  providerOtherField: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  updateField: (field: string, value: string) => void;
}

function ExpenseField({ category, title, amountField, providerField, providerOtherField, formData, updateField }: ExpenseFieldProps) {
  const providers = providerOptions[category as keyof typeof providerOptions] || [];
  const showOtherField = formData[providerField] === 'Other - please specify';

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="text-md font-medium text-gray-900 mb-3">
        {title} <span className="text-red-500">*</span>
      </h4>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Amount
          </label>
          <input
            type="number"
            value={formData[amountField]}
            onChange={(e) => updateField(amountField, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="$50"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Provider
          </label>
          <select
            value={formData[providerField]}
            onChange={(e) => {
              updateField(providerField, e.target.value);
              if (e.target.value !== 'Other - please specify') {
                updateField(providerOtherField, '');
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select provider</option>
            {providers.map(provider => (
              <option key={provider} value={provider}>{provider}</option>
            ))}
          </select>
        </div>
        
        {showOtherField && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Please specify provider
            </label>
            <input
              type="text"
              value={formData[providerOtherField]}
              onChange={(e) => updateField(providerOtherField, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter provider name"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    annualIncomeRange: '',
    targetHomeBudget: '',
    purchaseTimeline: '',
    currentHousing: '',
    currentMonthlyPayment: '',
    zipCode: '',
    notes: '',
    // Expense tracking fields
    entertainmentAmount: '',
    entertainmentProvider: '',
    entertainmentProviderOther: '',
    homeInsuranceAmount: '',
    homeInsuranceProvider: '',
    homeInsuranceProviderOther: '',
    utilitiesAmount: '',
    utilitiesProvider: '',
    utilitiesProviderOther: '',
    carPaymentAmount: '',
    carPaymentProvider: '',
    carPaymentProviderOther: '',
    carInsuranceAmount: '',
    carInsuranceProvider: '',
    carInsuranceProviderOther: '',
    internetAmount: '',
    internetProvider: '',
    internetProviderOther: '',
    phoneAmount: '',
    phoneProvider: '',
    phoneProviderOther: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        annualIncomeRange: '',
        targetHomeBudget: '',
        purchaseTimeline: '',
        currentHousing: '',
        currentMonthlyPayment: '',
        zipCode: '',
        notes: '',
        // Reset expense tracking fields
        entertainmentAmount: '',
        entertainmentProvider: '',
        entertainmentProviderOther: '',
        homeInsuranceAmount: '',
        homeInsuranceProvider: '',
        homeInsuranceProviderOther: '',
        utilitiesAmount: '',
        utilitiesProvider: '',
        utilitiesProviderOther: '',
        carPaymentAmount: '',
        carPaymentProvider: '',
        carPaymentProviderOther: '',
        carInsuranceAmount: '',
        carInsuranceProvider: '',
        carInsuranceProviderOther: '',
        internetAmount: '',
        internetProvider: '',
        internetProviderOther: '',
        phoneAmount: '',
        phoneProvider: '',
        phoneProviderOther: ''
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus('error');
        setErrorMessage(error.message);
      }
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (status === 'success') {
    return (
      <div className="max-w-4xl mx-auto bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">You&apos;re on the list!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for joining Yazolle&apos;s waitlist. We&apos;ll be in touch soon to discuss your interest-free mortgage options.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-600 font-medium hover:text-green-700"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Join the Waitlist</h2>
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Contact Information */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              required
              pattern="\d{5}"
              maxLength={5}
              value={formData.zipCode}
              onChange={(e) => updateField('zipCode', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="12345"
            />
          </div>
        </div>
      </div>

      {/* Financial Information */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Information</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="annualIncomeRange" className="block text-sm font-medium text-gray-700 mb-1">
              Annual Household Income <span className="text-red-500">*</span>
            </label>
            <select
              id="annualIncomeRange"
              required
              value={formData.annualIncomeRange}
              onChange={(e) => updateField('annualIncomeRange', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select income range</option>
              <option value="<50k">Less than $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-200k">$100,000 - $200,000</option>
              <option value="200k-500k">$200,000 - $500,000</option>
              <option value=">500k">More than $500,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="targetHomeBudget" className="block text-sm font-medium text-gray-700 mb-1">
              Target Home Budget <span className="text-red-500">*</span>
            </label>
            <select
              id="targetHomeBudget"
              required
              value={formData.targetHomeBudget}
              onChange={(e) => updateField('targetHomeBudget', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="<200k">Less than $200,000</option>
              <option value="200k-300k">$200,000 - $300,000</option>
              <option value="300k-400k">$300,000 - $400,000</option>
              <option value="400k-500k">$400,000 - $500,000</option>
            </select>
          </div>
        </div>

        {/* Monthly Expenses */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-gray-900 mb-4">Monthly Expenses</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExpenseField
              category="entertainment"
              title="Entertainment Subscriptions"
              amountField="entertainmentAmount"
              providerField="entertainmentProvider"
              providerOtherField="entertainmentProviderOther"
              formData={formData}
              updateField={updateField}
            />

            <ExpenseField
              category="homeInsurance"
              title="Home Insurance"
              amountField="homeInsuranceAmount"
              providerField="homeInsuranceProvider"
              providerOtherField="homeInsuranceProviderOther"
              formData={formData}
              updateField={updateField}
            />

            <ExpenseField
              category="utilities"
              title="Utilities"
              amountField="utilitiesAmount"
              providerField="utilitiesProvider"
              providerOtherField="utilitiesProviderOther"
              formData={formData}
              updateField={updateField}
            />

            <ExpenseField
              category="carPayment"
              title="Car Payment"
              amountField="carPaymentAmount"
              providerField="carPaymentProvider"
              providerOtherField="carPaymentProviderOther"
              formData={formData}
              updateField={updateField}
            />

            <ExpenseField
              category="carInsurance"
              title="Car Insurance"
              amountField="carInsuranceAmount"
              providerField="carInsuranceProvider"
              providerOtherField="carInsuranceProviderOther"
              formData={formData}
              updateField={updateField}
            />

            <ExpenseField
              category="internet"
              title="Internet Bill"
              amountField="internetAmount"
              providerField="internetProvider"
              providerOtherField="internetProviderOther"
              formData={formData}
              updateField={updateField}
            />

            <ExpenseField
              category="phone"
              title="Phone Bill"
              amountField="phoneAmount"
              providerField="phoneProvider"
              providerOtherField="phoneProviderOther"
              formData={formData}
              updateField={updateField}
            />
          </div>
        </div>
      </div>

      {/* Housing Information */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Housing</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="currentHousing" className="block text-sm font-medium text-gray-700 mb-1">
              Current Housing Situation <span className="text-red-500">*</span>
            </label>
            <select
              id="currentHousing"
              required
              value={formData.currentHousing}
              onChange={(e) => updateField('currentHousing', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select housing situation</option>
              <option value="rent">Renting</option>
              <option value="own-mortgage">Own with Mortgage</option>
              <option value="own-outright">Own Outright</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="currentMonthlyPayment" className="block text-sm font-medium text-gray-700 mb-1">
              Current Monthly Housing Payment (Optional)
            </label>
            <input
              type="number"
              id="currentMonthlyPayment"
              value={formData.currentMonthlyPayment}
              onChange={(e) => updateField('currentMonthlyPayment', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="$2,500"
            />
          </div>

          <div>
            <label htmlFor="purchaseTimeline" className="block text-sm font-medium text-gray-700 mb-1">
              When are you looking to purchase? <span className="text-red-500">*</span>
            </label>
            <select
              id="purchaseTimeline"
              required
              value={formData.purchaseTimeline}
              onChange={(e) => updateField('purchaseTimeline', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="0-6months">Within 6 months</option>
              <option value="6-12months">6-12 months</option>
              <option value="1-2years">1-2 years</option>
              <option value="2+years">2+ years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-8">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information (Optional)
        </label>
        <textarea
          id="notes"
          rows={4}
          value={formData.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Tell us more about your home buying goals..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By joining, you agree to receive communications from Yazolle about your interest-free mortgage application.
      </p>
    </form>
  );
}