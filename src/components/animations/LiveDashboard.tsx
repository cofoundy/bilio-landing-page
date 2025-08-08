import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart3, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Bilio brand colors
const BILIO_COLORS = {
  yellow: '#FFC700',
  blue: '#002F6C', 
  green: '#0AAD6E',
  expense: '#EF4444',
  income: '#10B981',
} as const;

interface LiveDashboardProps {
  size?: 'small' | 'medium' | 'large';
  animateOnScroll?: boolean;
  updateInterval?: number;
  className?: string;
}

interface DashboardData {
  balance: number;
  monthlyExpenses: number;
  monthlyIncome: number;
  transactions: Array<{
    id: string;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    time: string;
  }>;
  categories: Array<{
    name: string;
    amount: number;
    percentage: number;
    color: string;
  }>;
}

const SAMPLE_DATA: DashboardData = {
  balance: 2847.50,
  monthlyExpenses: 1245.80,
  monthlyIncome: 3500.00,
  transactions: [
    { id: '1', type: 'expense', amount: 25.50, category: 'Food', time: '2 min ago' },
    { id: '2', type: 'income', amount: 1200.00, category: 'Salary', time: '1 hr ago' },
    { id: '3', type: 'expense', amount: 85.30, category: 'Transport', time: '3 hrs ago' },
    { id: '4', type: 'expense', amount: 15.75, category: 'Coffee', time: '5 hrs ago' },
  ],
  categories: [
    { name: 'Food', amount: 385.50, percentage: 35, color: BILIO_COLORS.yellow },
    { name: 'Transport', amount: 285.20, percentage: 25, color: BILIO_COLORS.blue },
    { name: 'Entertainment', amount: 165.80, percentage: 15, color: BILIO_COLORS.green },
    { name: 'Bills', amount: 275.30, percentage: 25, color: '#8B5CF6' },
  ],
};

const LiveDashboard: React.FC<LiveDashboardProps> = ({
  size = 'medium',
  animateOnScroll = true,
  updateInterval = 3000,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(!animateOnScroll);
  const [currentData, setCurrentData] = useState(SAMPLE_DATA);
  const [activeTransaction, setActiveTransaction] = useState(0);

  const sizeConfig = {
    small: { width: 280, height: 180, padding: 12, fontSize: 'text-xs' },
    medium: { width: 320, height: 200, padding: 16, fontSize: 'text-sm' },
    large: { width: 400, height: 250, padding: 20, fontSize: 'text-base' },
  };

  const config = sizeConfig[size];

  // Simulate real-time updates
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveTransaction((prev) => (prev + 1) % currentData.transactions.length);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isVisible, updateInterval, currentData.transactions.length]);

  // Handle scroll animation trigger
  useEffect(() => {
    if (!animateOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('live-dashboard');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [animateOnScroll]);

  return (
    <div
      id="live-dashboard"
      className={cn('relative', className)}
      style={{ width: config.width, height: config.height }}
    >
      <motion.div
        className="absolute inset-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
        animate={isVisible ? { 
          opacity: 1, 
          scale: 1, 
          rotateX: 0,
          boxShadow: [
            '0 10px 30px rgba(0,0,0,0.1)',
            '0 15px 40px rgba(0,0,0,0.15)',
            '0 10px 30px rgba(0,0,0,0.1)',
          ]
        } : {}}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          boxShadow: { duration: 2, repeat: Infinity }
        }}
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dashboard Header */}
        <div 
          className="bg-gradient-to-r from-Bilio-blue to-Bilio-green text-white flex items-center justify-between"
          style={{ padding: config.padding / 2 }}
        >
          <div className={cn('font-bold', config.fontSize)}>
            Bilio Dashboard
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <BarChart3 size={16} />
          </motion.div>
        </div>

        {/* Main Content */}
        <div style={{ padding: config.padding }} className="space-y-3">
          {/* Balance Card */}
          <motion.div
            className="bg-gradient-to-r from-Bilio-yellow/10 to-Bilio-yellow/20 rounded-lg p-3 border-l-4"
            style={{ borderColor: BILIO_COLORS.yellow }}
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className={cn('text-gray-600 mb-1', config.fontSize)}>
              Current Balance
            </div>
            <motion.div
              className="font-bold text-Bilio-blue text-lg flex items-center gap-2"
              initial={{ scale: 0.8 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              ${currentData.balance.toLocaleString()}
              <TrendingUp size={16} className="text-green-500" />
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              className="bg-red-50 rounded-lg p-2 border-l-2 border-red-400"
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className={cn('text-red-600 text-xs')}>Expenses</div>
              <div className="font-bold text-red-700">
                -${currentData.monthlyExpenses.toLocaleString()}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-green-50 rounded-lg p-2 border-l-2 border-green-400"
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className={cn('text-green-600 text-xs')}>Income</div>
              <div className="font-bold text-green-700">
                +${currentData.monthlyIncome.toLocaleString()}
              </div>
            </motion.div>
          </div>

          {/* Category Pie Chart */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ delay: 1.0, type: 'spring' }}
          >
            <div className="relative w-16 h-16">
              {/* Animated Pie Slices */}
              {currentData.categories.map((category, index) => {
                const prevPercentages = currentData.categories
                  .slice(0, index)
                  .reduce((sum, cat) => sum + cat.percentage, 0);
                
                const circumference = 2 * Math.PI * 20;
                const offset = circumference - (category.percentage / 100) * circumference;
                const rotation = (prevPercentages / 100) * 360 - 90;

                return (
                  <motion.circle
                    key={category.name}
                    cx="32"
                    cy="32"
                    r="20"
                    fill="none"
                    stroke={category.color}
                    strokeWidth="8"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={circumference}
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: '32px 32px',
                    }}
                    animate={isVisible ? {
                      strokeDashoffset: offset,
                    } : {}}
                    transition={{
                      delay: 1.2 + index * 0.2,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                  />
                );
              })}
              
              {/* SVG Container */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 64 64"
                style={{ transform: 'rotate(-90deg)' }}
              />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PieChart size={12} className="text-Bilio-blue" />
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-1">
              {currentData.categories.slice(0, 3).map((category, index) => (
                <motion.div
                  key={category.name}
                  className="flex items-center gap-1"
                  initial={{ x: 20, opacity: 0 }}
                  animate={isVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-xs text-gray-600">
                    {category.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Transaction */}
          <motion.div
            className="bg-gray-50 rounded-lg p-2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
          >
            <div className="text-xs text-gray-500 mb-1">Recent Activity</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTransaction}
                className="flex items-center justify-between"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="font-semibold text-xs">
                    {currentData.transactions[activeTransaction].category}
                  </div>
                  <div className="text-xs text-gray-500">
                    {currentData.transactions[activeTransaction].time}
                  </div>
                </div>
                <div
                  className={cn(
                    'font-bold text-sm',
                    currentData.transactions[activeTransaction].type === 'income'
                      ? 'text-green-600'
                      : 'text-red-600'
                  )}
                >
                  {currentData.transactions[activeTransaction].type === 'income' ? '+' : '-'}$
                  {currentData.transactions[activeTransaction].amount}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Loading indicator */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-Bilio-yellow to-Bilio-green"
          initial={{ width: '0%' }}
          animate={isVisible ? { width: '100%' } : {}}
          transition={{
            delay: 2,
            duration: updateInterval / 1000,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </div>
  );
};

export default LiveDashboard;