// // // 'use client';

// // // import React, { useState, useEffect } from 'react';

// // // interface BillGenerationProps {
// // //     apiBaseUrl: string;
// // // }

// // // interface Test {
// // //     testId: string;
// // //     name: string;
// // //     price: number;
// // // }

// // // interface Lab {
// // //     _id: string;
// // //     name: string;
// // //     tests: Test[];
// // // }

// // // interface BillItem {
// // //     labId: string;
// // //     labName: string;
// // //     testId: string;
// // //     testName: string;
// // //     price: number;
// // // }

// // // export default function BillGeneration({ apiBaseUrl }: BillGenerationProps) {
// // //     const [labs, setLabs] = useState<Lab[]>([]);
// // //     const [searchTerm, setSearchTerm] = useState<string>('');
// // //     const [selectedTestsForBill, setSelectedTestsForBill] = useState<BillItem[]>([]);
// // //     const [patientName, setPatientName] = useState<string>('');
// // //     const [discount, setDiscount] = useState<number>(0);

// // //     useEffect(() => {
// // //         fetchLabs();
// // //     }, []);

// // //     const fetchLabs = async () => {
// // //         try {
// // //             const response = await fetch(`${apiBaseUrl}/labs`);
// // //             if (!response.ok) throw new Error('Failed to fetch labs');
// // //             const data: Lab[] = await response.json();
// // //             setLabs(data);
// // //         } catch (error) {
// // //             console.error("Error fetching labs:", error);
// // //         }
// // //     };

// // //     const handleAddTestToBill = (lab: Lab, test: Test) => {
// // //         const testInCart = selectedTestsForBill.find(
// // //             item => item.labId === lab._id && item.testId === test.testId
// // //         );
// // //         if (!testInCart) {
// // //             setSelectedTestsForBill([...selectedTestsForBill, {
// // //                 labId: lab._id,
// // //                 labName: lab.name,
// // //                 testId: test.testId,
// // //                 testName: test.name,
// // //                 price: test.price,
// // //             }]);
// // //         }
// // //     };

// // //     const handleRemoveTestFromBill = (labId: string, testId: string) => {
// // //         setSelectedTestsForBill(selectedTestsForBill.filter(
// // //             item => !(item.labId === labId && item.testId === testId)
// // //         ));
// // //     };

// // //     const handleClearBill = () => {
// // //         setSelectedTestsForBill([]);
// // //         setPatientName('');
// // //         setDiscount(0);
// // //     };

// // //     // const saveAndPrintBill = async () => {
// // //     //     if (selectedTestsForBill.length === 0) return;
// // //     //     const billData = {
// // //     //         patientName,
// // //     //         items: selectedTestsForBill,
// // //     //         subtotal: selectedTestsForBill.reduce((total, item) => total + item.price, 0),
// // //     //         discount,
// // //     //         finalTotal: selectedTestsForBill.reduce((total, item) => total + item.price, 0) - discount,
// // //     //         billDate: new Date().toISOString()
// // //     //     };

// // //     //     try {
// // //     //         const response = await fetch(`${apiBaseUrl}/bills`, {
// // //     //             method: 'POST',
// // //     //             headers: { 'Content-Type': 'application/json' },
// // //     //             body: JSON.stringify(billData)
// // //     //         });
// // //     //         if (!response.ok) throw new Error('Failed to save bill');
// // //     //         const savedBill = await response.json();
// // //     //         console.log("Bill saved successfully:", savedBill);

// // //     //         // Optional: You could show a confirmation message
// // //     //         // Then, trigger the print functionality
// // //     //         window.print();
// // //     //         handleClearBill();
// // //     //     } catch (error) {
// // //     //         console.error("Error saving bill:", error);
// // //     //     }
// // //     // };

// // //     // Inside saveAndPrintBill function
// // //     const saveAndPrintBill = async () => {
// // //         if (selectedTestsForBill.length === 0) return;

// // //         // Group tests by lab
// // //         const labDetails = Object.values(
// // //             selectedTestsForBill.reduce((acc: any, item) => {
// // //                 if (!acc[item.labId]) {
// // //                     acc[item.labId] = {
// // //                         labId: item.labId,
// // //                         labName: item.labName,
// // //                         subtotal: 0,
// // //                         tests: []
// // //                     };
// // //                 }
// // //                 acc[item.labId].tests.push({
// // //                     testId: item.testId,
// // //                     testName: item.testName,
// // //                     price: item.price
// // //                 });
// // //                 acc[item.labId].subtotal += item.price;
// // //                 return acc;
// // //             }, {})
// // //         );

// // //         const subtotal = selectedTestsForBill.reduce((total, item) => total + item.price, 0);
// // //         const finalAmount = subtotal - discount;

// // //         const billData = {
// // //             billId: `BIL-${Math.floor(100000 + Math.random() * 900000)}`,
// // //             patientName,
// // //             billDate: new Date().toLocaleDateString('en-IN'),
// // //             totalAmount: subtotal,
// // //             discount,
// // //             finalAmount,
// // //             labDetails
// // //         };

// // //         try {
// // //             const response = await fetch(`${apiBaseUrl}/bills`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify(billData)
// // //             });

// // //             if (!response.ok) throw new Error('Failed to save bill');

// // //             const savedBill = await response.json();
// // //             console.log("Bill saved successfully:", savedBill);

// // //             window.print();
// // //             handleClearBill();
// // //         } catch (error) {
// // //             console.error("Error saving bill:", error);
// // //         }
// // //     };

// // //     const searchTermsArray = searchTerm.split(',').map(s => s.trim().toLowerCase()).filter(s => s);
// // //     const filteredLabs = labs.map(lab => ({
// // //         ...lab,
// // //         tests: lab.tests.filter(test =>
// // //             searchTermsArray.some(term => test.name.toLowerCase().includes(term))
// // //         )
// // //     })).filter(lab => lab.tests.length > 0);

// // //     const groupedBillItems = selectedTestsForBill.reduce((acc: { [key: string]: { labName: string; tests: BillItem[]; subtotal: number; } }, item) => {
// // //         if (!acc[item.labId]) {
// // //             acc[item.labId] = {
// // //                 labName: item.labName,
// // //                 tests: [],
// // //                 subtotal: 0,
// // //             };
// // //         }
// // //         acc[item.labId].tests.push(item);
// // //         acc[item.labId].subtotal += item.price;
// // //         return acc;
// // //     }, {});

// // //     const subtotal = selectedTestsForBill.reduce((total, item) => total + item.price, 0);
// // //     const finalTotal = subtotal - discount;

