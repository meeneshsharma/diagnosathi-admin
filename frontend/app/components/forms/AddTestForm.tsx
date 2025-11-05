// 'use client';

// import React, { useState, useEffect } from 'react';

// interface AddTestFormProps {
//     apiBaseUrl: string;
// }

// interface Lab {
//     _id: string;
//     name: string;
// }

// export default function AddTestForm({ apiBaseUrl }: AddTestFormProps) {
//     const [labs, setLabs] = useState<Lab[]>([]);
//     const [newTestLabId, setNewTestLabId] = useState<string>('');
//     const [newTestName, setNewTestName] = useState<string>('');
//     const [newTestPrice, setNewTestPrice] = useState<string>('');

//     useEffect(() => {
//         fetchLabs();
//     }, []);

//     const fetchLabs = async () => {
//         try {
//             const response = await fetch(`${apiBaseUrl}/labs`);
//             if (!response.ok) throw new Error('Failed to fetch labs');
//             const data: Lab[] = await response.json();
//             setLabs(data);
//             if (data.length > 0) {
//                 setNewTestLabId(data[0]._id);
//             }
//         } catch (error) {
//             console.error("Error fetching labs:", error);
//         }
//     };

//     const handleAddTest = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!newTestLabId || !newTestName || !newTestPrice) return;
//         try {
//             const response = await fetch(`${apiBaseUrl}/labs/${newTestLabId}/tests`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     testId: `test_${Date.now()}`,
//                     name: newTestName,
//                     price: parseFloat(newTestPrice),
//                 }),
//             });
//             if (!response.ok) throw new Error('Failed to add test');
//             setNewTestName('');
//             setNewTestPrice('');
//         } catch (error) {
//             console.error("Error adding test:", error);
//         }
//     };

//     return (
//         <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
//             <h2 className="text-xl font-bold text-green-700 mb-4">Add New Test</h2>
//             <form onSubmit={handleAddTest} className="space-y-4">
//                 <div>
//                     <label htmlFor="lab_select" className="block text-sm font-medium text-gray-700 mb-1">Select Lab</label>
//                     <select
//                         id="lab_select"
//                         value={newTestLabId}
//                         onChange={(e) => setNewTestLabId(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
//                     >
//                         {labs.map(lab => (
//                             <option key={lab._id} value={lab._id}>{lab.name}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="test_name" className="block text-sm font-medium text-gray-700 mb-1">Test Name</label>
//                     <input
//                         type="text"
//                         id="test_name"
//                         value={newTestName}
//                         onChange={(e) => setNewTestName(e.target.value)}
//                         placeholder="e.g., CBC"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
//                     <input
//                         type="number"
//                         id="price"
//                         value={newTestPrice}
//                         onChange={(e) => setNewTestPrice(e.target.value)}
//                         step="0.01"
//                         placeholder="e.g., 500"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 transform active:scale-95"
//                 >
//                     Add Test
//                 </button>
//             </form>
//         </div>
//     );
// }



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// interface AddTestFormProps {
//   apiBaseUrl: string;
// }

// interface Lab {
//   _id: string;
//   name: string;
// }

// export default function AddTestForm({ apiBaseUrl }: AddTestFormProps) {
//   const [labs, setLabs] = useState<Lab[]>([]);
//   const [newTestLabId, setNewTestLabId] = useState<string>('');
//   const [newTestName, setNewTestName] = useState<string>('');
//   const [newTestPrice, setNewTestPrice] = useState<string>('');

//   useEffect(() => {
//     fetchLabs();
//   }, []);

//   const fetchLabs = async () => {
//     try {
//       const response = await fetch(`${apiBaseUrl}/labs`);
//       if (!response.ok) throw new Error('Failed to fetch labs');
//       const data: Lab[] = await response.json();
//       setLabs(data);
//       if (data.length > 0) {
//         setNewTestLabId(data[0]._id);
//       }
//     } catch (error) {
//       console.error('Error fetching labs:', error);
//     }
//   };

//   const handleAddTest = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!newTestLabId || !newTestName || !newTestPrice) return;
//     try {
//       const response = await fetch(`${apiBaseUrl}/labs/${newTestLabId}/tests`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           testId: `test_${Date.now()}`,
//           name: newTestName,
//           price: parseFloat(newTestPrice),
//         }),
//       });
//       if (!response.ok) throw new Error('Failed to add test');
//       setNewTestName('');
//       setNewTestPrice('');
//       // Optional: show success toast
//     } catch (error) {
//       console.error('Error adding test:', error);
//     }
//   };

