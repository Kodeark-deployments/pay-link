import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Payment {
  id: number;
  title: string;
  amount: string;
  status: string;
}

interface PaymentsTableProps {
  payments: Payment[];
}

const PaymentsTable = ({ payments }: PaymentsTableProps) => {
  return (
    <Card className="border-[#22262F] bg-background/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl text-primary-foreground">
          Recent Payments
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs sm:text-sm">Title</TableHead>
              <TableHead className="text-xs sm:text-sm">Amount</TableHead>
              <TableHead className="text-xs sm:text-sm">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="text-xs sm:text-sm max-w-37.5 sm:max-w-none truncate">{payment.title}</TableCell>
                <TableCell className="font-semibold text-xs sm:text-sm whitespace-nowrap">{payment.amount}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                      payment.status === "Completed"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {payment.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PaymentsTable;
