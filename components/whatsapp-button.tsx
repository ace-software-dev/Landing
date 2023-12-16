// components/WhatsappButton.tsx
import React from 'react';
import Link from 'next/link';

interface WhatsappButtonProps {
  phoneNumber: string;
  message: string;
}

export default function WhatsappButton({ phoneNumber, message }: WhatsappButtonProps) {
  return (
    <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`} target="_blank">
      <div className="fixed bottom-8 right-8 bg-green-500 rounded-full shadow-md p-2">
        <img src = "/images/WhatsAppLogo.svg" alt="Contact through WhatsApp"/>
      </div>
    </Link>
  )
}