// // //     const billId = `BIL-${Math.floor(100000 + Math.random() * 900000)}`;
// // //     const billDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

// // //     return (
// // //         <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100">
// // //             <h2 className="text-2xl font-bold text-purple-800 mb-6">Generate New Bill</h2>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // //                 <div>
// // //                     <label htmlFor="patient_name" className="block text-sm font-medium text-purple-700 mb-1">Patient Name</label>
// // //                     <input
// // //                         type="text"
// // //                         id="patient_name"
// // //                         value={patientName}
// // //                         onChange={(e) => setPatientName(e.target.value)}
// // //                         placeholder="Enter patient name"
// // //                         className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
// // //                     />
// // //                 </div>
// // //                 <div>
// // //                     <label htmlFor="search_tests" className="block text-sm font-medium text-purple-700 mb-1">Search Tests (comma-separated)</label>
// // //                     <input
// // //                         type="text"
// // //                         id="search_tests"
// // //                         value={searchTerm}
// // //                         onChange={(e) => setSearchTerm(e.target.value)}
// // //                         placeholder="e.g., CBC, Sugar, Thyroid"
// // //                         className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
// // //                     />
// // //                 </div>
// // //             </div>

// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //                 <div>
// // //                     <h3 className="text-lg font-semibold text-gray-700 mb-4">Available Tests</h3>
// // //                     <div className="bg-white p-4 rounded-xl shadow-inner h-96 overflow-y-auto space-y-4 pr-2 border border-gray-200">
// // //                         {filteredLabs.length > 0 ? filteredLabs.map(lab => (
// // //                             <div key={lab._id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
// // //                                 <h4 className="font-bold text-md text-gray-800 mb-2">{lab.name}</h4>
// // //                                 <ul className="space-y-2">
// // //                                     {lab.tests.map(test => (
// // //                                         <li key={test.testId} className="flex justify-between items-center text-sm text-gray-600">
// // //                                             <span>{test.name}</span>
// // //                                             <div className="flex items-center space-x-2">
// // //                                                 <span className="font-semibold">₹{test.price.toFixed(2)}</span>
// // //                                                 <button
// // //                                                     onClick={() => handleAddTestToBill(lab, test)}
// // //                                                     className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full hover:bg-purple-700 transition duration-300 transform active:scale-95"
// // //                                                 >
// // //                                                     Add
// // //                                                 </button>
// // //                                             </div>
// // //                                         </li>
// // //                                     ))}
// // //                                 </ul>
// // //                             </div>
// // //                         )) : (
// // //                             <p className="text-center text-gray-400 p-4">No tests found matching your search.</p>
// // //                         )}
// // //                     </div>
// // //                 </div>

// // //                 <div className="relative">
// // //                     <h3 className="text-lg font-semibold text-gray-700 mb-4">Current Bill</h3>
// // //                     <div className="bg-white p-6 rounded-lg shadow-md h-auto overflow-y-auto flex flex-col justify-between border border-gray-200">
// // //                         <div className="border-b-2 border-gray-300 pb-4 mb-4">
// // //                             <div className="flex items-center justify-center mb-4">
// // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
// // //                                 </svg>
// // //                                 <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Diagnosathi</h1>
// // //                             </div>
// // //                             <p className="text-sm text-gray-600 text-center">Your Lab Aggregator Partner</p>
// // //                             <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
// // //                                 <div>
// // //                                     <p><span className="font-semibold">Bill ID:</span> {billId}</p>
// // //                                     <p><span className="font-semibold">Bill Date:</span> {billDate}</p>
// // //                                 </div>
// // //                                 <div className="text-right">
// // //                                     <p><span className="font-semibold">Patient:</span> {patientName || 'N/A'}</p>
// // //                                 </div>
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex-1 my-4">
// // //                             {selectedTestsForBill.length > 0 ? (
// // //                                 <div className="space-y-4">
// // //                                     {Object.values(groupedBillItems).map((labBill, index) => (
// // //                                         <div key={index} className="bg-gray-50 p-4 rounded-lg">
// // //                                             <h4 className="font-bold text-gray-800 mb-2">{labBill.labName}</h4>
// // //                                             <ul className="space-y-1">
// // //                                                 {labBill.tests.map(test => (
// // //                                                     <li key={test.testId} className="flex justify-between text-sm text-gray-600">
// // //                                                         <span>{test.testName}</span>
// // //                                                         <div className="flex items-center space-x-2">
// // //                                                             <span>₹{test.price.toFixed(2)}</span>
// // //                                                             <button
// // //                                                                 onClick={() => handleRemoveTestFromBill(test.labId, test.testId)}
// // //                                                                 className="text-red-500 hover:text-red-700 transition duration-300 text-xs"
// // //                                                             >
// // //                                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
// // //                                                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // //                                                                 </svg>
// // //                                                             </button>
// // //                                                         </div>
// // //                                                     </li>
// // //                                                 ))}
// // //                                             </ul>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             ) : (
// // //                                 <p className="text-center text-gray-400 p-4">Add tests to generate a bill.</p>
// // //                             )}
// // //                         </div>

// // //                         <div className="mt-4 flex justify-between items-center text-gray-800 border-t border-gray-200 pt-4">
// // //                             <label htmlFor="discount" className="text-md font-bold">Discount By DiagnoSathi (₹)</label>
// // //                             <input
// // //                                 type="number"
// // //                                 id="discount"
// // //                                 value={discount}
// // //                                 onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
// // //                                 className="w-24 text-right px-2 py-1 border rounded-md font-semibold"
// // //                                 min="0"
// // //                             />
// // //                         </div>

// // //                         <div className="border-t-2 border-dashed border-gray-300 pt-4 mt-4">
// // //                             <div className="flex justify-between items-center mb-2">
// // //                                 <span className="text-lg text-gray-600">Subtotal:</span>
// // //                                 <span className="text-lg font-bold text-gray-800">₹{subtotal.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="flex justify-between items-center mb-4">
// // //                                 <span className="text-lg font-bold text-gray-800">Total:</span>
// // //                                 <span className="text-2xl font-extrabold text-purple-600">₹{finalTotal.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="flex space-x-4">
// // //                                 <button
// // //                                     onClick={saveAndPrintBill}
// // //                                     disabled={selectedTestsForBill.length === 0}
// // //                                     className="flex-1 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 transform active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
// // //                                 >
// // //                                     Save & Print Bill
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={handleClearBill}
// // //                                     disabled={selectedTestsForBill.length === 0}
// // //                                     className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300 transform active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
// // //                                 >
// // //                                     Clear Bill
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }



