import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const EventEmitter = {
  events: {},
  dispatch(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  },
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  unsubscribe(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }
};

export const showToast = (message, type = 'success') => {
  EventEmitter.dispatch('toast', { id: Date.now(), message, type });
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (toast) => {
      setToasts(prev => [...prev, toast]);
      
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, 4500);
    };

    EventEmitter.subscribe('toast', handleToast);
    return () => EventEmitter.unsubscribe('toast', handleToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-3 w-full max-w-md px-4 pointer-events-none">
      {toasts.map(toast => (
        <div 
          key={toast.id} 
          className="toast-enter glass-panel px-6 py-4 rounded-[var(--button-radius)] shadow-2xl flex items-center gap-4 pointer-events-auto min-w-[320px] border-l-4 border-l-[var(--color-accent)] fade-in"
          style={{ borderLeftColor: toast.type === 'success' ? 'var(--color-accent)' : '#ef4444' }}
        >
          <div className={`p-2 rounded-lg ${toast.type === 'success' ? 'bg-[var(--color-accent-muted)] text-[var(--color-accent)]' : 'bg-red-500/10 text-red-500'}`}>
            {toast.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          </div>
          <span className="text-[var(--text-main)] font-bold text-sm">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