//   return (
//     <Card className="max-w-md mx-auto shadow-lg">
//       <CardHeader>
//         <CardTitle>Add New Test</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleAddTest} className="space-y-4">
//           <div>
//             <label htmlFor="lab_select" className="block text-sm font-medium text-gray-700 mb-1">
//               Select Lab
//             </label>
//             <Select value={newTestLabId} onValueChange={(value) => setNewTestLabId(value)}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select a lab" />
//               </SelectTrigger>
//               <SelectContent>
//                 {labs.map((lab) => (
//                   <SelectItem key={lab._id} value={lab._id}>
//                     {lab.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <label htmlFor="test_name" className="block text-sm font-medium text-gray-700 mb-1">
//               Test Name
//             </label>
//             <Input
//               id="test_name"
//               placeholder="e.g., CBC"
//               value={newTestName}
//               onChange={(e) => setNewTestName(e.target.value)}
//               className="w-full"
//             />
//           </div>

//           <div>
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
//               Price (₹)
//             </label>
//             <Input
//               id="price"
//               type="number"
//               placeholder="e.g., 500"
//               value={newTestPrice}
//               onChange={(e) => setNewTestPrice(e.target.value)}
//               step={0.01}
//               className="w-full"
//             />
//           </div>

//           <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
//             Add Test
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }




'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Papa from 'papaparse';

interface AddTestFormProps {
  apiBaseUrl: string;
}

interface Lab {
  _id: string;
  name: string;
}

export default function AddTestForm({ apiBaseUrl }: AddTestFormProps) {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [selectedLabId, setSelectedLabId] = useState<string>('');

  const [newTestName, setNewTestName] = useState<string>('');
  const [newTestPrice, setNewTestPrice] = useState<string>('');

  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isBulk, setIsBulk] = useState<boolean>(false);
  const [loadingSingle, setLoadingSingle] = useState<boolean>(false);
  const [loadingBulk, setLoadingBulk] = useState<boolean>(false);

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/labs`);
      if (!response.ok) throw new Error('Failed to fetch labs');
      const data: Lab[] = await response.json();
      setLabs(data);
      if (data.length > 0) setSelectedLabId(data[0]._id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddSingleTest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLabId || !newTestName || !newTestPrice) return;

    setLoadingSingle(true);
    try {
      const response = await fetch(`${apiBaseUrl}/labs/${selectedLabId}/tests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testId: `test_${Date.now()}`,
          name: newTestName,
          price: parseFloat(newTestPrice),
        }),
      });
      if (!response.ok) throw new Error('Failed to add test');
      setNewTestName('');
      setNewTestPrice('');
      alert('Test added successfully');
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSingle(false);
    }
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCsvFile(file);
  };

  const handleAddBulkTests = () => {
    if (!csvFile || !selectedLabId) return;

    setLoadingBulk(true);
    Papa.parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      complete: async (results: any) => {
        // normalize headers (trim and ignore case)
        const normalizedData = results.data.map((row: any) => {
          const keys = Object.keys(row);
          const newRow: any = {};
          keys.forEach(k => {
            const key = k.trim().toLowerCase();
            newRow[key] = row[k];
          });
          return newRow;
        });

        const tests = normalizedData
          .map((row: any, index: number) => ({
            testId: `test_${Date.now()}_${index}`,
            name: row['test name']?.trim() || row['testname']?.trim(),
            price: parseFloat(row['price']),
          }))
          .filter((test: { name: any; price: number; }) => test.name && !isNaN(test.price));

        if (tests.length === 0) {
          alert('No valid tests found in CSV');
          setLoadingBulk(false);
          return;
        }

        try {
          const response = await fetch(`${apiBaseUrl}/labs/${selectedLabId}/bulk-tests`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tests }),
          });
          if (!response.ok) throw new Error('Failed to add tests');
          alert('Bulk tests added successfully!');
          setCsvFile(null);
        } catch (error) {
          console.error(error);
        } finally {
          setLoadingBulk(false);
        }
      },
    });
  };

  return (
    <Card className="max-w-lg mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Add Tests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Mode:</span>
          <Button variant={isBulk ? 'outline' : 'default'} onClick={() => setIsBulk(false)}>Manual</Button>
          <Button variant={isBulk ? 'default' : 'outline'} onClick={() => setIsBulk(true)}>Bulk CSV</Button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Lab</label>
          <Select value={selectedLabId} onValueChange={setSelectedLabId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a lab" />
            </SelectTrigger>
            <SelectContent>
              {labs.map((lab) => (
                <SelectItem key={lab._id} value={lab._id}>{lab.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!isBulk ? (
          <form onSubmit={handleAddSingleTest} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Test Name</label>
              <Input placeholder="e.g., CBC" value={newTestName} onChange={e => setNewTestName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
              <Input type="number" step={0.01} placeholder="e.g., 500" value={newTestPrice} onChange={e => setNewTestPrice(e.target.value)} />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={loadingSingle}>
              {loadingSingle ? 'Adding...' : 'Add Test'}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload CSV</label>
              <Input type="file" accept=".csv" onChange={handleCSVUpload} key={csvFile ? csvFile.name : ''} />
              <p className="text-xs text-gray-500 mt-1">CSV format: Test Name, Price</p>
            </div>
            <Button onClick={handleAddBulkTests} className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={loadingBulk}>
              {loadingBulk ? 'Adding...' : 'Add All Tests'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