// // // 'use client';

// // // import React, { useEffect, useState } from 'react';
// // // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// // // import { ScrollArea } from '@/components/ui/scroll-area';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';

// // // interface BillGenerationProps {
// // //   apiBaseUrl: string;
// // // }

// // // interface Test {
// // //   testId: string;
// // //   name: string;
// // //   price: number;
// // // }

// // // interface Lab {
// // //   _id: string;
// // //   name: string;
// // //   tests: Test[];
// // // }

// // // interface BillItem {
// // //   labId: string;
// // //   labName: string;
// // //   testId: string;
// // //   testName: string;
// // //   price: number;
// // // }

// // // export default function BillGeneration({ apiBaseUrl }: BillGenerationProps) {
// // //   const [labs, setLabs] = useState<Lab[]>([]);
// // //   const [searchTerm, setSearchTerm] = useState<string>('');
// // //   const [selectedTestsForBill, setSelectedTestsForBill] = useState<BillItem[]>([]);
// // //   const [patientName, setPatientName] = useState<string>('');
// // //   const [discount, setDiscount] = useState<number>(0);

// // //   useEffect(() => {
// // //     fetchLabs();
// // //   }, []);

// // //   const fetchLabs = async () => {
// // //     try {
// // //       const response = await fetch(`${apiBaseUrl}/labs`);
// // //       if (!response.ok) throw new Error('Failed to fetch labs');
// // //       const data: Lab[] = await response.json();
// // //       setLabs(data);
// // //     } catch (error) {
// // //       console.error('Error fetching labs:', error);
// // //     }
// // //   };

// // //   const handleAddTestToBill = (lab: Lab, test: Test) => {
// // //     const testInCart = selectedTestsForBill.find(
// // //       item => item.labId === lab._id && item.testId === test.testId
// // //     );
// // //     if (!testInCart) {
// // //       setSelectedTestsForBill([
// // //         ...selectedTestsForBill,
// // //         {
// // //           labId: lab._id,
// // //           labName: lab.name,
// // //           testId: test.testId,
// // //           testName: test.name,
// // //           price: test.price,
// // //         }
// // //       ]);
// // //     }
// // //   };

// // //   const handleRemoveTestFromBill = (labId: string, testId: string) => {
// // //     setSelectedTestsForBill(
// // //       selectedTestsForBill.filter(item => !(item.labId === labId && item.testId === testId))
// // //     );
// // //   };

// // //   const handleClearBill = () => {
// // //     setSelectedTestsForBill([]);
// // //     setPatientName('');
// // //     setDiscount(0);
// // //   };

// // //   const saveAndPrintBill = async () => {
// // //     if (selectedTestsForBill.length === 0) return;

// // //     const labDetails = Object.values(
// // //       selectedTestsForBill.reduce((acc: any, item) => {
// // //         if (!acc[item.labId]) {
// // //           acc[item.labId] = {
// // //             labId: item.labId,
// // //             labName: item.labName,
// // //             subtotal: 0,
// // //             tests: [],
// // //           };
// // //         }
// // //         acc[item.labId].tests.push({
// // //           testId: item.testId,
// // //           testName: item.testName,
// // //           price: item.price,
// // //         });
// // //         acc[item.labId].subtotal += item.price;
// // //         return acc;
// // //       }, {})
// // //     );

// // //     const subtotal = selectedTestsForBill.reduce((total, item) => total + item.price, 0);
// // //     const finalAmount = subtotal - discount;

// // //     const billData = {
// // //       billId: `BIL-${Math.floor(100000 + Math.random() * 900000)}`,
// // //       patientName,
// // //       billDate: new Date().toLocaleDateString('en-IN'),
// // //       totalAmount: subtotal,
// // //       discount,
// // //       finalAmount,
// // //       labDetails,
// // //     };

// // //     try {
// // //       const response = await fetch(`${apiBaseUrl}/bills`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(billData),
// // //       });

// // //       if (!response.ok) throw new Error('Failed to save bill');

// // //       const savedBill = await response.json();
// // //       console.log('Bill saved successfully:', savedBill);

// // //       window.print();
// // //       handleClearBill();
// // //     } catch (error) {
// // //       console.error('Error saving bill:', error);
// // //     }
// // //   };

// // //   const searchTermsArray = searchTerm
// // //     .split(',')
// // //     .map(s => s.trim().toLowerCase())
// // //     .filter(s => s);

// // //   const filteredLabs = labs
// // //     .map(lab => ({
// // //       ...lab,
// // //       tests: lab.tests.filter(test =>
// // //         searchTermsArray.some(term => test.name.toLowerCase().includes(term))
// // //       ),
// // //     }))
// // //     .filter(lab => lab.tests.length > 0);

// // //   const groupedBillItems = selectedTestsForBill.reduce(
// // //     (acc: { [key: string]: { labName: string; tests: BillItem[]; subtotal: number } }, item) => {
// // //       if (!acc[item.labId]) {
// // //         acc[item.labId] = { labName: item.labName, tests: [], subtotal: 0 };
// // //       }
// // //       acc[item.labId].tests.push(item);
// // //       acc[item.labId].subtotal += item.price;
// // //       return acc;
// // //     },
// // //     {}
// // //   );

// // //   const subtotal = selectedTestsForBill.reduce((total, item) => total + item.price, 0);
// // //   const finalTotal = subtotal - discount;
// // //   const billId = `BIL-${Math.floor(100000 + Math.random() * 900000)}`;
// // //   const billDate = new Date().toLocaleDateString('en-IN', {
// // //     year: 'numeric',
// // //     month: 'long',
// // //     day: 'numeric',
// // //   });

// // //   return (
// // //     <div className="space-y-6">
// // //       <h2 className="text-2xl font-bold text-purple-800">Generate New Bill</h2>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <div className="space-y-4">
// // //           <Label htmlFor="patient_name">Patient Name</Label>
// // //           <Input
// // //             id="patient_name"
// // //             placeholder="Enter patient name"
// // //             value={patientName}
// // //             onChange={e => setPatientName(e.target.value)}
// // //           />
// // //         </div>

