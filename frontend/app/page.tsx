// // // 'use client';

// // // import React, { useState, useEffect } from 'react';

// // // // Define the types for your data structures
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

// // // const API_BASE_URL = 'http://localhost:5000/api';

// // // export default function AdminPanel() {
// // //     const [labs, setLabs] = useState<Lab[]>([]);
// // //     const [newLabName, setNewLabName] = useState<string>('');
// // //     const [newTestLabId, setNewTestLabId] = useState<string>('');
// // //     const [newTestName, setNewTestName] = useState<string>('');
// // //     const [newTestPrice, setNewTestPrice] = useState<string>('');
    
// // //     const [searchTerm, setSearchTerm] = useState<string>('');
// // //     const [selectedTestsForBill, setSelectedTestsForBill] = useState<BillItem[]>([]);
// // //     const [patientName, setPatientName] = useState<string>('');
// // //     const [discount, setDiscount] = useState<number>(0);

// // //     // Fetch labs from the backend on component load
// // //     useEffect(() => {
// // //         fetchLabs();
// // //     }, []);

// // //     const fetchLabs = async () => {
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/labs`);
// // //             if (!response.ok) throw new Error('Failed to fetch labs');
// // //             const data: Lab[] = await response.json();
// // //             setLabs(data);
// // //             if (data.length > 0) {
// // //                 setNewTestLabId(data[0]._id);
// // //             }
// // //         } catch (error) {
// // //             console.error("Error fetching labs:", error);
// // //         }
// // //     };

// // //     // --- Lab CRUD Operations ---

// // //     const handleAddLab = async (e: React.FormEvent) => {
// // //         e.preventDefault();
// // //         if (!newLabName) return;
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/labs`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ name: newLabName }),
// // //             });
// // //             if (!response.ok) throw new Error('Failed to add lab');
// // //             setNewLabName('');
// // //             fetchLabs(); // Refresh the list
// // //         } catch (error) {
// // //             console.error("Error adding lab:", error);
// // //         }
// // //     };

