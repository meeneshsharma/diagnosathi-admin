// // // 'use client';

// // // import React, { useEffect, useState } from 'react';

// // // interface BillItem {
// // //     testId: string;
// // //     testName: string;
// // //     price: number;
// // // }

// // // interface Bill {
// // //     _id: string;
// // //     patientName: string;
// // //     items: BillItem[];
// // //     subtotal: number;
// // //     discount: number;
// // //     finalTotal: number;
// // //     billDate: string;
// // // }

// // // const API_BASE_URL = 'http://localhost:5000/api';

// // // const ViewBills = () => {
// // //     const [bills, setBills] = useState<Bill[]>([]);
// // //     const [loading, setLoading] = useState<boolean>(true);

// // //     useEffect(() => {
// // //         fetchBills();
// // //     }, []);

// // //     const fetchBills = async () => {
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/bills`);
// // //             if (!response.ok) throw new Error('Failed to fetch bills');
// // //             const data: Bill[] = await response.json();
// // //             setBills(data);
// // //         } catch (error) {
// // //             console.error('Error fetching bills:', error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     return (
// // //         <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100">
// // //             <h2 className="text-2xl font-bold text-purple-800 mb-6">View Bills</h2>

// // //             {loading ? (
// // //                 <p>Loading bills...</p>
// // //             ) : bills.length === 0 ? (
// // //                 <p>No bills found.</p>
// // //             ) : (
// // //                 <div className="space-y-6">
// // //                     {bills.map((bill) => (
// // //                         <div key={bill._id} className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Patient:</span>
// // //                                 <span>{bill.patientName}</span>
// // //                             </div>
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Subtotal:</span>
// // //                                 <span>₹{bill.subtotal.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Discount:</span>
// // //                                 <span>₹{bill.discount.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Total:</span>
// // //                                 <span>₹{bill.finalTotal.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="mb-2">
// // //                                 <span className="font-semibold">Bill Date:</span>
// // //                                 <span> {new Date(bill.billDate).toLocaleDateString()}</span>
// // //                             </div>
// // //                             <div>
// // //                                 <span className="font-semibold">Tests:</span>
// // //                                 <ul className="list-disc list-inside">
// // //                                     {bill.items.map((item) => (
// // //                                         <li key={item.testId}>{item.testName} - ₹{item.price.toFixed(2)}</li>
// // //                                     ))}
// // //                                 </ul>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ViewBills;



// // // 'use client';

// // // import React, { useEffect, useState } from 'react';

// // // interface BillItem {
// // //     testId: string;
// // //     testName: string;
// // //     price: number;
// // // }

// // // interface LabDetail {
// // //     labId: string;
// // //     labName: string;
// // //     subtotal: number;
// // //     tests: BillItem[];
// // // }

// // // interface Bill {
// // //     _id: string;
// // //     patientName: string;
// // //     billDate: string;
// // //     totalAmount: number;
// // //     discount: number;
// // //     finalAmount: number;
// // //     labDetails: LabDetail[];
// // // }

// // // const API_BASE_URL = 'http://localhost:5000/api';

// // // const ViewBills = () => {
// // //     const [bills, setBills] = useState<Bill[]>([]);
// // //     const [loading, setLoading] = useState<boolean>(true);

// // //     useEffect(() => {
// // //         fetchBills();
// // //     }, []);

// // //     const fetchBills = async () => {
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/bills`);
// // //             if (!response.ok) throw new Error('Failed to fetch bills');
// // //             const data: Bill[] = await response.json();
// // //             setBills(data);
// // //         } catch (error) {
// // //             console.error('Error fetching bills:', error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     return (
// // //         <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100">
// // //             <h2 className="text-2xl font-bold text-purple-800 mb-6">View Bills</h2>

