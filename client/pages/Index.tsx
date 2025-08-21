import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Satellite, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Leaf,
  Target,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: Satellite,
      title: "Remote Sensing Integration",
      description: "Leverage satellite imagery and IoT sensors for automated data collection across fragmented landscapes."
    },
    {
      icon: BarChart3,
      title: "Automated Calculations",
      description: "AI-powered carbon credit calculations with real-time verification and reporting capabilities."
    },
    {
      icon: Users,
      title: "Farmer-Friendly Protocols",
      description: "Simplified data collection tools designed for India's smallholder farming communities."
    },
    {
      icon: Shield,
      title: "Verified Standards",
      description: "Compliance with national and global carbon registries ensuring credible verification."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Cost-effective MRV systems that grow with your carbon project needs."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous tracking of carbon sequestration with automated alerts and insights."
    }
  ];

  const challenges = [
    "Prohibitively expensive MRV systems",
    "Overly complex verification processes", 
    "Poor adaptation to smallholder landscapes",
    "High transaction costs",
    "Inconsistent ground-level data collection",
    "Fragmented remote sensing platforms",
    "Lack of standardized integration protocols"
  ];

  const outcomes = [
    "Scalable and affordable MRV prototypes with high accuracy",
    "Automated carbon credit calculation and verification",
    "Farmer-friendly data collection protocols",
    "Integration with national and global carbon registries",
    "Consistent, reliable, and interoperable field data",
    "Assessment of scalability barriers in rural India",
    "Curated partnerships for pilot collaborations"
  ];

  const stats = [
    { label: "Smallholder Farms", value: "86%", description: "of India's agricultural land" },
    { label: "Carbon Potential", value: "39Mt", description: "CO2 sequestration annually" },
    { label: "Cost Reduction", value: "70%", description: "in MRV implementation" },
    { label: "Accuracy Rate", value: "95%", description: "in carbon measurements" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                Climate-Smart Agriculture
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Scalable <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">MRV Solutions</span> for Carbon Projects
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Transforming agroforestry and rice-based carbon projects with affordable, 
                accurate monitoring, reporting, and verification systems designed for India's 
                smallholder farming communities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <Card className="border-0 bg-white/90 backdrop-blur">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <Satellite className="h-8 w-8 text-emerald-600 mb-2" />
                      <p className="text-sm font-medium">Remote Sensing</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-white/90 backdrop-blur">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <Database className="h-8 w-8 text-teal-600 mb-2" />
                      <p className="text-sm font-medium">Data Integration</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-white/90 backdrop-blur">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <Target className="h-8 w-8 text-emerald-600 mb-2" />
                      <p className="text-sm font-medium">Verification</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-white/90 backdrop-blur">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <BarChart3 className="h-8 w-8 text-teal-600 mb-2" />
                      <p className="text-sm font-medium">Reporting</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Addressing Critical <span className="text-emerald-600">MRV Limitations</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Current MRV systems for agroforestry and rice carbon projects face significant barriers 
                that prevent widespread adoption and effective carbon credit monetization.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    Current Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">High Costs</h4>
                      <p className="text-red-700 text-sm">Traditional MRV systems cost 10-15% of project value</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Complexity</h4>
                      <p className="text-orange-700 text-sm">Overly technical systems exclude smallholder farmers</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Fragmentation</h4>
                      <p className="text-yellow-700 text-sm">Lack of integration between data sources and registries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Innovative <span className="text-emerald-600">MRV Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology platform addresses key challenges with scalable, affordable, and farmer-friendly solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <Target className="h-6 w-6 mr-2" />
                    Expected Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transforming Carbon Markets for <span className="text-emerald-600">Smallholder Farmers</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach delivers measurable results that unlock climate finance 
                and drive sustainable transformation in India's agriculture sector.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable Prototypes</h3>
                  <p className="text-gray-600">High-accuracy MRV solutions that adapt to diverse farming contexts</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Automated Systems</h3>
                  <p className="text-gray-600">Streamlined carbon credit calculation, verification, and reporting</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Farmer Integration</h3>
                  <p className="text-gray-600">User-friendly protocols that connect local data to global registries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Carbon Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join the revolution in climate-smart agriculture with our proven MRV solutions. 
            Unlock climate finance and drive sustainable transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
