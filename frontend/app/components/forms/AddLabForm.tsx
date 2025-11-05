// 'use client';

// import React, { useState } from 'react';

// interface AddLabFormProps {
//     apiBaseUrl: string;
// }

// export default function AddLabForm({ apiBaseUrl }: AddLabFormProps) {
//     const [newLabName, setNewLabName] = useState<string>('');

//     const handleAddLab = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!newLabName) return;
//         try {
//             const response = await fetch(`${apiBaseUrl}/labs`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name: newLabName }),
//             });
//             if (!response.ok) throw new Error('Failed to add lab');
//             setNewLabName('');
//             // Optional: You could add a success message here
//         } catch (error) {
//             console.error("Error adding lab:", error);
//         }
//     };

//     return (
//         <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
//             <h2 className="text-xl font-bold text-blue-700 mb-4">Add New Lab</h2>
//             <form onSubmit={handleAddLab} className="space-y-4">
//                 <div>
//                     <label htmlFor="lab_name" className="block text-sm font-medium text-gray-700 mb-1">Lab Name</label>
//                     <input
//                         type="text"
//                         id="lab_name"
//                         value={newLabName}
//                         onChange={(e) => setNewLabName(e.target.value)}
//                         placeholder="e.g., MediCare Lab"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform active:scale-95"
//                 >
//                     Add Lab
//                 </button>
//             </form>
//         </div>
//     );
// }






'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AddLabFormProps {
  apiBaseUrl: string;
}

export default function AddLabForm({ apiBaseUrl }: AddLabFormProps) {
  const [newLabName, setNewLabName] = useState<string>('');

  const handleAddLab = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabName) return;
    try {
      const response = await fetch(`${apiBaseUrl}/labs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newLabName }),
      });
      if (!response.ok) throw new Error('Failed to add lab');
      setNewLabName('');
      // Optional: success notification can be added here
    } catch (error) {
      console.error('Error adding lab:', error);
    }
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Add New Lab</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddLab} className="space-y-4">
          <div>
            <label htmlFor="lab_name" className="block text-sm font-medium text-gray-700 mb-1">
              Lab Name
            </label>
            <Input
              id="lab_name"
              placeholder="e.g., MediCare Lab"
              value={newLabName}
              onChange={(e) => setNewLabName(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Add Lab
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

