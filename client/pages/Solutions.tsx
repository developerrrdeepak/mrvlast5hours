import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Satellite, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Satellite,
      title: "Remote Sensing MRV",
      description: "Satellite-powered monitoring for large-scale agroforestry projects",
      features: ["Multi-spectral imagery analysis", "Automated biomass estimation", "Change detection algorithms", "Real-time monitoring"],
      accuracy: "95%",
      cost: "Low",
      timeline: "Real-time",
      badge: "Most Popular"
    },
    {
      icon: Smartphone,
      title: "Mobile Data Collection",
      description: "Farmer-friendly mobile app for ground-level data collection",
      features: ["Offline data capture", "GPS integration", "Photo documentation", "Multi-language support"],
      accuracy: "92%",
      cost: "Very Low",
      timeline: "Weekly",
      badge: "Farmer Friendly"
    },
    {
      icon: BarChart3,
      title: "Hybrid MRV System",
      description: "Combined remote sensing and ground truth verification",
      features: ["Multi-source validation", "AI-powered analytics", "Automated reporting", "Registry integration"],
      accuracy: "98%",
      cost: "Medium",
      timeline: "Monthly",
      badge: "Highest Accuracy"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Standards",
      description: "Compliance with VCS, Gold Standard, and CDM protocols"
    },
    {
      icon: Zap,
      title: "Automated Processing",
      description: "AI-powered data analysis and carbon credit calculations"
    },
    {
      icon: Users,
      title: "Stakeholder Dashboard",
      description: "Real-time insights for farmers, investors, and verifiers"
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Cloud-based platform that grows with your project"
    }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            MRV <span className="text-emerald-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our suite of monitoring, reporting, and verification solutions designed 
            specifically for agroforestry and rice-based carbon projects in India.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {solution.badge && (
                <Badge className="absolute -top-2 left-4 bg-emerald-600 text-white">
                  {solution.badge}
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">{solution.accuracy}</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">{solution.cost}</div>
                      <div className="text-xs text-gray-500">Cost</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">{solution.timeline}</div>
                      <div className="text-xs text-gray-500">Updates</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 rounded-2xl">
          <div className="px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Platform <span className="text-emerald-600">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Implementation <span className="text-emerald-600">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Project Assessment", description: "Evaluate your project requirements and select optimal MRV approach" },
              { step: "2", title: "System Setup", description: "Deploy monitoring infrastructure and train local teams" },
              { step: "3", title: "Data Collection", description: "Begin automated monitoring and ground truth verification" },
              { step: "4", title: "Credit Generation", description: "Verify data and generate verified carbon credits" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform -translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <Card className="border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Implement Your MRV Solution?</h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Get started with a customized MRV system tailored to your project's specific needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
