'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { H1, H2 } from '@/components/ui/Typography';

const checkoutSchema = z.object({
  email: z.string().email('Invalid email'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutForm) => {
    console.log(data);
    setStep(2);
  };

  return (
    <Section>
      <Container>
        <H1 className="mb-12 text-center">Checkout</H1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {step === 1 ? (
              <Card>
                <div className="p-8">
                  <H2 className="mb-6">Shipping Address</H2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input placeholder="Email" {...register('email')} />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" {...register('firstName')} />
                      <Input placeholder="Last Name" {...register('lastName')} />
                    </div>

                    <Input placeholder="Address" {...register('address')} />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="City" {...register('city')} />
                      <Input placeholder="Postal Code" {...register('postalCode')} />
                    </div>

                    <Input placeholder="Country" {...register('country')} />

                    <Button variant="primary" size="lg" className="w-full mt-6">
                      Continue to Payment
                    </Button>
                  </form>
                </div>
              </Card>
            ) : (
              <Card>
                <div className="p-8">
                  <H2 className="mb-6">Payment</H2>
                  <div className="bg-stone/10 p-8 rounded-lg text-center">
                    <p>Stripe payment integration will go here</p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <div className="p-6">
                <H2 className="text-lg mb-4">Order Summary</H2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-semibold text-base border-t border-stone/20 pt-3">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CheckoutPage;