// // //         <div className="space-y-4">
// // //           <Label htmlFor="search_tests">Search Tests (comma-separated)</Label>
// // //           <Input
// // //             id="search_tests"
// // //             placeholder="e.g., CBC, Sugar, Thyroid"
// // //             value={searchTerm}
// // //             onChange={e => setSearchTerm(e.target.value)}
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //         <Card className="h-[600px] overflow-y-auto">
// // //           <CardHeader>
// // //             <CardTitle>Available Tests</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <ScrollArea className="h-[500px]">
// // //               {filteredLabs.length > 0 ? (
// // //                 filteredLabs.map(lab => (
// // //                   <Card key={lab._id} className="mb-4 p-4">
// // //                     <CardHeader>
// // //                       <CardTitle className="text-sm font-semibold">{lab.name}</CardTitle>
// // //                     </CardHeader>
// // //                     <CardContent>
// // //                       <ul className="space-y-2">
// // //                         {lab.tests.map(test => (
// // //                           <li key={test.testId} className="flex justify-between items-center">
// // //                             <span>{test.name}</span>
// // //                             <div className="flex items-center space-x-2">
// // //                               <span className="font-semibold">₹{test.price.toFixed(2)}</span>
// // //                               <Button
// // //                                 size="sm"
// // //                                 variant="default"
// // //                                 onClick={() => handleAddTestToBill(lab, test)}
// // //                               >
// // //                                 Add
// // //                               </Button>
// // //                             </div>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </CardContent>
// // //                   </Card>
// // //                 ))
// // //               ) : (
// // //                 <p className="text-center text-gray-400">No tests found matching your search.</p>
// // //               )}
// // //             </ScrollArea>
// // //           </CardContent>
// // //         </Card>

// // //         <Card className="h-[600px] flex flex-col justify-between">
// // //           <CardHeader>
// // //             <CardTitle>Current Bill</CardTitle>
// // //           </CardHeader>
// // //           <CardContent className="flex-1 overflow-y-auto">
// // //             {selectedTestsForBill.length > 0 ? (
// // //               Object.values(groupedBillItems).map((labBill, index) => (
// // //                 <Card key={index} className="mb-3 p-2">
// // //                   <CardHeader>
// // //                     <CardTitle className="text-sm font-semibold">{labBill.labName}</CardTitle>
// // //                   </CardHeader>
// // //                   <CardContent>
// // //                     <ul className="space-y-1 text-sm">
// // //                       {labBill.tests.map(test => (
// // //                         <li key={test.testId} className="flex justify-between items-center">
// // //                           <span>{test.testName}</span>
// // //                           <div className="flex items-center space-x-2">
// // //                             <span>₹{test.price.toFixed(2)}</span>
// // //                             <Button
// // //                               size="icon"
// // //                               variant="destructive"
// // //                               onClick={() => handleRemoveTestFromBill(test.labId, test.testId)}
// // //                             >
// // //                               X
// // //                             </Button>
// // //                           </div>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </CardContent>
// // //                 </Card>
// // //               ))
// // //             ) : (
// // //               <p className="text-center text-gray-400">Add tests to generate a bill.</p>
// // //             )}
// // //           </CardContent>

// // //           <div className="mt-4 space-y-2">
// // //             <div className="flex justify-between items-center">
// // //               <Label>Discount (₹)</Label>
// // //               <Input
// // //                 type="number"
// // //                 className="w-24"
// // //                 value={discount}
// // //                 onChange={e => setDiscount(parseFloat(e.target.value) || 0)}
// // //                 min={0}
// // //               />
// // //             </div>
// // //             <div className="flex justify-between text-lg font-bold">
// // //               <span>Subtotal:</span>
// // //               <span>₹{subtotal.toFixed(2)}</span>
// // //             </div>
// // //             <div className="flex justify-between text-xl font-extrabold text-purple-600">
// // //               <span>Total:</span>
// // //               <span>₹{finalTotal.toFixed(2)}</span>
// // //             </div>

// // //             <div className="flex space-x-4 mt-4">
// // //               <Button
// // //                 className="flex-1"
// // //                 onClick={saveAndPrintBill}
// // //                 disabled={selectedTestsForBill.length === 0}
// // //               >
// // //                 Save & Print Bill
// // //               </Button>
// // //               <Button
// // //                 variant="outline"
// // //                 onClick={handleClearBill}
// // //                 disabled={selectedTestsForBill.length === 0}
// // //               >
// // //                 Clear Bill
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </Card>
// // //       </div>
// // //     </div>
// // //   );
// // // } 

// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// // import { ScrollArea } from '@/components/ui/scroll-area';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Loader2, Trash2, Plus } from 'lucide-react';

// // interface BillGenerationProps {
// //   apiBaseUrl: string;
// // }

// // interface Test {
// //   testId: string;
// //   name: string;
// //   price: number;
// // }

// // interface Lab {
// //   _id: string;
// //   name: string;
// //   tests: Test[];
// // }

// // interface BillItem {
// //   labId: string;
// //   labName: string;
// //   testId: string;
// //   testName: string;
// //   price: number;
// // }

// // export default function BillGeneration({ apiBaseUrl }: BillGenerationProps) {
// //   const [labs, setLabs] = useState<Lab[]>([]);
// //   const [searchTerm, setSearchTerm] = useState<string>('');
// //   const [selectedTestsForBill, setSelectedTestsForBill] = useState<BillItem[]>([]);
// //   const [patientName, setPatientName] = useState<string>('');
// //   const [discount, setDiscount] = useState<number>(0);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   useEffect(() => {
// //     fetchLabs();
// //   }, []);

// //   const fetchLabs = async () => {
// //     try {
// //       const response = await fetch(`${apiBaseUrl}/labs`);
// //       if (!response.ok) throw new Error('Failed to fetch labs');
// //       const data: Lab[] = await response.json();
// //       setLabs(data);
// //     } catch (error) {
// //       console.error('Error fetching labs:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddTestToBill = (lab: Lab, test: Test) => {
// //     const exists = selectedTestsForBill.find(
// //       (item) => item.labId === lab._id && item.testId === test.testId
// //     );
// //     if (!exists) {
// //       setSelectedTestsForBill((prev) => [
// //         ...prev,
// //         {
// //           labId: lab._id,
// //           labName: lab.name,
// //           testId: test.testId,
// //           testName: test.name,
// //           price: test.price,
// //         },
// //       ]);
// //     }
// //   };

// //   const handleRemoveTestFromBill = (labId: string, testId: string) => {
// //     setSelectedTestsForBill((prev) =>
// //       prev.filter((item) => !(item.labId === labId && item.testId === testId))
// //     );
// //   };

// //   const handleClearBill = () => {
// //     setSelectedTestsForBill([]);
// //     setPatientName('');
// //     setDiscount(0);
// //   };

// //   const saveAndPrintBill = async () => {
// //     if (selectedTestsForBill.length === 0) return;

