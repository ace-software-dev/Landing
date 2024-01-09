// components/WhatsappButton.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import getDictionary from '@/app/dictionaries';

interface WhatsappButtonProps {
  phoneNumber: string;
}

export default function WhatsappButton({ phoneNumber}: WhatsappButtonProps) {

  const dict = getDictionary();
  return (
    <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${dict.whatsappButton}`} target="_blank">
      <div className="fixed bottom-8 right-8 bg-green-500 rounded-full shadow-md p-2">
        <img src="/images/WhatsAppLogo.svg" alt="Contact through WhatsApp" />
      </div>
    </Link>
  )
}