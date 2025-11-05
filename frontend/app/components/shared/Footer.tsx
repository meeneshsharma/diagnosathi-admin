import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-500" />
              <span>contact@diagnosathi.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-500" />
              <span>+91 9876543210</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-200 hover:text-white"
              asChild
            >
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-200 hover:text-white"
              asChild
            >
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Diagnosathi. All rights reserved.</p>
          <p>Your Lab Aggregator Partner</p>
        </div>
      </div>
    </footer>
  );
}
