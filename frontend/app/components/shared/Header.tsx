// // import React from 'react';

// // interface HeaderProps {
// //     setCurrentPage: (page: string) => void;
// // }

// // export default function Header({ setCurrentPage }: HeaderProps) {
// //     return (
// //         <header className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                 <div className="flex items-center justify-between h-16">
// //                     <div className="flex items-center">
// //                         <a href="#" className="flex-shrink-0" onClick={() => setCurrentPage('home')}>
// //                             <span className="text-2xl font-extrabold text-white">Diagnosathi</span>
// //                         </a>
// //                     </div>
// //                     <div className="hidden md:block">
// //                         <div className="ml-10 flex items-baseline space-x-4">
// //                             <button
// //                                 onClick={() => setCurrentPage('home')}
// //                                 className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-purple-600"
// //                             >
// //                                 Home
// //                             </button>
// //                             <button
// //                                 onClick={() => setCurrentPage('generateBill')}
// //                                 className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-purple-600"
// //                             >
// //                                 Generate Bill
// //                             </button>
// //                             <button
// //                                 onClick={() => setCurrentPage('manageLabs')}
// //                                 className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-purple-600"
// //                             >
// //                                 Manage Labs
// //                             </button>
// //                             <button
// //                                 onClick={() => setCurrentPage('viewBills')} // match the Page type
// //                                 className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-purple-600"
// //                             >
// //                                 View Bills
// //                             </button>

// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // }


// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { X, Menu } from 'lucide-react'; // Icons from lucide-react (shadcn standard)

// interface HeaderProps {
//   setCurrentPage: (page: string) => void;
// }

// export default function Header({ setCurrentPage }: HeaderProps) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', page: 'home' },
//     { label: 'Generate Bill', page: 'generateBill' },
//     { label: 'Manage Labs', page: 'manageLabs' },
//     { label: 'View Bills', page: 'viewBills' },
//   ];

//   const handleNavClick = (page: string) => {
//     setCurrentPage(page);
//     setMobileMenuOpen(false); // close mobile menu after click
//   };

//   return (
//     <header className="sticky top-0 bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a
//               href="#"
//               className="flex-shrink-0 text-2xl font-extrabold"
//               onClick={() => handleNavClick('home')}
//             >
//               Diagnosathi
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-4">
//             {navItems.map((item) => (
//               <Button
//                 key={item.page}
//                 variant="ghost"
//                 size="sm"
//                 className="text-white hover:bg-white hover:text-red-800 transition-colors"
//                 onClick={() => handleNavClick(item.page)}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               className="text-white hover:bg-white hover:text-red-800 p-2"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-red-800/95 backdrop-blur-md px-4 py-4 space-y-2 shadow-lg">
//           {navItems.map((item) => (
//             <Button
//               key={item.page}
//               variant="ghost"
//               size="sm"
//               className="w-full justify-start text-white hover:bg-white hover:text-red-800 transition-colors"
//               onClick={() => handleNavClick(item.page)}
//             >
//               {item.label}
//             </Button>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }
// 1. Import necessary types from React
import React, { Dispatch, SetStateAction } from 'react';
// 2. Import your shared Page type (adjust path as necessary)
import { Page } from '../../type'; 

interface HeaderProps {
    // FIX: Change the prop type from (page: string) => void
    // to the correct state setter type:
    setCurrentPage: Dispatch<SetStateAction<Page>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
    return (
        <header className="sticky top-0 z-10 bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        {/* 3. Ensure your Header links use the correct type in onClick */}
                        <button 
                            onClick={() => setCurrentPage('home')} 
                            className="text-xl font-bold text-blue-600 hover:text-blue-800 transition duration-150"
                        >
                            Admin Panel
                        </button>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                        <NavButton page="home" label="Home" setCurrentPage={setCurrentPage} />
                        <NavButton page="manageLabs" label="Manage" setCurrentPage={setCurrentPage} />
                        <NavButton page="generateBill" label="Billing" setCurrentPage={setCurrentPage} />
                        <NavButton page="viewBills" label="View Bills" setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

// Helper component for cleaner navigation buttons
interface NavButtonProps {
    page: Page;
    label: string;
    setCurrentPage: Dispatch<SetStateAction<Page>>;
}

const NavButton: React.FC<NavButtonProps> = ({ page, label, setCurrentPage }) => (
    <button
        onClick={() => setCurrentPage(page)}
        className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
    >
        {label}
    </button>
);


export default Header;