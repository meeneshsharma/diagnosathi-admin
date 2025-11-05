import './globals.css'; // Make sure you have a globals.css file for Tailwind's base styles
import React from 'react';

export const metadata = {
  title: 'Diagnosathi Admin Panel',
  description: 'Manage labs, tests, and billing with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
