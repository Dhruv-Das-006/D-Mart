'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/redux/hooks';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Image from 'next/image';

const HistoryPage = () => {
  const { isAuthenticated, isLoading } = useAppSelector(state => state.auth);
  const router = useRouter();
  const [history, setHistory] = useState<any[]>([]);
  const [isFetchingHistory, setIsFetchingHistory] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.error('Please login or signup to view history.', { id: 'auth-guard' });
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchHistory = async () => {
        try {
          const res = await fetch('/api/history');
          if (res.ok) {
            const data = await res.json();
            setHistory(data.history);
          }
        } catch (err) {
          toast.error('Failed to load history');
        } finally {
          setIsFetchingHistory(false);
        }
      };
      fetchHistory();
    }
  }, [isAuthenticated]);

  if (isLoading || !isAuthenticated || isFetchingHistory) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="flex flex-col space-y-4 max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 italic">
          Order <span className="text-blue-600">History.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Review your previous purchases.
        </p>
      </div>

      {history.length === 0 ? (
        <div className="py-20 text-center text-slate-500 text-lg italic">
          <p>No past orders found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {history.map((order) => (
            <div key={order.id} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
                <div>
                  <h3 className="text-slate-900 dark:text-slate-100 font-black">Order ID: {order.id}</h3>
                  <p className="text-sm text-slate-500">{new Date(order.date).toLocaleString()}</p>
                </div>
                <div className="text-xl font-black text-blue-600">
                  ${order.totalAmount.toFixed(2)}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {order.items?.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl">
                    <div className="relative w-16 h-16 shrink-0 bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden">
                      <Image 
                        src={item.image || '/assets/default.png'}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
