// // 'use client';

// // import React, { useState, useEffect } from 'react';

// // interface ManageLabsAndTestsProps {
// //     apiBaseUrl: string;
// // }

// // interface Test {
// //     testId: string;
// //     name: string;
// //     price: number;
// // }

// // interface Lab {
// //     _id: string;
// //     name: string;
// //     tests: Test[];
// // }

// // export default function ManageLabsAndTests({ apiBaseUrl }: ManageLabsAndTestsProps) {
// //     const [labs, setLabs] = useState<Lab[]>([]);

// //     useEffect(() => {
// //         fetchLabs();
// //     }, []);

// //     const fetchLabs = async () => {
// //         try {
// //             const response = await fetch(`${apiBaseUrl}/labs`);
// //             if (!response.ok) throw new Error('Failed to fetch labs');
// //             const data: Lab[] = await response.json();
// //             setLabs(data);
// //         } catch (error) {
// //             console.error("Error fetching labs:", error);
// //         }
// //     };

// //     const handleUpdateTestPrice = async (labId: string, testId: string, newPrice: string) => {
// //         try {
// //             await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}/price`, {
// //                 method: 'PUT',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ price: parseFloat(newPrice) }),
// //             });
// //             fetchLabs();
// //         } catch (error) {
// //             console.error("Error updating test price:", error);
// //         }
// //     };

// //     const handleDeleteTest = async (labId: string, testId: string) => {
// //         try {
// //             const response = await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}`, {
// //                 method: 'DELETE',
// //             });
// //             if (!response.ok) throw new Error('Failed to delete test');
// //             fetchLabs();
// //         } catch (error) {
// //             console.error("Error deleting test:", error);
// //         }
// //     };
    
// //     const handleDeleteLab = async (labId: string) => {
// //         try {
// //             const response = await fetch(`${apiBaseUrl}/labs/${labId}`, {
// //                 method: 'DELETE',
// //             });
// //             if (!response.ok) throw new Error('Failed to delete lab');
// //             fetchLabs();
// //         } catch (error) {
// //             console.error("Error deleting lab:", error);
// //         }
// //     };

// //     return (
// //         <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-12 col-span-1 md:col-span-2 lg:col-span-3">
// //             <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Existing Labs & Tests</h2>
// //             <div className="space-y-8 max-h-96 overflow-y-auto">
// //                 {labs.length === 0 ? (
// //                     <p className="text-center text-gray-400 p-4">No labs found. Add a new lab to get started.</p>
// //                 ) : (
// //                     labs.map(lab => (
// //                         <div key={lab._id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
// //                             <h3 className="text-lg font-bold text-gray-800 mb-4 flex justify-between items-center">
// //                                 {lab.name}
// //                                 <button
// //                                     onClick={() => handleDeleteLab(lab._id)}
// //                                     className="bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
// //                                 >
// //                                     Delete Lab
// //                                 </button>
// //                             </h3>
// //                             {lab.tests.length === 0 ? (
// //                                 <p className="text-sm text-gray-400">No tests added for this lab yet.</p>
// //                             ) : (
// //                                 <div className="overflow-x-auto">
// //                                     <table className="min-w-full divide-y divide-gray-200">
// //                                         <thead className="bg-gray-100">
// //                                             <tr>
// //                                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Test Name</th>
// //                                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price (₹)</th>
// //                                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
// //                                             </tr>
// //                                         </thead>
// //                                         <tbody className="bg-white divide-y divide-gray-200">
// //                                             {lab.tests.map(test => (
// //                                                 <tr key={test.testId}>
// //                                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.name}</td>
// //                                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                                                         <input
// //                                                             type="number"
// //                                                             value={test.price}
// //                                                             onChange={(e) => handleUpdateTestPrice(lab._id, test.testId, e.target.value)}
// //                                                             step="0.01"
// //                                                             className="w-24 px-2 py-1 border rounded-md text-sm"
// //                                                         />
// //                                                     </td>
// //                                                     <td className="px-6 py-4 whitespace-now-wrap text-sm text-gray-500">
// //                                                         <button
// //                                                             onClick={() => handleDeleteTest(lab._id, test.testId)}
// //                                                             className="bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
// //                                                         >
// //                                                             Delete
// //                                                         </button>
// //                                                     </td>
// //                                                 </tr>
// //                                             ))}
// //                                         </tbody>
// //                                     </table>
// //                                 </div>
// //                             )}
// //                         </div>
// //                     ))
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }


// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Input } from '@/components/ui/input';
// // import { Button } from '@/components/ui/button';
// // import { ScrollArea } from '@/components/ui/scroll-area';

// // interface ManageLabsAndTestsProps {
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

// // export default function ManageLabsAndTests({ apiBaseUrl }: ManageLabsAndTestsProps) {
// //   const [labs, setLabs] = useState<Lab[]>([]);

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
// //     }
// //   };