// //     const labDetails = Object.values(
// //       selectedTestsForBill.reduce((acc: any, item) => {
// //         if (!acc[item.labId]) {
// //           acc[item.labId] = {
// //             labId: item.labId,
// //             labName: item.labName,
// //             subtotal: 0,
// //             tests: [],
// //           };
// //         }
// //         acc[item.labId].tests.push({
// //           testId: item.testId,
// //           testName: item.testName,
// //           price: item.price,
// //         });
// //         acc[item.labId].subtotal += item.price;
// //         return acc;
// //       }, {})
// //     );

// //     const subtotal = selectedTestsForBill.reduce((total, item) => total + item.price, 0);
// //     const finalAmount = subtotal - discount;

// //     const billData = {
// //       billId: `BIL-${Math.floor(100000 + Math.random() * 900000)}`,
// //       patientName,
// //       billDate: new Date().toLocaleDateString('en-IN'),
// //       totalAmount: subtotal,
// //       discount,
// //       finalAmount,
// //       labDetails,
// //     };

// //     try {
// //       const res = await fetch(`${apiBaseUrl}/bills`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(billData),
// //       });
// //       if (!res.ok) throw new Error('Failed to save bill');
// //       await res.json();
// //       window.print();
// //       handleClearBill();
// //     } catch (error) {
// //       console.error('Error saving bill:', error);
// //     }
// //   };

// //   const searchTermsArray = searchTerm
// //     .split(',')
// //     .map((s) => s.trim().toLowerCase())
// //     .filter((s) => s);

// //   const filteredLabs = labs
// //     .map((lab) => ({
// //       ...lab,
// //       tests: lab.tests.filter((test) =>
// //         searchTermsArray.some((term) => test.name.toLowerCase().includes(term))
// //       ),
// //     }))
// //     .filter((lab) => lab.tests.length > 0);

// //   const groupedBillItems = selectedTestsForBill.reduce(
// //     (acc: { [key: string]: { labName: string; tests: BillItem[]; subtotal: number } }, item) => {
// //       if (!acc[item.labId]) {
// //         acc[item.labId] = { labName: item.labName, tests: [], subtotal: 0 };
// //       }
// //       acc[item.labId].tests.push(item);
// //       acc[item.labId].subtotal += item.price;
// //       return acc;
// //     },
// //     {}
// //   );

// //   const subtotal = selectedTestsForBill.reduce((t, i) => t + i.price, 0);
// //   const finalTotal = subtotal - discount;

// //   return (
// //     <div className="space-y-6 p-2 sm:p-6">
// //       <h2 className="text-3xl font-bold text-purple-800 text-center sm:text-left">
// //         Generate Patient Bill
// //       </h2>

// //       {/* Patient Info + Search */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/60 p-4 rounded-xl shadow-sm backdrop-blur-md">
// //         <div>
// //           <Label htmlFor="patient_name" className="text-sm font-medium">
// //             Patient Name
// //           </Label>
// //           <Input
// //             id="patient_name"
// //             placeholder="Enter patient name"
// //             value={patientName}
// //             onChange={(e) => setPatientName(e.target.value)}
// //             className="mt-1"
// //           />
// //         </div>

// //         <div>
// //           <Label htmlFor="search_tests" className="text-sm font-medium">
// //             Search Tests (comma-separated)
// //           </Label>
// //           <Input
// //             id="search_tests"
// //             placeholder="e.g., CBC, Sugar, Vitamin"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="mt-1"
// //           />
// //         </div>
// //       </div>

// //       {/* Main Area */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Available Tests (Grouped by Lab) */}
// //         <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50">
// //           <CardHeader>
// //             <CardTitle className="text-lg font-semibold text-purple-700">
// //               Lab-wise Test Results
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <ScrollArea className="h-[480px] space-y-4">
// //               {loading ? (
// //                 <div className="flex justify-center items-center h-48">
// //                   <Loader2 className="h-6 w-6 animate-spin text-purple-600" />
// //                 </div>
// //               ) : filteredLabs.length > 0 ? (
// //                 filteredLabs.map((lab) => {
// //                   const totalLabPrice = lab.tests.reduce((sum, t) => sum + t.price, 0);
// //                   return (
// //                     <div
// //                       key={lab._id}
// //                       className="p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all border border-purple-100"
// //                     >
// //                       <div className="flex justify-between items-center mb-2">
// //                         <h3 className="text-base font-semibold text-purple-800">
// //                           {lab.name}
// //                         </h3>
// //                         <span className="text-sm font-medium text-gray-500">
// //                           Total Tests: {lab.tests.length}
// //                         </span>
// //                       </div>

// //                       <ul className="space-y-2 mb-3">
// //                         {lab.tests.map((test) => (
// //                           <li
// //                             key={test.testId}
// //                             className="flex justify-between items-center border-b border-gray-100 py-1"
// //                           >
// //                             <span className="text-sm text-gray-700">{test.name}</span>
// //                             <div className="flex items-center space-x-2">
// //                               <span className="text-sm font-semibold text-gray-800">
// //                                 ₹{test.price.toFixed(2)}
// //                               </span>
// //                               <Button
// //                                 size="sm"
// //                                 variant="secondary"
// //                                 onClick={() => handleAddTestToBill(lab, test)}
// //                                 className="flex items-center gap-1"
// //                               >
// //                                 <Plus size={14} /> Add
// //                               </Button>
// //                             </div>
// //                           </li>
// //                         ))}
// //                       </ul>

// //                       {/* Lab total summary */}
// //                       <div className="flex justify-between items-center pt-2 border-t border-gray-200">
// //                         <span className="text-sm font-medium text-gray-600">
// //                           Lab Total
// //                         </span>
// //                         <span className="text-base font-semibold text-purple-700">
// //                           ₹{totalLabPrice.toFixed(2)}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   );
// //                 })
// //               ) : (
// //                 <p className="text-center text-gray-400 italic mt-10">
// //                   No matching tests found.
// //                 </p>
// //               )}
// //             </ScrollArea>
// //           </CardContent>
// //         </Card>