// // //             {loading ? (
// // //                 <p>Loading bills...</p>
// // //             ) : bills.length === 0 ? (
// // //                 <p>No bills found.</p>
// // //             ) : (
// // //                 <div className="space-y-6">
// // //                     {bills.map((bill) => (
// // //                         <div key={bill._id} className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Patient:</span>
// // //                                 <span>{bill.patientName}</span>
// // //                             </div>
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Subtotal:</span>
// // //                                 <span>₹{bill.totalAmount?.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Discount:</span>
// // //                                 <span>₹{bill.discount?.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="flex justify-between mb-2">
// // //                                 <span className="font-semibold">Total:</span>
// // //                                 <span>₹{bill.finalAmount?.toFixed(2)}</span>
// // //                             </div>
// // //                             <div className="mb-2">
// // //                                 <span className="font-semibold">Bill Date:</span>
// // //                                 <span> {new Date(bill.billDate).toLocaleDateString()}</span>
// // //                             </div>
// // //                             <div>
// // //                                 <span className="font-semibold">Labs & Tests:</span>
// // //                                 <div className="mt-2 space-y-2">
// // //                                     {bill.labDetails.map((lab) => (
// // //                                         <div key={lab.labId} className="bg-gray-50 p-2 rounded-lg">
// // //                                             <p className="font-semibold">{lab.labName} - Subtotal: ₹{lab.subtotal?.toFixed(2)}</p>
// // //                                             <ul className="list-disc list-inside">
// // //                                                 {lab.tests.map((test) => (
// // //                                                     <li key={test.testId}>{test.testName} - ₹{test.price?.toFixed(2)}</li>
// // //                                                 ))}
// // //                                             </ul>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ViewBills;








// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// // import { ScrollArea } from '@/components/ui/scroll-area';

// // interface BillItem {
// //   testId: string;
// //   testName: string;
// //   price: number;
// // }

// // interface LabDetail {
// //   labId: string;
// //   labName: string;
// //   subtotal: number;
// //   tests: BillItem[];
// // }

// // interface Bill {
// //   _id: string;
// //   patientName: string;
// //   billDate: string;
// //   totalAmount: number;
// //   discount: number;
// //   finalAmount: number;
// //   labDetails: LabDetail[];
// // }

// // const API_BASE_URL = 'http://localhost:5000/api';

// // const ViewBills = () => {
// //   const [bills, setBills] = useState<Bill[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   useEffect(() => {
// //     fetchBills();
// //   }, []);

// //   const fetchBills = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/bills`);
// //       if (!response.ok) throw new Error('Failed to fetch bills');
// //       const data: Bill[] = await response.json();
// //       setBills(data);
// //     } catch (error) {
// //       console.error('Error fetching bills:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <ScrollArea className="h-[600px] p-2">
// //       <div className="space-y-4">
// //         <h2 className="text-2xl font-bold text-purple-800 mb-4">View Bills</h2>

// //         {loading ? (
// //           <p>Loading bills...</p>
// //         ) : bills.length === 0 ? (
// //           <p>No bills found.</p>
// //         ) : (
// //           bills.map((bill) => (
// //             <Card key={bill._id} className="shadow-lg">
// //               <CardHeader>
// //                 <CardTitle>{bill.patientName}</CardTitle>
// //                 <p className="text-sm text-gray-500">
// //                   Bill Date: {new Date(bill.billDate).toLocaleDateString()}
// //                 </p>
// //               </CardHeader>
// //               <CardContent className="space-y-2">
// //                 <div className="flex justify-between">
// //                   <span className="font-semibold">Subtotal:</span>
// //                   <span>₹{bill.totalAmount?.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="font-semibold">Discount:</span>
// //                   <span>₹{bill.discount?.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="font-semibold">Total:</span>
// //                   <span>₹{bill.finalAmount?.toFixed(2)}</span>
// //                 </div>

// //                 <div className="mt-2">
// //                   <span className="font-semibold">Labs & Tests:</span>
// //                   <div className="mt-1 space-y-2">
// //                     {bill.labDetails.map((lab) => (
// //                       <Card key={lab.labId} className="bg-gray-50 p-2">
// //                         <CardHeader>
// //                           <CardTitle className="text-sm font-semibold">
// //                             {lab.labName} - Subtotal: ₹{lab.subtotal?.toFixed(2)}
// //                           </CardTitle>
// //                         </CardHeader>
// //                         <CardContent className="p-0">
// //                           <ul className="list-disc list-inside text-sm">
// //                             {lab.tests.map((test) => (
// //                               <li key={test.testId}>
// //                                 {test.testName} - ₹{test.price?.toFixed(2)}
// //                               </li>
// //                             ))}
// //                           </ul>
// //                         </CardContent>
// //                       </Card>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))
// //         )}
// //       </div>
// //     </ScrollArea>
// //   );
// // };

