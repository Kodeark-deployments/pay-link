"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import PaymentsTable from "@/components/dashboard/PaymentsTable";

const Dashboard = () => {
  // Mock data for stats cards
  const stats = [
    {
      title: "Total Earnings",
      value: "$12,450.00",
      description: "+20.1% from last month",
    },
    {
      title: "Total Payments",
      value: "342",
      description: "+15.3% from last month",
    },
    {
      title: "Pending",
      value: "23",
      description: "Awaiting confirmation",
    },
  ];

  // Mock data for payments table
  const payments = [
    {
      id: 1,
      title: "Website Redesign Project",
      amount: "$2,500.00",
      status: "Completed",
    },
    {
      id: 2,
      title: "Mobile App Development",
      amount: "$5,000.00",
      status: "Completed",
    },
    {
      id: 3,
      title: "Logo Design",
      amount: "$450.00",
      status: "Pending",
    },
    {
      id: 4,
      title: "SEO Optimization",
      amount: "$1,200.00",
      status: "Completed",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      amount: "$850.00",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <DashboardHeader />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>

        {/* Payments Table */}
        <PaymentsTable payments={payments} />
      </div>
    </div>
  );
};

export default Dashboard;
