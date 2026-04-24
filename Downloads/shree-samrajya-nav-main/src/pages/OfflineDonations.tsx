import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Building2 } from "lucide-react";

const OfflineDonations = () => {
  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Offline Donations (Bank / Cheque)
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Supporting Healthcare Through Secure Offline Contributions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-3 text-muted-foreground mb-4 -mt-4">
              <p className="text-lg leading-relaxed text-justify">
                Supporting the Shree Samrajya Lakshmi Multi–Super Specialty Hospital through offline donations is simple and secure. Your contribution directly strengthens our mission to provide world-class, free medical care to thousands of families in and around Madhugiri. Every donation—small or large—brings us one step closer to building this life-changing healthcare institution.
              </p>
            </div>

            {/* Bank Transfer Section */}
            <Card className="mb-4 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Building2 className="h-6 w-6 text-primary" />
                  Bank Transfer (NEFT / RTGS / IMPS)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-justify">
                  You can make a direct contribution to the Foundation's official bank account:
                </p>
                <div className="bg-secondary rounded-lg p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-foreground">Account Name:</span>
                    <span className="text-muted-foreground text-right">Shree Samrajyalakshmi Foundation</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-foreground">Account Number:</span>
                    <span className="text-muted-foreground text-right">50200104565790</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-foreground">Bank Name:</span>
                    <span className="text-muted-foreground text-right">HDFC BANK</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-foreground">Branch:</span>
                    <span className="text-muted-foreground text-right">Bangalore - Ulsoor</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-foreground">IFSC Code:</span>
                    <span className="text-muted-foreground text-right">HDFC0000286</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-foreground">Account Type:</span>
                    <span className="text-muted-foreground text-right">Current</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  After completing your transfer, kindly share your payment details and full contact information with us at{" "}
                  <a href="mailto:info@shreesamrajyalakshmifoundation.org" className="text-primary hover:underline">
                    info@shreesamrajyalakshmifoundation.org
                  </a>{" "}
                  to receive your official donation receipt and 80G certificate.
                </p>
              </CardContent>
            </Card>

            {/* Cheque / DD Section */}
            <Card className="mb-4 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Cheque / Demand Draft Donation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-justify">
                  You may also support the project by sending a cheque or DD payable to:
                </p>
                <div className="bg-secondary rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-3">"Shree Samrajyalakshmi Foundation"</p>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-semibold text-foreground">Postal Address:</p>
                    <p>Shree Samrajya Lakshmi Foundation</p>
                    <p>No 276, Narasimha Dhama, 2nd Stage, Medahalli, Virgonagar,</p>
                    <p>Bangalore, Bangalore North, Karnataka, India, 560049</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-justify">
                  Once we receive your cheque, our team will acknowledge the donation and issue the receipt to your registered post or email or WhatsApp number.
                </p>
              </CardContent>
            </Card>

            {/* Receipt & Tax Exemption */}
            <Card className="mb-4 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Receipt & Tax Exemption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-justify">
                  All offline donations are eligible for 80G tax exemption as per Income Tax Act guidelines. Receipts are issued within 48–72 hours after payment confirmation.
                </p>
              </CardContent>
            </Card>

            {/* Need Assistance */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Need Assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-justify">
                  If you need help with the offline donation process, feel free to contact our donor support team:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+91 781 302 1766" className="text-foreground hover:text-primary transition-colors">
                      +91 781 302 1766
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@shreesamrajyalakshmifoundation.org" className="text-foreground hover:text-primary transition-colors">
                      info@shreesamrajyalakshmifoundation.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfflineDonations;

