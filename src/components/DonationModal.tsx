import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal = ({ open, onOpenChange }: DonationModalProps) => {
  const [selectedDonationOption, setSelectedDonationOption] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [customDonationType, setCustomDonationType] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedDonationOption(value);
    if (value === "building") {
      setCustomAmount("5000");
      setCustomDonationType("Building Materials");
    } else if (value === "icu") {
      setCustomAmount("25000");
      setCustomDonationType("ICU Bed Installation");
    } else if (value === "patient") {
      setCustomAmount("100000");
      setCustomDonationType("Patient Room Sponsor");
    } else if (value === "custom") {
      setCustomAmount("");
      setCustomDonationType("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Donation Impact Tiles</DialogTitle>
          <DialogDescription className="text-center text-base">
            Every contribution matters and makes a real difference
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Donation Options with Radio Buttons */}
          <RadioGroup value={selectedDonationOption} onValueChange={handleOptionChange}>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent cursor-pointer flex-1 min-w-[200px]">
                <RadioGroupItem value="building" id="building" />
                <Label htmlFor="building" className="cursor-pointer">
                  <CardTitle className="text-xl">Building Materials</CardTitle>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent cursor-pointer flex-1 min-w-[200px]">
                <RadioGroupItem value="icu" id="icu" />
                <Label htmlFor="icu" className="cursor-pointer">
                  <CardTitle className="text-xl">ICU Bed Installation</CardTitle>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent cursor-pointer flex-1 min-w-[200px]">
                <RadioGroupItem value="patient" id="patient" />
                <Label htmlFor="patient" className="cursor-pointer">
                  <CardTitle className="text-xl">Patient Room Sponsor</CardTitle>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent cursor-pointer flex-1 min-w-[200px]">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="cursor-pointer">
                  <CardTitle className="text-xl">Custom Donation</CardTitle>
                </Label>
              </div>
            </div>
          </RadioGroup>

          {/* Donation Form - Always visible for amount and name, custom fields only for custom option */}
          <Card className="border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="text-center">Donation Details</CardTitle>
              <CardDescription className="text-center">Enter your donation details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="donor-name">Your Name</Label>
                <Input
                  id="donor-name"
                  type="text"
                  placeholder="Enter your name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="custom-amount">Donation Amount (₹)</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="mt-1"
                />
              </div>
              {selectedDonationOption === "custom" && (
                <div>
                  <Label htmlFor="donation-type">Type of Donation</Label>
                  <Input
                    id="donation-type"
                    type="text"
                    placeholder="e.g., Medical Equipment, Infrastructure, etc."
                    value={customDonationType}
                    onChange={(e) => setCustomDonationType(e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}
              {selectedDonationOption && (
                <div className="p-4 border-2 border-primary/20 bg-primary/5 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Selected Donation Type</p>
                    <p className="text-lg font-semibold text-primary">
                      {selectedDonationOption === "building" && "Building Materials"}
                      {selectedDonationOption === "icu" && "ICU Bed Installation"}
                      {selectedDonationOption === "patient" && "Patient Room Sponsor"}
                      {selectedDonationOption === "custom" && "Custom Donation"}
                    </p>
                  </div>
                </div>
              )}
              <Button className="w-full hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Heart className="mr-2 h-4 w-4" />
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;