// // //     const handleDeleteLab = async (labId: string) => {
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/labs/${labId}`, {
// // //                 method: 'DELETE',
// // //             });
// // //             if (!response.ok) throw new Error('Failed to delete lab');
// // //             fetchLabs();
// // //         } catch (error) {
// // //             console.error("Error deleting lab:", error);
// // //         }
// // //     };

// // //     // --- Test CRUD Operations ---

// // //     const handleAddTest = async (e: React.FormEvent) => {
// // //         e.preventDefault();
// // //         if (!newTestLabId || !newTestName || !newTestPrice) return;
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/labs/${newTestLabId}/tests`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({
// // //                     testId: `test_${Date.now()}`,
// // //                     name: newTestName,
// // //                     price: parseFloat(newTestPrice),
// // //                 }),
// // //             });
// // //             if (!response.ok) throw new Error('Failed to add test');
// // //             setNewTestName('');
// // //             setNewTestPrice('');
// // //             fetchLabs();
// // //         } catch (error) {
// // //             console.error("Error adding test:", error);
// // //         }
// // //     };

// // //     const handleUpdateTestPrice = async (labId: string, testId: string, newPrice: string) => {
// // //         try {
// // //             await fetch(`${API_BASE_URL}/labs/${labId}/tests/${testId}/price`, {
// // //                 method: 'PUT',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ price: parseFloat(newPrice) }),
// // //             });
// // //             fetchLabs();
// // //         } catch (error) {
// // //             console.error("Error updating test price:", error);
// // //         }
// // //     };

// // //     const handleDeleteTest = async (labId: string, testId: string) => {
// // //         try {
// // //             const response = await fetch(`${API_BASE_URL}/labs/${labId}/tests/${testId}`, {
// // //                 method: 'DELETE',
// // //             });
// // //             if (!response.ok) throw new Error('Failed to delete test');
// // //             fetchLabs();
// // //         } catch (error) {
// // //             console.error("Error deleting test:", error);
// // //         }
// // //     };

// // //     // --- Bill Generation Functions ---
// // //     const searchTermsArray = searchTerm.split(',').map(s => s.trim().toLowerCase()).filter(s => s);
// // //     const filteredLabs = labs.map(lab => ({
// // //         ...lab,
// // //         tests: lab.tests.filter(test =>
// // //             searchTermsArray.some(term => test.name.toLowerCase().includes(term))
// // //         )
// // //     })).filter(lab => lab.tests.length > 0);

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
// // //     const billDate = new Date().toLocaleDateString('en-IN', {
// // //         year: 'numeric',
// // //         month: 'long',
// // //         day: 'numeric',
// // //     });

// // //     const printBill = () => {
// // //         window.print();
// // //     };

// // //     return (
// // //         <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans">
// // //             <div className="max-w-7xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
// // //                 <div className="text-center mb-10">
// // //                     <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Diagnosathi Admin Panel</h1>
// // //                     <p className="text-lg text-gray-500 mt-2">Manage labs, tests, and billing with ease.</p>
// // //                 </div>
        
// // //                 {/* --- Main Dashboard Sections --- */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
// // //                     {/* Add New Lab Card */}
// // //                     <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
// // //                         <h2 className="text-xl font-bold text-blue-700 mb-4">Add New Lab</h2>
// // //                         <form onSubmit={handleAddLab} className="space-y-4">
// // //                             <div>
// // //                                 <label htmlFor="lab_name" className="block text-sm font-medium text-gray-700 mb-1">Lab Name</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     id="lab_name"
// // //                                     value={newLabName}
// // //                                     onChange={(e) => setNewLabName(e.target.value)}
// // //                                     placeholder="e.g., MediCare Lab"
// // //                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
// // //                                 />
// // //                             </div>
// // //                             <button
// // //                                 type="submit"
// // //                                 className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform active:scale-95"
// // //                             >
// // //                                 Add Lab
// // //                             </button>
// // //                         </form>
// // //                     </div>
        
// // //                     {/* Add New Test Card */}
// // //                     <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
// // //                         <h2 className="text-xl font-bold text-green-700 mb-4">Add New Test</h2>
// // //                         <form onSubmit={handleAddTest} className="space-y-4">
// // //                             <div>
// // //                                 <label htmlFor="lab_select" className="block text-sm font-medium text-gray-700 mb-1">Select Lab</label>
// // //                                 <select
// // //                                     id="lab_select"
// // //                                     value={newTestLabId}
// // //                                     onChange={(e) => setNewTestLabId(e.target.value)}
// // //                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
// // //                                 >
// // //                                     {labs.map(lab => (
// // //                                         <option key={lab._id} value={lab._id}>{lab.name}</option>
// // //                                     ))}
// // //                                 </select>
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="test_name" className="block text-sm font-medium text-gray-700 mb-1">Test Name</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     id="test_name"
// // //                                     value={newTestName}
// // //                                     onChange={(e) => setNewTestName(e.target.value)}
// // //                                     placeholder="e.g., CBC"
// // //                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
// // //                                 <input
// // //                                     type="number"
// // //                                     id="price"
// // //                                     value={newTestPrice}
// // //                                     onChange={(e) => setNewTestPrice(e.target.value)}
// // //                                     step="0.01"
// // //                                     placeholder="e.g., 500"
// // //                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
// // //                                 />
// // //                             </div>
// // //                             <button
// // //                                 type="submit"
// // //                                 className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 transform active:scale-95"
// // //                             >
// // //                                 Add Test
// // //                             </button>
// // //                         </form>
// // //                     </div>
                    
// // //                     {/* Delete Lab Card */}
// // //                     <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
// // //                         <h2 className="text-xl font-bold text-red-700 mb-4">Delete Lab</h2>
// // //                         <form onSubmit={(e) => {
// // //                             e.preventDefault();
// // //                             const form = e.target as HTMLFormElement;
// // //                             const labSelect = form.elements.namedItem('delete_lab_select') as HTMLSelectElement;
// // //                             handleDeleteLab(labSelect.value);
// // //                         }} className="space-y-4">
// // //                             <div>
// // //                                 <label htmlFor="delete_lab_select" className="block text-sm font-medium text-gray-700 mb-1">Select Lab to Delete</label>
// // //                                 <select id="delete_lab_select" name="lab_id" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300">
// // //                                     {labs.map(lab => (
// // //                                         <option key={lab._id} value={lab._id}>{lab.name}</option>
// // //                                     ))}
// // //                                 </select>
// // //                             </div>
// // //                             <button
// // //                                 type="submit"
// // //                                 className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 transform active:scale-95"
// // //                             >
// // //                                 Delete Lab
// // //                             </button>
// // //                         </form>
// // //                     </div>
// // //                 </div>
        
// // //                 <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-12">
// // //                     <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Existing Labs & Tests</h2>
// // //                     <div className="space-y-8 max-h-96 overflow-y-auto">
// // //                         {labs.length === 0 ? (
// // //                             <p className="text-center text-gray-400 p-4">No labs found. Add a new lab to get started.</p>
// // //                         ) : (
// // //                             labs.map(lab => (
// // //                                 <div key={lab._id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
// // //                                     <h3 className="text-lg font-bold text-gray-800 mb-4 flex justify-between items-center">{lab.name}</h3>
// // //                                     {lab.tests.length === 0 ? (
// // //                                         <p className="text-sm text-gray-400">No tests added for this lab yet.</p>
// // //                                     ) : (
// // //                                         <div className="overflow-x-auto">
// // //                                             <table className="min-w-full divide-y divide-gray-200">
// // //                                                 <thead className="bg-gray-100">
// // //                                                     <tr>
// // //                                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Test Name</th>
// // //                                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price (₹)</th>
// // //                                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
// // //                                                     </tr>
// // //                                                 </thead>
// // //                                                 <tbody className="bg-white divide-y divide-gray-200">
// // //                                                     {lab.tests.map(test => (
// // //                                                         <tr key={test.testId}>
// // //                                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.name}</td>
// // //                                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                                                                 <input
// // //                                                                     type="number"
// // //                                                                     value={test.price}
// // //                                                                     onChange={(e) => handleUpdateTestPrice(lab._id, test.testId, e.target.value)}
// // //                                                                     step="0.01"
// // //                                                                     className="w-24 px-2 py-1 border rounded-md text-sm"
// // //                                                                 />
// // //                                                             </td>
// // //                                                             <td className="px-6 py-4 whitespace-now-wrap text-sm text-gray-500">
// // //                                                                 <button
// // //                                                                     onClick={() => handleDeleteTest(lab._id, test.testId)}
// // //                                                                     className="bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
// // //                                                                 >
// // //                                                                     Delete
// // //                                                                 </button>
// // //                                                             </td>
// // //                                                         </tr>
// // //                                                     ))}
// // //                                                 </tbody>
// // //                                             </table>
// // //                                         </div>
// // //                                     )}
// // //                                 </div>
// // //                             ))
// // //                         )}
// // //                     </div>
// // //                 </div>

// // //                 {/* --- Bill Generation Section --- */}
// // //                 <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white to-purple-50 border border-purple-100">
// // //                     <h2 className="text-2xl font-bold text-purple-800 mb-6">Generate New Bill</h2>
                    
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // //                         <div>
// // //                             <label htmlFor="patient_name" className="block text-sm font-medium text-purple-700 mb-1">Patient Name</label>
// // //                             <input
// // //                                 type="text"
// // //                                 id="patient_name"
// // //                                 value={patientName}
// // //                                 onChange={(e) => setPatientName(e.target.value)}
// // //                                 placeholder="Enter patient name"
// // //                                 className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label htmlFor="search_tests" className="block text-sm font-medium text-purple-700 mb-1">Search Tests (comma-separated)</label>
// // //                             <input
// // //                                 type="text"
// // //                                 id="search_tests"
// // //                                 value={searchTerm}
// // //                                 onChange={(e) => setSearchTerm(e.target.value)}
// // //                                 placeholder="e.g., CBC, Sugar, Thyroid"
// // //                                 className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
// // //                             />
// // //                         </div>
// // //                     </div>
                    
// // //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //                         {/* Search Results */}
// // //                         <div>
// // //                             <h3 className="text-lg font-semibold text-gray-700 mb-4">Available Tests</h3>
// // //                             <div className="bg-white p-4 rounded-xl shadow-inner h-96 overflow-y-auto space-y-4 pr-2 border border-gray-200">
// // //                                 {filteredLabs.length > 0 ? filteredLabs.map(lab => (
// // //                                     <div key={lab._id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
// // //                                         <h4 className="font-bold text-md text-gray-800 mb-2">{lab.name}</h4>
// // //                                         <ul className="space-y-2">
// // //                                             {lab.tests.map(test => (
// // //                                                 <li key={test.testId} className="flex justify-between items-center text-sm text-gray-600">
// // //                                                     <span>{test.name}</span>
// // //                                                     <div className="flex items-center space-x-2">
// // //                                                         <span className="font-semibold">₹{test.price.toFixed(2)}</span>
// // //                                                         <button
// // //                                                             onClick={() => handleAddTestToBill(lab, test)}
// // //                                                             className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full hover:bg-purple-700 transition duration-300 transform active:scale-95"
// // //                                                         >
// // //                                                             Add
// // //                                                         </button>
// // //                                                     </div>
// // //                                                 </li>
// // //                                             ))}
// // //                                         </ul>
// // //                                     </div>
// // //                                 )) : (
// // //                                     <p className="text-center text-gray-400 p-4">No tests found matching your search.</p>
// // //                                 )}
// // //                             </div>
// // //                         </div>
                        
// // //                         {/* Bill Preview */}
// // //                         <div className="relative">
// // //                             <h3 className="text-lg font-semibold text-gray-700 mb-4">Current Bill</h3>
// // //                             <div className="bg-white p-6 rounded-lg shadow-md h-auto overflow-y-auto flex flex-col justify-between border border-gray-200">
// // //                                 {/* Bill Header */}
// // //                                 <div className="border-b-2 border-gray-300 pb-4 mb-4">
// // //                                     <div className="flex items-center justify-center mb-4">
// // //                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
// // //                                         </svg>
// // //                                         <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Diagnosathi</h1>
// // //                                     </div>
// // //                                     <p className="text-sm text-gray-600 text-center">Your Lab Aggregator Partner</p>
// // //                                     <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
// // //                                         <div>
// // //                                             <p><span className="font-semibold">Bill ID:</span> {billId}</p>
// // //                                             <p><span className="font-semibold">Bill Date:</span> {billDate}</p>
// // //                                         </div>
// // //                                         <div className="text-right">
// // //                                             <p><span className="font-semibold">Patient:</span> {patientName || 'N/A'}</p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
                                
// // //                                 {/* Bill Body */}
// // //                                 <div className="flex-1 my-4">
// // //                                     {selectedTestsForBill.length > 0 ? (
// // //                                         <div className="space-y-4">
// // //                                             {Object.values(groupedBillItems).map((labBill, index) => (
// // //                                                 <div key={index} className="bg-gray-50 p-4 rounded-lg">
// // //                                                     <h4 className="font-bold text-gray-800 mb-2">{labBill.labName}</h4>
// // //                                                     <ul className="space-y-1">
// // //                                                         {labBill.tests.map(test => (
// // //                                                             <li key={test.testId} className="flex justify-between text-sm text-gray-600">
// // //                                                                 <span>{test.testName}</span>
// // //                                                                 <div className="flex items-center space-x-2">
// // //                                                                     <span>₹{test.price.toFixed(2)}</span>
// // //                                                                     <button
// // //                                                                         onClick={() => handleRemoveTestFromBill(test.labId, test.testId)}
// // //                                                                         className="text-red-500 hover:text-red-700 transition duration-300 text-xs"
// // //                                                                     >
// // //                                                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
// // //                                                                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// // //                                                                         </svg>
// // //                                                                     </button>
// // //                                                                 </div>
// // //                                                             </li>
// // //                                                         ))}
// // //                                                     </ul>
// // //                                                 </div>
// // //                                             ))}
// // //                                         </div>
// // //                                     ) : (
// // //                                         <p className="text-center text-gray-400 p-4">Add tests to generate a bill.</p>
// // //                                     )}
// // //                                 </div>
                                
// // //                                 {/* Discount Input */}
// // //                                 <div className="mt-4 flex justify-between items-center text-gray-800 border-t border-gray-200 pt-4">
// // //                                     <label htmlFor="discount" className="text-md font-bold">Discount (₹)</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         id="discount"
// // //                                         value={discount}
// // //                                         onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
// // //                                         className="w-24 text-right px-2 py-1 border rounded-md font-semibold"
// // //                                         min="0"
// // //                                     />
// // //                                 </div>

// // //                                 {/* Bill Footer */}
// // //                                 <div className="border-t-2 border-dashed border-gray-300 pt-4 mt-4">
// // //                                     <div className="flex justify-between items-center mb-2">
// // //                                         <span className="text-lg text-gray-600">Subtotal:</span>
// // //                                         <span className="text-lg font-bold text-gray-800">₹{subtotal.toFixed(2)}</span>
// // //                                     </div>
// // //                                     <div className="flex justify-between items-center mb-4">
// // //                                         <span className="text-lg font-bold text-gray-800">Total:</span>
// // //                                         <span className="text-2xl font-extrabold text-purple-600">₹{finalTotal.toFixed(2)}</span>
// // //                                     </div>
// // //                                     <div className="flex space-x-4">
// // //                                         <button
// // //                                             onClick={printBill}
// // //                                             disabled={selectedTestsForBill.length === 0}
// // //                                             className="flex-1 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 transform active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
// // //                                         >
// // //                                             Print Bill
// // //                                         </button>
// // //                                         <button
// // //                                             onClick={handleClearBill}
// // //                                             disabled={selectedTestsForBill.length === 0}
// // //                                             className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300 transform active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
// // //                                         >
// // //                                             Clear Bill
// // //                                         </button>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }



// // import React from 'react';
// // import AddLabForm from './components/forms/AddLabForm';
// // import AddTestForm from './components/forms/AddTestForm';
// // import ManageLabsAndTests from './components/panels/ManageLabsAndTests';
// // import BillGeneration from './components/billing/BillGeneration';

// // const API_BASE_URL = 'http://localhost:5000/api';

// // export default function AdminPanel() {
// //     return (
// //         <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans">
// //             <div className="max-w-7xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
// //                 <div className="text-center mb-10">
// //                     <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Diagnosathi Admin Panel</h1>
// //                     <p className="text-lg text-gray-500 mt-2">Manage labs, tests, and generate bills with ease.</p>
// //                 </div>

// //                 {/* Grid for forms and panels */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
// //                     <AddLabForm apiBaseUrl={API_BASE_URL} />
// //                     <AddTestForm apiBaseUrl={API_BASE_URL} />
// //                     <ManageLabsAndTests apiBaseUrl={API_BASE_URL} />
// //                 </div>
                
// //                 {/* Bill generation component */}
// //                 <BillGeneration apiBaseUrl={API_BASE_URL} />
// //             </div>
// //         </div>
// //     );
// // }



// 'use client';

// import React, { useState } from 'react';
// import Header from './components/shared/Header';
// import Footer from './components/shared/Footer';
// import AddLabForm from './components/forms/AddLabForm';
// import AddTestForm from './components/forms/AddTestForm';
// import ManageLabsAndTests from './components/panels/ManageLabsAndTests';
// import BillGeneration from './components/billing/BillGeneration';

// const API_BASE_URL = 'http://localhost:5000/api';

// type Page = 'home' | 'manageLabs' | 'addTest' | 'addLab' | 'generateBill';

// export default function AdminPanel() {
//     const [currentPage, setCurrentPage] = useState<Page>('home');

//     // Render the appropriate component based on the current state
//     const renderContent = () => {
//         switch (currentPage) {
//             case 'addLab':
//                 return <AddLabForm apiBaseUrl={API_BASE_URL} />;
//             case 'addTest':
//                 return <AddTestForm apiBaseUrl={API_BASE_URL} />;
//             case 'manageLabs':
//                 return <ManageLabsAndTests apiBaseUrl={API_BASE_URL} />;
//             case 'generateBill':
//                 return <BillGeneration apiBaseUrl={API_BASE_URL} />;
//             case 'home':
//             default:
//                 return (
//                     <div className="space-y-8">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             <button
//                                 className="p-6 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors transform hover:scale-105"
//                                 onClick={() => setCurrentPage('addLab')}
//                             >
//                                 Add New Lab
//                             </button>
//                             <button
//                                 className="p-6 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors transform hover:scale-105"
//                                 onClick={() => setCurrentPage('addTest')}
//                             >
//                                 Add New Test
//                             </button>
//                             <button
//                                 className="p-6 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:bg-purple-600 transition-colors transform hover:scale-105"
//                                 onClick={() => setCurrentPage('manageLabs')}
//                             >
//                                 Manage Labs & Tests
//                             </button>
//                             <button
//                                 className="p-6 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition-colors transform hover:scale-105"
//                                 onClick={() => setCurrentPage('generateBill')}
//                             >
//                                 Generate Bill
//                             </button>
//                         </div>
//                     </div>
//                 );
//         }
//     };

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header setCurrentPage={setCurrentPage} />
//             <main className="flex-1 p-4 sm:p-8 font-sans">
//                 <div className="max-w-7xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
//                     <div className="text-center mb-10">
//                         <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Diagnosathi Admin Panel</h1>
//                         <p className="text-lg text-gray-500 mt-2">Select an option below to get started.</p>
//                     </div>
//                     {renderContent()}
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// }



// 'use client';

// import React, { useState } from 'react';
// import Header from './components/shared/Header';
// import Footer from './components/shared/Footer';
// import AddLabForm from './components/forms/AddLabForm';
// import AddTestForm from './components/forms/AddTestForm';
// import ManageLabsAndTests from './components/panels/ManageLabsAndTests';
// import BillGeneration from './components/billing/BillGeneration';
// import ViewBills from './components/billing/View-bills';


// const API_BASE_URL = 'http://localhost:5000/api';

// type Page = 'home' | 'manageLabs' | 'addTest' | 'addLab' | 'generateBill' | 'viewBills';

// export default function AdminPanel() {
//   const [currentPage, setCurrentPage] = useState<Page>('home');

//   // ✅ Reusable button component
//   const ActionButton = ({
//     label,
//     color,
//     onClick,
//   }: {
//     label: string;
//     color: string;
//     onClick: () => void;
//   }) => (
//     <button
//       onClick={onClick}
//       className={`p-6 rounded-2xl font-semibold text-white shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${color}`}
//     >
//       {label}
//     </button>
//   );

//   // ✅ Dynamic render
//   const renderContent = () => {
//     switch (currentPage) {
//       case 'addLab':
//         return <AddLabForm apiBaseUrl={API_BASE_URL} />;
//       case 'addTest':
//         return <AddTestForm apiBaseUrl={API_BASE_URL} />;
//       case 'manageLabs':
//         return <ManageLabsAndTests apiBaseUrl={API_BASE_URL} />;
//       case 'generateBill':
//         return <BillGeneration apiBaseUrl={API_BASE_URL} />;
//       case 'viewBills': 
//       return <ViewBills />;
//       case 'home':
//       default:
//         return (
//           <div className="space-y-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               <ActionButton
//                 label="➕ Add New Lab"
//                 color="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
//                 onClick={() => setCurrentPage('addLab')}
//               />
//               <ActionButton
//                 label="🧪 Add New Test"
//                 color="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
//                 onClick={() => setCurrentPage('addTest')}
//               />
//               <ActionButton
//                 label="📋 Manage Labs & Tests"
//                 color="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
//                 onClick={() => setCurrentPage('manageLabs')}
//               />
//               <ActionButton
//                 label="🧾 Generate Bill"
//                 color="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
//                 onClick={() => setCurrentPage('generateBill')}
//               />
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header setCurrentPage={setCurrentPage} />
//       <main className="flex-1 p-4 sm:p-8 font-sans">
//         <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl">
//           <div className="text-center mb-10">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">
//               Diagnosathi Admin Panel
//             </h1>
//             <p className="text-lg text-gray-600 mt-3">
//               Select an option below to get started.
//             </p>
//           </div>
//           {renderContent()}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }



'use client';

import React, { useState } from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import AddLabForm from './components/forms/AddLabForm';
import AddTestForm from './components/forms/AddTestForm';
import ManageLabsAndTests from './components/panels/ManageLabsAndTests';
import BillGeneration from './components/billing/BillGeneration';
import ViewBills from './components/billing/View-bills';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// const API_BASE_URL = 'http://localhost:5000/api'; 
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;


type Page = 'home' | 'manageLabs' | 'addTest' | 'addLab' | 'generateBill' | 'viewBills';

export default function AdminPanel() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'addLab':
        return <AddLabForm apiBaseUrl={API_BASE_URL} />;
      case 'addTest':
        return <AddTestForm apiBaseUrl={API_BASE_URL} />;
      case 'manageLabs':
        return <ManageLabsAndTests apiBaseUrl={API_BASE_URL} />;
      case 'generateBill':
        return <BillGeneration apiBaseUrl={API_BASE_URL} />;
      case 'viewBills':
        return <ViewBills />;
      case 'home':
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Add New Lab</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => setCurrentPage('addLab')}
                >
                  ➕ Add Lab
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Add New Test</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-green-500 text-white hover:bg-green-600"
                  onClick={() => setCurrentPage('addTest')}
                >
                  🧪 Add Test
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Manage Labs & Tests</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-purple-500 text-white hover:bg-purple-600"
                  onClick={() => setCurrentPage('manageLabs')}
                >
                  📋 Manage
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Generate Bill</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-indigo-500 text-white hover:bg-indigo-600"
                  onClick={() => setCurrentPage('generateBill')}
                >
                  🧾 Bill
                </Button>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-4 sm:p-8 font-sans">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">
              Diagnosathi Admin Panel
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              Select an option below to get started.
            </p>
          </div>
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}
