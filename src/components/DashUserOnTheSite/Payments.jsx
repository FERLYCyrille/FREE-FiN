// src/dashboard/sections/Payments.js

import React from "react";

const Payments = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Payments</h1>

            <table className="w-full border rounded shadow text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Service</th>
                        <th className="px-4 py-2">Amount</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">2025-08-01</td>
                        <td className="px-4 py-2">Logo Design</td>
                        <td className="px-4 py-2">$250</td>
                        <td className="px-4 py-2 text-green-600 font-semibold">Paid</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">2025-07-28</td>
                        <td className="px-4 py-2">Web Development</td>
                        <td className="px-4 py-2">$1,200</td>
                        <td className="px-4 py-2 text-yellow-500 font-semibold">Pending</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">2025-07-20</td>
                        <td className="px-4 py-2">SEO Optimization</td>
                        <td className="px-4 py-2">$600</td>
                        <td className="px-4 py-2 text-red-500 font-semibold">Failed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Payments;