// // export default ViewBills;





// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// // import { ScrollArea } from '@/components/ui/scroll-area';
// // import { Button } from '@/components/ui/button';
// // import jsPDF from 'jspdf';
// // import autoTable from 'jspdf-autotable'; // Correct import for v5

// // interface BillItem {
// //   testId: string;
// //   testName: string;
// //   price: number;
// // }

// // interface LabDetail {
// //   labId: string;
// //   labName: string;
// //   subtotal: number;
// //   tests: BillItem[];
// // }

// // interface Bill {
// //   _id: string;
// //   patientName: string;
// //   billDate: string;
// //   totalAmount: number;
// //   discount: number;
// //   finalAmount: number;
// //   labDetails: LabDetail[];
// // }

// // const API_BASE_URL = 'http://localhost:5000/api';

// // const ViewBills = () => {
// //   const [bills, setBills] = useState<Bill[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   useEffect(() => {
// //     fetchBills();
// //   }, []);

// //   const fetchBills = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/bills`);
// //       if (!response.ok) throw new Error('Failed to fetch bills');
// //       const data: Bill[] = await response.json();
// //       setBills(data);
// //     } catch (error) {
// //       console.error('Error fetching bills:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const generatePDF = (bill: Bill) => {
// //     const doc = new jsPDF();

// //     // --- Header ---
// //     doc.setFillColor(128, 0, 0); // Mehroon
// //     doc.rect(0, 0, 210, 25, 'F');
// //     doc.setTextColor(255, 255, 255);
// //     doc.setFontSize(18);
// //     doc.text('Diagnosathi', 14, 17);

// //     // --- Watermark ---
// //     doc.setTextColor(200, 200, 200);
// //     doc.setFontSize(60);
// //     // watermark repeated diagonally
// //     for (let i = 0; i < 2; i++) {
// //       for (let j = 0; j < 2; j++) {
// //         doc.text('Diagnosathi', 35 + i * 90, 140 + j * 120, { angle: 45 });
// //       }
// //     }
// //     doc.setTextColor(0, 0, 0); // reset to black

// //     // --- Bill Info ---
// //     doc.setFontSize(12);
// //     doc.text(`Patient: ${bill.patientName}`, 14, 40);
// //     doc.text(`Bill Date: ${new Date(bill.billDate).toLocaleDateString()}`, 14, 48);
// //     doc.text(`Subtotal: ₹${bill.totalAmount?.toFixed(2)}`, 14, 56);
// //     doc.text(`Discount: ₹${bill.discount?.toFixed(2)}`, 14, 64);
// //     doc.text(`Final Amount: ₹${bill.finalAmount?.toFixed(2)}`, 14, 72);

// //     // --- Lab & Tests Table ---
// //     bill.labDetails.forEach((lab, index) => {
// //       const startY = 82 + index * 60;
// //       doc.setFontSize(13);
// //       doc.text(`${lab.labName} (Subtotal: ₹${lab.subtotal?.toFixed(2)})`, 14, startY);

// //       const rows = lab.tests.map((t) => [t.testName, `₹${t.price?.toFixed(2)}`]);

// //       autoTable(doc, {
// //         head: [['Test Name', 'Price']],
// //         body: rows,
// //         startY: startY + 5,
// //         theme: 'grid', // professional invoice style
// //         headStyles: { fillColor: [128, 0, 0], textColor: 255, fontStyle: 'bold' },
// //         styles: { fontSize: 10 },
// //       });
// //     });

// //     // --- Footer ---
// //     const pageHeight = doc.internal.pageSize.height;
// //     doc.setFillColor(128, 0, 0);
// //     doc.rect(0, pageHeight - 20, 210, 20, 'F');
// //     doc.setTextColor(255, 255, 255);
// //     doc.setFontSize(10);
// //     doc.text('Contact us: support@diagnosathi.com | +91-9876543210', 14, pageHeight - 8);

// //     // Save PDF
// //     doc.save(`Bill_${bill.patientName}.pdf`);
// //   };