// //         {/* Current Bill */}
// //         <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50 flex flex-col justify-between">
// //           <CardHeader>
// //             <CardTitle className="text-lg font-semibold text-purple-700">
// //               Current Bill
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent className="flex-1 overflow-y-auto space-y-4">
// //             {selectedTestsForBill.length > 0 ? (
// //               Object.values(groupedBillItems).map((labBill, index) => (
// //                 <div key={index} className="bg-white rounded-lg shadow-sm p-3">
// //                   <h3 className="text-sm font-semibold text-gray-700 mb-2">{labBill.labName}</h3>
// //                   <ul className="space-y-1 text-sm">
// //                     {labBill.tests.map((test) => (
// //                       <li key={test.testId} className="flex justify-between items-center">
// //                         <span>{test.testName}</span>
// //                         <div className="flex items-center gap-2">
// //                           <span>₹{test.price.toFixed(2)}</span>
// //                           <Button
// //                             size="icon"
// //                             variant="destructive"
// //                             onClick={() => handleRemoveTestFromBill(test.labId, test.testId)}
// //                           >
// //                             <Trash2 size={14} />
// //                           </Button>
// //                         </div>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="text-center text-gray-400 italic">
// //                 Add tests to generate a bill.
// //               </p>
// //             )}
// //           </CardContent>

// //           {/* Footer */}
// //           <div className="p-4 border-t space-y-3 bg-white/80 backdrop-blur-md rounded-b-xl">
// //             <div className="flex justify-between items-center">
// //               <Label>Discount (₹)</Label>
// //               <Input
// //                 type="number"
// //                 className="w-28"
// //                 value={discount}
// //                 onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
// //                 min={0}
// //               />
// //             </div>
// //             <div className="flex justify-between text-sm">
// //               <span className="font-medium">Subtotal:</span>
// //               <span>₹{subtotal.toFixed(2)}</span>
// //             </div>
// //             <div className="flex justify-between text-xl font-bold text-purple-700">
// //               <span>Total:</span>
// //               <span>₹{finalTotal.toFixed(2)}</span>
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-3 mt-4">
// //               <Button
// //                 className="flex-1 bg-purple-700 hover:bg-purple-800 text-white"
// //                 onClick={saveAndPrintBill}
// //                 disabled={selectedTestsForBill.length === 0}
// //               >
// //                 Save & Print Bill
// //               </Button>
// //               <Button
// //                 variant="outline"
// //                 onClick={handleClearBill}
// //                 disabled={selectedTestsForBill.length === 0}
// //                 className="flex-1 border-gray-300"
// //               >
// //                 Clear Bill
// //               </Button>
// //             </div>
// //           </div>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // }















// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Loader2, Trash2, Plus } from 'lucide-react';

// interface BillGenerationProps {
//   apiBaseUrl: string;
// }

// interface Test {
//   testId: string;
//   name: string;
//   price: number;
// }

// interface Lab {
//   _id: string;
//   name: string;
//   tests: Test[];
// }

// interface BillItem {
//   labId: string;
//   labName: string;
//   testId: string;
//   testName: string;
//   price: number;
// }

// export default function BillGeneration({ apiBaseUrl }: BillGenerationProps) {
//   const [labs, setLabs] = useState<Lab[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [selectedLab, setSelectedLab] = useState<Lab | null>(null); // <-- selected lab
//   const [selectedTestsForBill, setSelectedTestsForBill] = useState<BillItem[]>([]);
//   const [patientName, setPatientName] = useState<string>('');
//   const [discount, setDiscount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchLabs();
//   }, []);

//   const fetchLabs = async () => {
//     try {
//       const response = await fetch(`${apiBaseUrl}/labs`);
//       if (!response.ok) throw new Error('Failed to fetch labs');
//       const data: Lab[] = await response.json();
//       setLabs(data);
//     } catch (error) {
//       console.error('Error fetching labs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddTestToBill = (lab: Lab, test: Test) => {
//     if (!selectedLab || selectedLab._id !== lab._id) {
//       // selecting a new lab resets old bill
//       setSelectedLab(lab);
//       setSelectedTestsForBill([]);
//       setDiscount(0);
//     }

//     const exists = selectedTestsForBill.find(
//       (item) => item.labId === lab._id && item.testId === test.testId
//     );
//     if (!exists) {
//       setSelectedTestsForBill((prev) => [
//         ...prev,
//         {
//           labId: lab._id,
//           labName: lab.name,
//           testId: test.testId,
//           testName: test.name,
//           price: test.price,
//         },
//       ]);
//     }
//   };

//   const handleRemoveTestFromBill = (labId: string, testId: string) => {
//     setSelectedTestsForBill((prev) =>
//       prev.filter((item) => !(item.labId === labId && item.testId === testId))
//     );
//   };

//   const handleClearBill = () => {
//     setSelectedTestsForBill([]);
//     setPatientName('');
//     setDiscount(0);
//     setSelectedLab(null);
//   };

//   const saveAndPrintBill = async (lab?: Lab) => {
//     if (!selectedLab || selectedTestsForBill.length === 0) return;

//     const labTests = selectedTestsForBill.filter(
//       (item) => item.labId === selectedLab._id
//     );

//     const subtotal = labTests.reduce((total, item) => total + item.price, 0);
//     const finalAmount = subtotal - discount;

//     const billData = {
//       billId: `BIL-${Math.floor(100000 + Math.random() * 900000)}`,
//       patientName,
//       billDate: new Date().toLocaleDateString('en-IN'),
//       totalAmount: subtotal,
//       discount,
//       finalAmount,
//       labDetails: [
//         {
//           labId: selectedLab._id,
//           labName: selectedLab.name,
//           subtotal,
//           tests: labTests.map((t) => ({
//             testId: t.testId,
//             testName: t.testName,
//             price: t.price,
//           })),
//         },
//       ],
//     };

//     try {
//       const res = await fetch(`${apiBaseUrl}/bills`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(billData),
//       });
//       if (!res.ok) throw new Error('Failed to save bill');
//       await res.json();
//       window.print();
//       handleClearBill();
//     } catch (error) {
//       console.error('Error saving bill:', error);
//     }
//   };

//   const searchTermsArray = searchTerm
//     .split(',')
//     .map((s) => s.trim().toLowerCase())
//     .filter((s) => s);

//   const filteredLabs = labs
//     .map((lab) => ({
//       ...lab,
//       tests: lab.tests.filter((test) =>
//         searchTermsArray.some((term) => test.name.toLowerCase().includes(term))
//       ),
//     }))
//     .filter((lab) => lab.tests.length > 0);

//   const subtotal = selectedTestsForBill.reduce((t, i) => t + i.price, 0);
//   const finalTotal = subtotal - discount;

//   return (
//     <div className="space-y-6 p-2 sm:p-6">
//       <h2 className="text-3xl font-bold text-purple-800 text-center sm:text-left">
//         Generate Patient Bill
//       </h2>

//       {/* Patient Info + Search */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/60 p-4 rounded-xl shadow-sm backdrop-blur-md">
//         <div>
//           <Label htmlFor="patient_name" className="text-sm font-medium">
//             Patient Name
//           </Label>
//           <Input
//             id="patient_name"
//             placeholder="Enter patient name"
//             value={patientName}
//             onChange={(e) => setPatientName(e.target.value)}
//             className="mt-1"
//           />
//         </div>