// //   const handleUpdateTestPrice = async (labId: string, testId: string, newPrice: string) => {
// //     try {
// //       await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}/price`, {
// //         method: 'PUT',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ price: parseFloat(newPrice) }),
// //       });
// //       fetchLabs();
// //     } catch (error) {
// //       console.error('Error updating test price:', error);
// //     }
// //   };

// //   const handleDeleteTest = async (labId: string, testId: string) => {
// //     try {
// //       const response = await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}`, {
// //         method: 'DELETE',
// //       });
// //       if (!response.ok) throw new Error('Failed to delete test');
// //       fetchLabs();
// //     } catch (error) {
// //       console.error('Error deleting test:', error);
// //     }
// //   };

// //   const handleDeleteLab = async (labId: string) => {
// //     try {
// //       const response = await fetch(`${apiBaseUrl}/labs/${labId}`, {
// //         method: 'DELETE',
// //       });
// //       if (!response.ok) throw new Error('Failed to delete lab');
// //       fetchLabs();
// //     } catch (error) {
// //       console.error('Error deleting lab:', error);
// //     }
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-2xl font-bold text-gray-700">Manage Labs & Tests</h2>

// //       {labs.length === 0 ? (
// //         <Card className="p-6 text-center text-gray-500">
// //           <CardContent>No labs found. Add a new lab to get started.</CardContent>
// //         </Card>
// //       ) : (
// //         <ScrollArea className="max-h-[600px]">
// //           <div className="space-y-4">
// //             {labs.map((lab) => (
// //               <Card key={lab._id} className="shadow-lg">
// //                 <CardHeader className="flex justify-between items-center">
// //                   <CardTitle className="text-lg">{lab.name}</CardTitle>
// //                   <Button
// //                     variant="destructive"
// //                     size="sm"
// //                     onClick={() => handleDeleteLab(lab._id)}
// //                   >
// //                     Delete Lab
// //                   </Button>
// //                 </CardHeader>

// //                 <CardContent>
// //                   {lab.tests.length === 0 ? (
// //                     <p className="text-gray-400 text-sm">No tests added for this lab yet.</p>
// //                   ) : (
// //                     <div className="overflow-x-auto">
// //                       <table className="w-full min-w-[600px] table-auto">
// //                         <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
// //                           <tr>
// //                             <th className="px-4 py-2 text-left">Test Name</th>
// //                             <th className="px-4 py-2 text-left">Price (₹)</th>
// //                             <th className="px-4 py-2 text-left">Actions</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody className="divide-y divide-gray-200">
// //                           {lab.tests.map((test) => (
// //                             <tr key={test.testId}>
// //                               <td className="px-4 py-2">{test.name}</td>
// //                               <td className="px-4 py-2">
// //                                 <Input
// //                                   type="number"
// //                                   value={test.price}
// //                                   onChange={(e) =>
// //                                     handleUpdateTestPrice(lab._id, test.testId, e.target.value)
// //                                   }
// //                                   step={0.01}
// //                                   className="w-24"
// //                                 />
// //                               </td>
// //                               <td className="px-4 py-2">
// //                                 <Button
// //                                   variant="destructive"
// //                                   size="sm"
// //                                   onClick={() => handleDeleteTest(lab._id, test.testId)}
// //                                 >
// //                                   Delete
// //                                 </Button>
// //                               </td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   )}
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </ScrollArea>
// //       )}
// //     </div>
// //   );
// // }



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';

// interface ManageLabsAndTestsProps {
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

// export default function ManageLabsAndTests({ apiBaseUrl }: ManageLabsAndTestsProps) {
//   const [labs, setLabs] = useState<Lab[]>([]);

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
//     }
//   };

//   const handleUpdateTestPrice = async (labId: string, testId: string, newPrice: string) => {
//     try {
//       await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}/price`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ price: parseFloat(newPrice) }),
//       });
//       fetchLabs();
//     } catch (error) {
//       console.error('Error updating test price:', error);
//     }
//   };

//   const handleDeleteTest = async (labId: string, testId: string) => {
//     try {
//       const response = await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete test');
//       fetchLabs();
//     } catch (error) {
//       console.error('Error deleting test:', error);
//     }
//   };

//   const handleDeleteLab = async (labId: string) => {
//     try {
//       const response = await fetch(`${apiBaseUrl}/labs/${labId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete lab');
//       fetchLabs();
//     } catch (error) {
//       console.error('Error deleting lab:', error);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-700">Manage Labs & Tests</h2>

//       {labs.length === 0 ? (
//         <Card className="p-6 text-center text-gray-500">
//           <CardContent>No labs found. Add a new lab to get started.</CardContent>
//         </Card>
//       ) : (
//         <ScrollArea className="max-h-[600px]">
//           <div className="space-y-4">
//             {labs.map((lab) => (
//               <Card key={lab._id} className="shadow-lg">
//                 <CardHeader className="flex justify-between items-center">
//                   <CardTitle className="text-lg">{lab.name}</CardTitle>
//                   <Button
//                     variant="destructive"
//                     size="sm"
//                     onClick={() => handleDeleteLab(lab._id)}
//                   >
//                     Delete Lab
//                   </Button>
//                 </CardHeader>