// //   return (
// //     <ScrollArea className="h-[600px] p-2">
// //       <div className="space-y-4">
// //         <h2 className="text-2xl font-bold text-purple-800 mb-4">View Bills</h2>

// //         {loading ? (
// //           <p>Loading bills...</p>
// //         ) : bills.length === 0 ? (
// //           <p>No bills found.</p>
// //         ) : (
// //           bills.map((bill) => (
// //             <Card key={bill._id} className="shadow-lg">
// //               <CardHeader>
// //                 <CardTitle>{bill.patientName}</CardTitle>
// //                 <p className="text-sm text-gray-500">
// //                   Bill Date: {new Date(bill.billDate).toLocaleDateString()}
// //                 </p>
// //               </CardHeader>
// //               <CardContent className="space-y-2">
// //                 <div className="flex justify-between">
// //                   <span className="font-semibold">Subtotal:</span>
// //                   <span>₹{bill.totalAmount?.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="font-semibold">Discount:</span>
// //                   <span>₹{bill.discount?.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="font-semibold">Total:</span>
// //                   <span>₹{bill.finalAmount?.toFixed(2)}</span>
// //                 </div>

// //                 <div className="mt-2">
// //                   <span className="font-semibold">Labs & Tests:</span>
// //                   <div className="mt-1 space-y-2">
// //                     {bill.labDetails.map((lab) => (
// //                       <Card key={lab.labId} className="bg-gray-50 p-2">
// //                         <CardHeader>
// //                           <CardTitle className="text-sm font-semibold">
// //                             {lab.labName} - Subtotal: ₹{lab.subtotal?.toFixed(2)}
// //                           </CardTitle>
// //                         </CardHeader>
// //                         <CardContent className="p-0">
// //                           <ul className="list-disc list-inside text-sm">
// //                             {lab.tests.map((test) => (
// //                               <li key={test.testId}>
// //                                 {test.testName} - ₹{test.price?.toFixed(2)}
// //                               </li>
// //                             ))}
// //                           </ul>
// //                         </CardContent>
// //                       </Card>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Download PDF Button */}
// //                 <div className="mt-4">
// //                   <Button onClick={() => generatePDF(bill)} className="bg-purple-700 text-white">
// //                     Download PDF
// //                   </Button>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))
// //         )}
// //       </div>
// //     </ScrollArea>
// //   );
// // };

// // export default ViewBills;



// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Button } from '@/components/ui/button';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// interface BillItem {
//   testId: string;
//   testName: string;
//   price: number;
// }

// interface LabDetail {
//   labId: string;
//   labName: string;
//   subtotal: number;
//   tests: BillItem[];
// }

// interface Bill {
//   _id: string;
//   patientName: string;
//   billDate: string;
//   totalAmount: number;
//   discount: number;
//   finalAmount: number;
//   labDetails: LabDetail[];
// }

// const API_BASE_URL = 'http://localhost:5000/api';

// const ViewBills = () => {
//   const [bills, setBills] = useState<Bill[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [selectedBills, setSelectedBills] = useState<string[]>([]); // store selected IDs

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   const fetchBills = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/bills`);
//       if (!response.ok) throw new Error('Failed to fetch bills');
//       const data: Bill[] = await response.json();
//       setBills(data);
//     } catch (error) {
//       console.error('Error fetching bills:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectBill = (id: string) => {
//     setSelectedBills((prev) =>
//       prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
//     );
//   };

//   const handleDeleteBill = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this bill?')) return;
//     try {
//       const res = await fetch(`${API_BASE_URL}/bills/${id}`, { method: 'DELETE' });
//       if (!res.ok) throw new Error('Failed to delete bill');
//       setBills((prev) => prev.filter((b) => b._id !== id));
//     } catch (error) {
//       console.error('Error deleting bill:', error);
//     }
//   };

//   const handleDeleteMultiple = async () => {
//     if (selectedBills.length === 0) {
//       alert('Please select at least one bill to delete.');
//       return;
//     }

//     if (!confirm(`Delete ${selectedBills.length} selected bill(s)?`)) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/bills/multiple`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ids: selectedBills }),
//       });
//       if (!res.ok) throw new Error('Failed to delete multiple bills');
//       setBills((prev) => prev.filter((b) => !selectedBills.includes(b._id)));
//       setSelectedBills([]);
//     } catch (error) {
//       console.error('Error deleting multiple bills:', error);
//     }
//   };