//         <div>
//           <Label htmlFor="search_tests" className="text-sm font-medium">
//             Search Tests (comma-separated)
//           </Label>
//           <Input
//             id="search_tests"
//             placeholder="e.g., CBC, Sugar, Vitamin"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="mt-1"
//           />
//         </div>
//       </div>

//       {/* Main Area */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Lab Cards */}
//         <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50">
//           <CardHeader>
//             <CardTitle className="text-lg font-semibold text-purple-700">
//               Lab-wise Test Results
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ScrollArea className="h-[480px]">
//               {loading ? (
//                 <div className="flex justify-center items-center h-48">
//                   <Loader2 className="h-6 w-6 animate-spin text-purple-600" />
//                 </div>
//               ) : filteredLabs.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {filteredLabs.map((lab) => {
//                     const totalLabPrice = lab.tests.reduce((sum, t) => sum + t.price, 0);
//                     return (
//                       <div
//                         key={lab._id}
//                         className={`p-4 rounded-xl bg-white shadow-md border transition-all hover:shadow-lg ${
//                           selectedLab?._id === lab._id
//                             ? 'border-purple-400 ring-2 ring-purple-300'
//                             : 'border-purple-100'
//                         }`}
//                       >
//                         <div className="flex justify-between items-center mb-2">
//                           <h3 className="text-base font-semibold text-purple-800">
//                             {lab.name}
//                           </h3>
//                           <span className="text-sm text-gray-500">
//                             {lab.tests.length} tests
//                           </span>
//                         </div>

//                         <ul className="space-y-2 mb-3">
//                           {lab.tests.map((test) => (
//                             <li
//                               key={test.testId}
//                               className="flex justify-between items-center border-b border-gray-100 py-1"
//                             >
//                               <span className="text-sm text-gray-700">{test.name}</span>
//                               <div className="flex items-center space-x-2">
//                                 <span className="text-sm font-semibold text-gray-800">
//                                   ₹{test.price.toFixed(2)}
//                                 </span>
//                                 <Button
//                                   size="sm"
//                                   variant="secondary"
//                                   onClick={() => handleAddTestToBill(lab, test)}
//                                   className="flex items-center gap-1"
//                                 >
//                                   <Plus size={14} /> Add
//                                 </Button>
//                               </div>
//                             </li>
//                           ))}
//                         </ul>

//                         <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                           <span className="text-sm font-medium text-gray-600">
//                             Lab Total
//                           </span>
//                           <span className="text-base font-semibold text-purple-700">
//                             ₹{totalLabPrice.toFixed(2)}
//                           </span>
//                         </div>

//                         <Button
//                           className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white"
//                           onClick={() => setSelectedLab(lab)}
//                         >
//                           Generate Bill
//                         </Button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-400 italic mt-10">
//                   No matching tests found.
//                 </p>
//               )}
//             </ScrollArea>
//           </CardContent>
//         </Card>

//         {/* Current Bill */}
//         <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50 flex flex-col justify-between">
//           <CardHeader>
//             <CardTitle className="text-lg font-semibold text-purple-700">
//               {selectedLab ? `${selectedLab.name} Bill` : 'Select a Lab to Generate Bill'}
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="flex-1 overflow-y-auto space-y-4">
//             {selectedLab && selectedTestsForBill.length > 0 ? (
//               <div className="bg-white rounded-lg shadow-sm p-3">
//                 <h3 className="text-sm font-semibold text-gray-700 mb-2">
//                   {selectedLab.name}
//                 </h3>
//                 <ul className="space-y-1 text-sm">
//                   {selectedTestsForBill.map((test) => (
//                     <li key={test.testId} className="flex justify-between items-center">
//                       <span>{test.testName}</span>
//                       <div className="flex items-center gap-2">
//                         <span>₹{test.price.toFixed(2)}</span>
//                         <Button
//                           size="icon"
//                           variant="destructive"
//                           onClick={() => handleRemoveTestFromBill(test.labId, test.testId)}
//                         >
//                           <Trash2 size={14} />
//                         </Button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <p className="text-center text-gray-400 italic">
//                 Add tests to generate this lab’s bill.
//               </p>
//             )}
//           </CardContent>

//           {selectedLab && (
//             <div className="p-4 border-t space-y-3 bg-white/80 backdrop-blur-md rounded-b-xl">
//               <div className="flex justify-between items-center">
//                 <Label>Discount (₹)</Label>
//                 <Input
//                   type="number"
//                   className="w-28"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
//                   min={0}
//                 />
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="font-medium">Subtotal:</span>
//                 <span>₹{subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between text-xl font-bold text-purple-700">
//                 <span>Total:</span>
//                 <span>₹{finalTotal.toFixed(2)}</span>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                 <Button
//                   className="flex-1 bg-purple-700 hover:bg-purple-800 text-white"
//                   onClick={() => saveAndPrintBill(selectedLab)}
//                   disabled={selectedTestsForBill.length === 0}
//                 >
//                   Save & Print Bill
//                 </Button>
//                 <Button
//                   variant="outline"
//                   onClick={handleClearBill}
//                   disabled={selectedTestsForBill.length === 0}
//                   className="flex-1 border-gray-300"
//                 >
//                   Clear Bill
//                 </Button>
//               </div>
//             </div>
//           )}
//         </Card>
//       </div>
//     </div>
//   );
// }









'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Trash2, Plus } from 'lucide-react';

interface BillGenerationProps {
  apiBaseUrl: string;
}

interface Test {
  testId: string;
  name: string;
  price: number;
}

interface Lab {
  _id: string;
  name: string;
  tests: Test[];
}

interface BillItem {
  labId: string;
  labName: string;
  testId: string;
  testName: string;
  price: number;
}

