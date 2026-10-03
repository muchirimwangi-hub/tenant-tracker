import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, Home, DollarSign, FileText } from 'lucide-react';
import './index.css';

const mockFinancials = [
  { name: 'Jan', income: 120000, expenses: 30000, loan: 40000 },
  { name: 'Feb', income: 125000, expenses: 32000, loan: 40000 },
  { name: 'Mar', income: 140000, expenses: 28000, loan: 40000 },
  { name: 'Apr', income: 140000, expenses: 35000, loan: 40000 },
  { name: 'May', income: 155000, expenses: 30000, loan: 40000 },
  { name: 'Jun', income: 160000, expenses: 31000, loan: 40000 },
];

const mockTenants = [
  { id: 1, name: "Client Zero", unit: "Block 6/820 (Ground)", leaseStart: "2026-08-01", leaseEnd: "2031-08-31", deposit: 50000, monthly: 25000, status: "Paid" },
  { id: 2, name: "Shop 2 Tenant", unit: "Container 1A", leaseStart: "2026-10-01", leaseEnd: "2027-09-30", deposit: 30000, monthly: 15000, status: "Pending" },
  { id: 3, name: "Shop 3 Tenant", unit: "Container 1B", leaseStart: "2026-10-15", leaseEnd: "2027-10-14", deposit: 30000, monthly: 15000, status: "Paid" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Container Hub Tracker</h1>
            <p className="text-gray-500">Nyahururu Property Management</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>Overview</button>
            <button onClick={() => setActiveTab('tenants')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'tenants' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>Tenants & Leases</button>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Monthly Income</p>
                    <h3 className="text-2xl font-bold text-gray-900">KES 160,000</h3>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg"><DollarSign className="text-blue-600 w-6 h-6" /></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Active Leases</p>
                    <h3 className="text-2xl font-bold text-gray-900">3</h3>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg"><FileText className="text-green-600 w-6 h-6" /></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Deposits Held</p>
                    <h3 className="text-2xl font-bold text-gray-900">KES 110,000</h3>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg"><Home className="text-purple-600 w-6 h-6" /></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Units</p>
                    <h3 className="text-2xl font-bold text-gray-900">8</h3>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg"><Users className="text-orange-600 w-6 h-6" /></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Financial Overview: Income vs Expenses vs Loan</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockFinancials}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Legend />
                  <Bar dataKey="income" name="Income" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="loan" name="Loan Payment" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'tenants' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Active Tenants & Contracts</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-sm">
                  <tr>
                    <th className="p-4 font-medium">Tenant Name</th>
                    <th className="p-4 font-medium">Unit</th>
                    <th className="p-4 font-medium">Lease Period</th>
                    <th className="p-4 font-medium">Monthly Rent</th>
                    <th className="p-4 font-medium">Deposit Held</th>
                    <th className="p-4 font-medium">Current Month Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {mockTenants.map((tenant) => (
                    <tr key={tenant.id} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">{tenant.name}</td>
                      <td className="p-4 text-gray-600">{tenant.unit}</td>
                      <td className="p-4 text-gray-600">{tenant.leaseStart} to {tenant.leaseEnd}</td>
                      <td className="p-4 font-medium text-gray-900">KES {tenant.monthly.toLocaleString()}</td>
                      <td className="p-4 text-gray-600">KES {tenant.deposit.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${tenant.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {tenant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}