//                 <CardContent>
//                   {lab.tests.length === 0 ? (
//                     <p className="text-gray-400 text-sm">No tests added for this lab yet.</p>
//                   ) : (
//                     <ScrollArea className="h-48">
//                       <table className="w-full table-auto border border-gray-200">
//                         <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
//                           <tr>
//                             <th className="px-4 py-2 text-left">Test Name</th>
//                             <th className="px-4 py-2 text-left">Price (₹)</th>
//                             <th className="px-4 py-2 text-left">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-200">
//                           {lab.tests.map((test) => (
//                             <tr key={test.testId}>
//                               <td className="px-4 py-2">{test.name}</td>
//                               <td className="px-4 py-2">
//                                 <Input
//                                   type="number"
//                                   value={test.price}
//                                   onChange={(e) =>
//                                     handleUpdateTestPrice(lab._id, test.testId, e.target.value)
//                                   }
//                                   step={0.01}
//                                   className="w-24"
//                                 />
//                               </td>
//                               <td className="px-4 py-2">
//                                 <Button
//                                   variant="destructive"
//                                   size="sm"
//                                   onClick={() => handleDeleteTest(lab._id, test.testId)}
//                                 >
//                                   Delete
//                                 </Button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </ScrollArea>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </ScrollArea>
//       )}
//     </div>
//   );
// }





'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, ChevronUp } from 'lucide-react'; // icon for expand/collapse

interface ManageLabsAndTestsProps {
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

export default function ManageLabsAndTests({ apiBaseUrl }: ManageLabsAndTestsProps) {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [expandedLabs, setExpandedLabs] = useState<{ [key: string]: boolean }>({}); // track open/close labs

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/labs`);
      if (!response.ok) throw new Error('Failed to fetch labs');
      const data: Lab[] = await response.json();
      setLabs(data);
      // initialize expanded state
      const initialState: { [key: string]: boolean } = {};
      data.forEach(lab => (initialState[lab._id] = false));
      setExpandedLabs(initialState);
    } catch (error) {
      console.error('Error fetching labs:', error);
    }
  };

  const toggleLab = (labId: string) => {
    setExpandedLabs(prev => ({ ...prev, [labId]: !prev[labId] }));
  };

  const handleUpdateTestPrice = async (labId: string, testId: string, newPrice: string) => {
    try {
      await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}/price`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: parseFloat(newPrice) }),
      });
      fetchLabs();
    } catch (error) {
      console.error('Error updating test price:', error);
    }
  };

  const handleDeleteTest = async (labId: string, testId: string) => {
    try {
      const response = await fetch(`${apiBaseUrl}/labs/${labId}/tests/${testId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete test');
      fetchLabs();
    } catch (error) {
      console.error('Error deleting test:', error);
    }
  };

  const handleDeleteLab = async (labId: string) => {
    try {
      const response = await fetch(`${apiBaseUrl}/labs/${labId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete lab');
      fetchLabs();
    } catch (error) {
      console.error('Error deleting lab:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-700">Manage Labs & Tests</h2>

      {labs.length === 0 ? (
        <Card className="p-6 text-center text-gray-500">
          <CardContent>No labs found. Add a new lab to get started.</CardContent>
        </Card>
      ) : (
        <ScrollArea className="max-h-[700px]">
          <div className="space-y-4">
            {labs.map((lab) => (
              <Card key={lab._id} className="shadow-lg">
                <CardHeader className="flex justify-between items-center cursor-pointer" onClick={() => toggleLab(lab._id)}>
                  <CardTitle className="text-lg">{lab.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e) => { e.stopPropagation(); handleDeleteLab(lab._id); }}
                    >
                      Delete Lab
                    </Button>
                    {expandedLabs[lab._id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </CardHeader>

                {expandedLabs[lab._id] && (
                  <CardContent>
                    {lab.tests.length === 0 ? (
                      <p className="text-gray-400 text-sm">No tests added for this lab yet.</p>
                    ) : (
                      <ScrollArea className="h-64">
                        <table className="w-full table-auto border border-gray-200">
                          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                            <tr>
                              <th className="px-4 py-2 text-left">Test Name</th>
                              <th className="px-4 py-2 text-left">Price (₹)</th>
                              <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {lab.tests.map((test) => (
                              <tr key={test.testId}>
                                <td className="px-4 py-2">{test.name}</td>
                                <td className="px-4 py-2">
                                  <Input
                                    type="number"
                                    value={test.price}
                                    onChange={(e) =>
                                      handleUpdateTestPrice(lab._id, test.testId, e.target.value)
                                    }
                                    step={0.01}
                                    className="w-24"
                                  />
                                </td>
                                <td className="px-4 py-2">
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDeleteTest(lab._id, test.testId)}
                                  >
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </ScrollArea>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
