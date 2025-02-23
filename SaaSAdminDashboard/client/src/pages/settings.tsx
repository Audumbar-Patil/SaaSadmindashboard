import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    features: ["Basic Analytics", "5 Team Members", "1GB Storage"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["Advanced Analytics", "Unlimited Team Members", "10GB Storage", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: [
      "Custom Analytics",
      "Unlimited Everything",
      "100GB Storage",
      "24/7 Support",
      "Custom Integrations",
    ],
  },
];

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <Link href="/">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Settings</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={plan.name === user?.plan ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.name === user?.plan ? "outline" : "default"}>
                    {plan.name === user?.plan ? "Current Plan" : "Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
