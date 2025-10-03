import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PrintableCard from "@/components/PrintableCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Heart, GraduationCap, Baby, CheckCircle } from "lucide-react";
import heroImage from "@/assets/school-signboard.jpg";
import daycareImage from "@/assets/daycare.jpg";
import classroomImage from "@/assets/classroom.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Our Lady of Assumption Murera School
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2 drop-shadow-md">
            Catholic Diocese of Meru
          </p>
          <p className="text-lg md:text-xl text-white/90 italic mb-8 drop-shadow-md">
            "That All People May Have Life To The Full."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enroll Your Child
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Our School
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A Catholic institution dedicated to nurturing young minds through quality education
                and Christian values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">CBC Primary Education</h3>
                    <p className="text-muted-foreground">
                      We offer comprehensive Competency-Based Curriculum (CBC) primary education
                      aligned with Kenya's current educational standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Christian Values</h3>
                    <p className="text-muted-foreground">
                      As part of the Catholic Diocese of Meru, we integrate strong moral and
                      spiritual formation with academic excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/30 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Community Focused</h3>
                    <p className="text-muted-foreground">
                      Located in Maua, we serve the local community with dedication and care,
                      fostering a supportive learning environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={classroomImage}
                  alt="Students learning in classroom"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                  <p className="text-3xl font-bold">CBC</p>
                  <p className="text-sm">Curriculum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our CBC Programs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive Competency-Based Curriculum aligned with Kenya's educational framework
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Lower Primary</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Foundation learning for Grade 1-3, focusing on literacy, numeracy, and core
                  competencies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Play-based learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Core competencies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Formative assessment
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Upper Primary</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Advanced learning for Grade 4-6, developing critical thinking and problem-solving
                  skills.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Subject specialization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    Project-based learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    STEM focus
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-accent/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Holistic Development</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Character building and life skills development integrated throughout all levels.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-foreground mr-2 flex-shrink-0" />
                    Spiritual formation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-foreground mr-2 flex-shrink-0" />
                    Arts & sports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent-foreground mr-2 flex-shrink-0" />
                    Community values
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Daycare Section */}
      <section id="daycare" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={daycareImage}
                  alt="Children in daycare"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Daycare Services
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Professional care for young children in a safe, nurturing, and stimulating
                    environment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <Baby className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Age-Appropriate Activities
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Engaging educational activities designed for early childhood development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary/10 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Caring Environment</h3>
                      <p className="text-sm text-muted-foreground">
                        Loving and attentive staff providing personalized care for each child.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-accent/30 p-2 rounded-lg mt-1">
                      <Users className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Social Skills</h3>
                      <p className="text-sm text-muted-foreground">
                        Building friendships and developing social competencies through play.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Inquire About Daycare
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Printable Card */}
      <PrintableCard />

      {/* Contact Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;