//   const generatePDF = (bill: Bill) => {
//     const doc = new jsPDF();

//     // Header
//     doc.setFillColor(128, 0, 0);
//     doc.rect(0, 0, 210, 25, 'F');
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(18);
//     doc.text('Diagnosathi', 14, 17);

//     // Watermark
//     doc.setTextColor(200, 200, 200);
//     doc.setFontSize(60);
//     for (let i = 0; i < 2; i++) {
//       for (let j = 0; j < 2; j++) {
//         doc.text('Diagnosathi', 35 + i * 90, 140 + j * 120, { angle: 45 });
//       }
//     }
//     doc.setTextColor(0, 0, 0);

//     // Bill Info
//     doc.setFontSize(12);
//     doc.text(`Patient: ${bill.patientName}`, 14, 40);
//     doc.text(`Bill Date: ${new Date(bill.billDate).toLocaleDateString()}`, 14, 48);
//     doc.text(`Subtotal: ₹${bill.totalAmount?.toFixed(2)}`, 14, 56);
//     doc.text(`Discount: ₹${bill.discount?.toFixed(2)}`, 14, 64);
//     doc.text(`Final Amount: ₹${bill.finalAmount?.toFixed(2)}`, 14, 72);

//     // Lab & Tests Table
//     bill.labDetails.forEach((lab, index) => {
//       const startY = 82 + index * 60;
//       doc.setFontSize(13);
//       doc.text(`${lab.labName} (Subtotal: ₹${lab.subtotal?.toFixed(2)})`, 14, startY);

//       const rows = lab.tests.map((t) => [t.testName, `₹${t.price?.toFixed(2)}`]);

//       autoTable(doc, {
//         head: [['Test Name', 'Price']],
//         body: rows,
//         startY: startY + 5,
//         theme: 'grid',
//         headStyles: { fillColor: [128, 0, 0], textColor: 255, fontStyle: 'bold' },
//         styles: { fontSize: 10 },
//       });
//     });

//     // Footer
//     const pageHeight = doc.internal.pageSize.height;
//     doc.setFillColor(128, 0, 0);
//     doc.rect(0, pageHeight - 20, 210, 20, 'F');
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(10);
//     doc.text('Contact us: support@diagnosathi.com | +91-9876543210', 14, pageHeight - 8);

//     doc.save(`Bill_${bill.patientName}.pdf`);
//   };

//   return (
//     <ScrollArea className="h-[600px] p-2">
//       <div className="space-y-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-purple-800">View Bills</h2>
//           {selectedBills.length > 0 && (
//             <Button
//               onClick={handleDeleteMultiple}
//               className="bg-red-600 text-white hover:bg-red-700"
//             >
//               Delete Selected ({selectedBills.length})
//             </Button>
//           )}
//         </div>

//         {loading ? (
//           <p>Loading bills...</p>
//         ) : bills.length === 0 ? (
//           <p>No bills found.</p>
//         ) : (
//           bills.map((bill) => (
//             <Card key={bill._id} className="shadow-lg relative">
//               <div className="absolute top-2 left-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedBills.includes(bill._id)}
//                   onChange={() => handleSelectBill(bill._id)}
//                   className="h-4 w-4 cursor-pointer"
//                 />
//               </div>

//               <CardHeader>
//                 <CardTitle>{bill.patientName}</CardTitle>
//                 <p className="text-sm text-gray-500">
//                   Bill Date: {new Date(bill.billDate).toLocaleDateString()}
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Subtotal:</span>
//                   <span>₹{bill.totalAmount?.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Discount:</span>
//                   <span>₹{bill.discount?.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Total:</span>
//                   <span>₹{bill.finalAmount?.toFixed(2)}</span>
//                 </div>

