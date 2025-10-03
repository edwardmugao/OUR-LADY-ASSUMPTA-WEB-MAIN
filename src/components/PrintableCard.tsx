import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, MapPin, Phone, Mail } from "lucide-react";

const PrintableCard = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              School Information Card
            </h2>
            <p className="text-muted-foreground">
              Print this card for easy reference to our school details
            </p>
          </div>

          <Card className="p-8 print:shadow-none" id="printable-card">
            <div className="space-y-6">
              <div className="text-center border-b border-border pb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Our Lady of Assumption Murera School
                </h1>
                <p className="text-muted-foreground mb-2">Catholic Diocese of Meru</p>
                <p className="text-foreground italic text-lg">
                  "That All People May Have Life To The Full."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          P.O. Box 547, 60600<br />
                          Maua, Kenya
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">0739834343</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Our Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• CBC Primary Education</li>
                    <li>• Daycare Services</li>
                    <li>• Quality Christian Education</li>
                    <li>• Competency-Based Curriculum</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-3">About Our School</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are a Catholic primary school under the Diocese of Meru, offering quality 
                  education through the Competency-Based Curriculum (CBC). We also provide 
                  professional daycare services for young children. Our mission is to nurture 
                  each child spiritually, academically, and socially.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground text-center">
                  For admissions and inquiries, please contact us using the information above.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-6 print:hidden">
            <Button onClick={handlePrint} size="lg" variant="secondary">
              <Printer className="mr-2 h-5 w-5" />
              Print Information Card
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintableCard;