export default function BillGeneration({ apiBaseUrl }: BillGenerationProps) {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [selectedTestsForBill, setSelectedTestsForBill] = useState<BillItem[]>([]);
  const [patientName, setPatientName] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // Ref for printing
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/labs`);
      if (!response.ok) throw new Error('Failed to fetch labs');
      const data: Lab[] = await response.json();
      setLabs(data);
    } catch (error) {
      console.error('Error fetching labs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTestToBill = (lab: Lab, test: Test) => {
    if (!selectedLab || selectedLab._id !== lab._id) {
      // selecting a new lab resets old bill
      setSelectedLab(lab);
      setSelectedTestsForBill([]);
      setDiscount(0);
    }

    const exists = selectedTestsForBill.find(
      (item) => item.labId === lab._id && item.testId === test.testId
    );
    if (!exists) {
      setSelectedTestsForBill((prev) => [
        ...prev,
        {
          labId: lab._id,
          labName: lab.name,
          testId: test.testId,
          testName: test.name,
          price: test.price,
        },
      ]);
    }
  };

  const handleRemoveTestFromBill = (labId: string, testId: string) => {
    setSelectedTestsForBill((prev) =>
      prev.filter((item) => !(item.labId === labId && item.testId === testId))
    );
  };

  const handleClearBill = () => {
    setSelectedTestsForBill([]);
    setPatientName('');
    setDiscount(0);
    setSelectedLab(null);
  };

  const saveAndPrintBill = async () => {
    if (!selectedLab || selectedTestsForBill.length === 0) return;

    const labTests = selectedTestsForBill.filter(
      (item) => item.labId === selectedLab._id
    );

    const subtotal = labTests.reduce((total, item) => total + item.price, 0);
    const finalAmount = subtotal - discount;

    const billData = {
      billId: `BIL-${Math.floor(100000 + Math.random() * 900000)}`,
      patientName,
      billDate: new Date().toLocaleDateString('en-IN'),
      totalAmount: subtotal,
      discount,
      finalAmount,
      labDetails: [
        {
          labId: selectedLab._id,
          labName: selectedLab.name,
          subtotal,
          tests: labTests.map((t) => ({
            testId: t.testId,
            testName: t.testName,
            price: t.price,
          })),
        },
      ],
    };

    try {
      const res = await fetch(`${apiBaseUrl}/bills`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(billData),
      });
      if (!res.ok) throw new Error('Failed to save bill');
      await res.json();

      // Print only the current bill
      if (printRef.current) {
        const printContents = printRef.current.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload(); // reload to restore React state
      }

      handleClearBill();
    } catch (error) {
      console.error('Error saving bill:', error);
    }
  };

  const searchTermsArray = searchTerm
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s);

  const filteredLabs = labs
    .map((lab) => ({
      ...lab,
      tests: lab.tests.filter((test) =>
        searchTermsArray.some((term) => test.name.toLowerCase().includes(term))
      ),
    }))
    .filter((lab) => lab.tests.length > 0);

  const subtotal = selectedTestsForBill.reduce((t, i) => t + i.price, 0);
  const finalTotal = subtotal - discount;

  return (
    <div className="space-y-6 p-2 sm:p-6">
      <h2 className="text-3xl font-bold text-purple-800 text-center sm:text-left">
        Generate Patient Bill
      </h2>

      {/* Patient Info + Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/60 p-4 rounded-xl shadow-sm backdrop-blur-md">
        <div>
          <Label htmlFor="patient_name" className="text-sm font-medium">
            Patient Name
          </Label>
          <Input
            id="patient_name"
            placeholder="Enter patient name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="search_tests" className="text-sm font-medium">
            Search Tests (comma-separated)
          </Label>
          <Input
            id="search_tests"
            placeholder="e.g., CBC, Sugar, Vitamin"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      {/* Main Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lab Cards */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-purple-700">
              Lab-wise Test Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[480px]">
              {loading ? (
                <div className="flex justify-center items-center h-48">
                  <Loader2 className="h-6 w-6 animate-spin text-purple-600" />
                </div>
              ) : filteredLabs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredLabs.map((lab) => {
                    const totalLabPrice = lab.tests.reduce((sum, t) => sum + t.price, 0);
                    return (
                      <div
                        key={lab._id}
                        className={`p-4 rounded-xl bg-white shadow-md border transition-all hover:shadow-lg ${
                          selectedLab?._id === lab._id
                            ? 'border-purple-400 ring-2 ring-purple-300'
                            : 'border-purple-100'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-base font-semibold text-purple-800">
                            {lab.name}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {lab.tests.length} tests
                          </span>
                        </div>

                        <ul className="space-y-2 mb-3">
                          {lab.tests.map((test) => (
                            <li
                              key={test.testId}
                              className="flex justify-between items-center border-b border-gray-100 py-1"
                            >
                              <span className="text-sm text-gray-700">{test.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-semibold text-gray-800">
                                  ₹{test.price.toFixed(2)}
                                </span>
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  onClick={() => handleAddTestToBill(lab, test)}
                                  className="flex items-center gap-1"
                                >
                                  <Plus size={14} /> Add
                                </Button>
                              </div>
                            </li>
                          ))}
                        </ul>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <span className="text-sm font-medium text-gray-600">
                            Lab Total
                          </span>
                          <span className="text-base font-semibold text-purple-700">
                            ₹{totalLabPrice.toFixed(2)}
                          </span>
                        </div>

                        <Button
                          className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => setSelectedLab(lab)}
                        >
                          Generate Bill
                        </Button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-center text-gray-400 italic mt-10">
                  No matching tests found.
                </p>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Current Bill (Printable) */}
        <Card
          ref={printRef}
          className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50 flex flex-col justify-between"
        >
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-purple-700">
              {selectedLab ? `${selectedLab.name} Bill` : 'Select a Lab to Generate Bill'}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto space-y-4">
            {selectedLab && selectedTestsForBill.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Patient: {patientName || 'N/A'}
                </h3>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Date: {new Date().toLocaleDateString('en-IN')}
                </h3>
                <ul className="space-y-1 text-sm">
                  {selectedTestsForBill.map((test) => (
                    <li key={test.testId} className="flex justify-between items-center">
                      <span>{test.testName}</span>
                      <span>₹{test.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-3 font-medium">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Discount:</span>
                  <span>₹{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-purple-700 text-lg mt-1">
                  <span>Total:</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-400 italic">
                Add tests to generate this lab’s bill.
              </p>
            )}
          </CardContent>

          {selectedLab && (
            <div className="p-4 border-t space-y-3 bg-white/80 backdrop-blur-md rounded-b-xl">
              <div className="flex justify-between items-center">
                <Label>Discount (₹)</Label>
                <Input
                  type="number"
                  className="w-28"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                  min={0}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-purple-700">
                <span>Total:</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button
                  className="flex-1 bg-purple-700 hover:bg-purple-800 text-white"
                  onClick={saveAndPrintBill}
                  disabled={selectedTestsForBill.length === 0}
                >
                  Save & Print Bill
                </Button>
                <Button
                  variant="outline"
                  onClick={handleClearBill}
                  disabled={selectedTestsForBill.length === 0}
                  className="flex-1 border-gray-300"
                >
                  Clear Bill
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