//                 <div className="mt-2">
//                   <span className="font-semibold">Labs & Tests:</span>
//                   <div className="mt-1 space-y-2">
//                     {bill.labDetails.map((lab) => (
//                       <Card key={lab.labId} className="bg-gray-50 p-2">
//                         <CardHeader>
//                           <CardTitle className="text-sm font-semibold">
//                             {lab.labName} - Subtotal: ₹{lab.subtotal?.toFixed(2)}
//                           </CardTitle>
//                         </CardHeader>
//                         <CardContent className="p-0">
//                           <ul className="list-disc list-inside text-sm">
//                             {lab.tests.map((test) => (
//                               <li key={test.testId}>
//                                 {test.testName} - ₹{test.price?.toFixed(2)}
//                               </li>
//                             ))}
//                           </ul>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="mt-4 flex gap-2">
//                   <Button
//                     onClick={() => generatePDF(bill)}
//                     className="bg-purple-700 text-white"
//                   >
//                     Download PDF
//                   </Button>
//                   <Button
//                     onClick={() => handleDeleteBill(bill._id)}
//                     className="bg-red-600 text-white hover:bg-red-700"
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </div>
//     </ScrollArea>
//   );
// };

// export default ViewBills;







'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface BillItem {
  testId: string;
  testName: string;
  price: number;
}

interface LabDetail {
  labId: string;
  labName: string;
  subtotal: number;
  tests: BillItem[];
}

interface Bill {
  _id: string;
  patientName: string;
  billDate: string;
  totalAmount: number;
  discount: number;
  finalAmount: number;
  labDetails: LabDetail[];
}

// const API_BASE_URL = 'http://localhost:5000/api';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;



