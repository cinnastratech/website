'use client';

import { motion } from 'framer-motion';
import { CreditCard, Landmark, QrCode, Globe, CalendarRange } from 'lucide-react';

const options = [
  { icon: Landmark, label: 'Bank Transfer (NEFT/RTGS)' },
  { icon: QrCode, label: 'UPI / QR Code' },
  { icon: CreditCard, label: 'Debit Card' },
  { icon: Globe, label: 'PayPal (International)' },
  { icon: CalendarRange, label: 'Installment plans available' },
];

export default function PaymentOptions() {
  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Flexible <span className="gradient-keyword">Payment Options</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We offer various secure methods to make your enrollment process smooth and hassle-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {options.map((opt, index) => (
            <motion.div
              key={opt.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col items-center text-center hover:border-[#06feb4]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <opt.icon className="w-6 h-6 text-[#06feb4]" />
              </div>
              <span className="text-sm font-semibold text-zinc-200">{opt.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