const ViewBills = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedBills, setSelectedBills] = useState<string[]>([]); // store selected IDs

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bills`);
      if (!response.ok) throw new Error('Failed to fetch bills');
      const data: Bill[] = await response.json();
      setBills(data);
    } catch (error) {
      console.error('Error fetching bills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectBill = (id: string) => {
    setSelectedBills((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const handleDeleteBill = async (id: string) => {
    if (!confirm('Are you sure you want to delete this bill?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/bills/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete bill');
      setBills((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error('Error deleting bill:', error);
    }
  };

  const handleDeleteMultiple = async () => {
    if (selectedBills.length === 0) {
      alert('Please select at least one bill to delete.');
      return;
    }

    if (!confirm(`Delete ${selectedBills.length} selected bill(s)?`)) return;

    try {
      const res = await fetch(`${API_BASE_URL}/bills/multiple`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedBills }),
      });
      if (!res.ok) throw new Error('Failed to delete multiple bills');
      setBills((prev) => prev.filter((b) => !selectedBills.includes(b._id)));
      setSelectedBills([]);
    } catch (error) {
      console.error('Error deleting multiple bills:', error);
    }
  };

 const generatePDF = (bill: Bill) => {
  const doc = new jsPDF();

  const formatRupee = (amount: number) => `Rs. ${Number(amount).toFixed(2)}`;

  // === HEADER WITH LOGO ===
  const logoUrl = '/logo.png'; // ✅ place your logo in public/logo.png
  const pageWidth = doc.internal.pageSize.getWidth();

  // Try loading logo if available
  try {
    doc.addImage(logoUrl, 'PNG', 14, 8, 25, 25);
  } catch (e) {
    console.warn('Logo not found, skipping image.');
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(70, 0, 130);
  doc.text('Diagnosathi Diagnostics', 45, 20);

  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text('123 Health Street, Jaipur, India | +91 9876543210', 45, 27);
  doc.text('Email: contact@diagnosathi.com | www.diagnosathi.com', 45, 32);

  // === INVOICE TITLE ===
  doc.setDrawColor(128, 0, 128);
  doc.setLineWidth(0.5);
  doc.line(14, 38, pageWidth - 14, 38);
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text('INVOICE', pageWidth / 2, 48, { align: 'center' });
  doc.line(14, 52, pageWidth - 14, 52);

  // === BILL DETAILS ===
  doc.setFontSize(12);
  doc.setTextColor(50, 50, 50);
  let y = 64;
  doc.text(`Patient Name: ${bill.patientName}`, 14, y);
  doc.text(`Bill Date: ${new Date(bill.billDate).toLocaleDateString()}`, 14, y + 8);
  //doc.text(`Bill ID: ${bill._id}`, 14, y + 16);

  // === LAB DETAILS TABLE ===
  y += 30;

  bill.labDetails.forEach((lab, index) => {
    doc.setFontSize(13);
    doc.setTextColor(70, 0, 130);
    //
    doc.text(`${lab.labName}  (Subtotal: ${formatRupee(lab.subtotal)})`, 14, y);

    const rows = lab.tests.map((t) => [t.testName, formatRupee(t.price)]);

    autoTable(doc, {
      head: [['Test Name', 'Price']],
      body: rows,
      startY: y + 5,
      theme: 'grid',
      headStyles: {
        fillColor: [70, 0, 130],
        textColor: 255,
        fontStyle: 'bold',
        halign: 'center',
      },
      styles: {
        fontSize: 11,
        cellPadding: 4,
        halign: 'left',
      },
      columnStyles: {
        1: { halign: 'right' },
      },
      margin: { left: 14, right: 14 },
    });

    y = (doc as any).lastAutoTable.finalY + 10;
  });

  // === TOTAL SECTION ===
  const totalsStartY = y + 10;
  doc.setDrawColor(200);
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(120, totalsStartY - 5, 75, 35, 2, 2, 'F');

  doc.setFontSize(12);
  doc.setTextColor(50, 50, 50);
  doc.text('Subtotal:', 125, totalsStartY + 3);
  doc.text('Discount:', 125, totalsStartY + 12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(70, 0, 130);
  doc.text('Total Payable:', 125, totalsStartY + 22);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(formatRupee(bill.totalAmount), 180, totalsStartY + 3, { align: 'right' });
  doc.text(formatRupee(bill.discount), 180, totalsStartY + 12, { align: 'right' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(0, 100, 0);
  doc.text(formatRupee(bill.finalAmount), 180, totalsStartY + 22, { align: 'right' });

  // === FOOTER ===
  const pageHeight = doc.internal.pageSize.height;
  doc.setDrawColor(128, 0, 128);
  doc.setFillColor(128, 0, 128);
  doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Thank you for choosing Diagnosathi Diagnostics!', pageWidth / 2, pageHeight - 10, { align: 'center' });

  doc.save(`Invoice_${bill.patientName}.pdf`);
};


  return (
    <ScrollArea className="h-[600px] p-2">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-800">View Bills</h2>
          {selectedBills.length > 0 && (
            <Button
              onClick={handleDeleteMultiple}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Delete Selected ({selectedBills.length})
            </Button>
          )}
        </div>

        {loading ? (
          <p>Loading bills...</p>
        ) : bills.length === 0 ? (
          <p>No bills found.</p>
        ) : (
          bills.map((bill) => (
            <Card key={bill._id} className="shadow-lg relative">
              <div className="absolute top-2 left-2">
                <input
                  type="checkbox"
                  checked={selectedBills.includes(bill._id)}
                  onChange={() => handleSelectBill(bill._id)}
                  className="h-4 w-4 cursor-pointer"
                />
              </div>

              <CardHeader>
                <CardTitle>{bill.patientName}</CardTitle>
                <p className="text-sm text-gray-500">
                  Bill Date: {new Date(bill.billDate).toLocaleDateString()}
                </p>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="flex flex-col space-y-2">
                  {bill.labDetails.map((lab) => (
                    <Card key={lab.labId} className="bg-gray-50 p-2">
                      <CardHeader>
                        <CardTitle className="text-sm font-semibold">
                          {lab.labName} - Subtotal: ₹{lab.subtotal.toFixed(2)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="list-disc list-inside text-sm">
                          {lab.tests.map((test) => (
                            <li key={test.testId}>
                              {test.testName} - ₹{test.price.toFixed(2)}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Subtotal:</span>
                    <span>₹{bill.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Discount:</span>
                    <span>₹{bill.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-purple-700">
                    <span>Total:</span>
                    <span>₹{bill.finalAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <Button
                    onClick={() => generatePDF(bill)}
                    className="bg-purple-700 text-white"
                  >
                    Download PDF
                  </Button>
                  <Button
                    onClick={() => handleDeleteBill(bill._id)}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </ScrollArea>
  );
};

export default ViewBills;
