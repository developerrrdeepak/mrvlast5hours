import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Brain, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Leaf,
  Target,
  Database,
  Cpu,
  Activity,
  Smartphone,
  Satellite,
  GitBranch,
  Network,
  Eye,
  AlertTriangle,
  IndianRupee,
  Sprout,
  TreePine,
  Wheat
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const farmerChallenges = [
    {
      icon: IndianRupee,
      title: "Paisa Nahi Milta Time Pe",
      description: "Carbon credit payments delayed for 2-3 years due to complex verification",
      impact: "Critical",
      affected: "78% farmers"
    },
    {
      icon: AlertTriangle,
      title: "Data Collection Confusing",
      description: "Complex forms and GPS tracking difficult for rural farmers",
      impact: "High", 
      affected: "65% farmers"
    },
    {
      icon: Eye,
      title: "Kya Ho Raha Hai Pata Nahi",
      description: "No real-time visibility into carbon sequestration progress",
      impact: "Medium",
      affected: "89% farmers"
    }
  ];

  const algorithmicSolutions = [
    {
      icon: Brain,
      title: "Deep Learning Biomass Estimation",
      algorithm: "3D CNN + Transformer Architecture", 
      description: "Multi-spectral satellite imagery processed through ResNet-50 backbone with attention mechanisms for precise biomass calculation",
      accuracy: "97.3%",
      processing: "Real-time",
      tech: ["Computer Vision", "Satellite Imagery", "Neural Networks"]
    },
    {
      icon: Network,
      title: "Blockchain Carbon Registry",
      algorithm: "Proof-of-Carbon + Smart Contracts",
      description: "Immutable carbon credit tracking using Hyperledger with automated verification triggers and instant payment settlements",
      accuracy: "99.9%", 
      processing: "Instant",
      tech: ["Blockchain", "Smart Contracts", "Distributed Ledger"]
    },
    {
      icon: GitBranch,
      title: "Federated Learning MRV",
      algorithm: "Edge Computing + ML Pipeline",
      description: "Farmer's mobile devices contribute to global ML model while keeping sensitive data local using differential privacy",
      accuracy: "95.8%",
      processing: "Continuous",
      tech: ["Federated Learning", "Edge AI", "Privacy-Preserving ML"]
    }
  ];

  const farmerJourney = [
    {
      phase: "Onboarding",
      time: "Day 1",
      farmer_action: "Kisan app download karta hai",
      tech_behind: "Face recognition + Aadhaar verification API",
      pain_point: "Language barrier, tech literacy",
      our_solution: "Voice-guided setup in local language"
    },
    {
      phase: "Data Collection", 
      time: "Weekly",
      farmer_action: "Photo leke GPS mark karta hai",
      tech_behind: "Computer vision validates image quality + GPS accuracy",
      pain_point: "Inconsistent data, manual errors",
      our_solution: "AI-guided photo capture with real-time feedback"
    },
    {
      phase: "Verification",
      time: "Monthly", 
      farmer_action: "Wait for verification process",
      tech_behind: "Satellite data cross-validation + ML algorithms",
      pain_point: "Long waiting periods, no transparency",
      our_solution: "Real-time verification with progress tracking"
    },
    {
      phase: "Payment",
      time: "Quarterly",
      farmer_action: "Receives carbon credit payment",
      tech_behind: "Blockchain smart contracts + UPI integration", 
      pain_point: "Delayed payments, complex banking",
      our_solution: "Instant payment upon verification completion"
    }
  ];

  const advancedMetrics = [
    { 
      label: "ML Model Accuracy", 
      value: 97.3, 
      change: "+2.1%",
      detail: "Biomass estimation using Transformer-CNN hybrid"
    },
    { 
      label: "Verification Speed", 
      value: 89.2, 
      change: "+45%",
      detail: "Automated satellite-ground truth matching"
    },
    { 
      label: "Farmer Adoption", 
      value: 78.6, 
      change: "+23%", 
      detail: "Active users in rural Karnataka pilot"
    },
    { 
      label: "Payment Accuracy", 
      value: 99.8, 
      change: "+0.2%",
      detail: "Blockchain-verified transaction success rate"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Farmer Focused */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-500/10 to-teal-600/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200 text-base px-5 py-2 font-bold tracking-wide shadow-sm">
                🌾 Kisan-First Technology
              </Badge>
              <h1 className="text-hero font-display font-black text-gray-900 leading-none mb-6">
                <span className="text-green-600">Kisano</span> ka Paisa,{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  AI</span> ka Power
              </h1>
              <p className="text-subtitle text-gray-700 font-medium mb-8">
                Advanced machine learning algorithms jo samjhte hain Indian farmers ki problems.
                <span className="font-bold text-emerald-600"> Real-time carbon credit calculation, instant payments, </span>
                aur transparent verification - sab kuch farmer ke perspective se designed.
              </p>
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-feature font-semibold">99.8% accurate payments through blockchain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-feature font-semibold">Real-time tracking with satellite + AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-feature font-semibold">Local language support + voice guidance</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 font-bold tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                  Kisan App Download करें
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 font-semibold tracking-wide hover:shadow-lg transition-all duration-200">
                  Live Demo देखें
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Advanced Algorithm Visualization */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white font-bold tracking-wide shadow-lg animate-pulse">Live Algorithm</Badge>
                </div>
                <div className="space-y-6">
                  <div className="text-green-400 font-mono text-sm">
                    neural_network.predict(satellite_data)
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-white">
                      <span>Biomass Detection</span>
                      <span className="text-green-400">97.3%</span>
                    </div>
                    <Progress value={97.3} className="h-2" />
                    <div className="flex justify-between text-white">
                      <span>Carbon Sequestration</span> 
                      <span className="text-blue-400">89.2%</span>
                    </div>
                    <Progress value={89.2} className="h-2" />
                    <div className="flex justify-between text-white">
                      <span>Payment Processing</span>
                      <span className="text-yellow-400">99.8%</span>
                    </div>
                    <Progress value={99.8} className="h-2" />
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    blockchain.transfer(farmer_wallet, carbon_credits * market_rate)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Metrics Dashboard */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Real-Time Algorithm Performance</h2>
            <p className="text-gray-300 text-lg font-medium">Live metrics from our production ML models serving 10,000+ farmers</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedMetrics.map((metric, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="stat-number text-4xl lg:text-5xl text-green-400 mb-2">{metric.value}%</div>
                  <div className="stat-label text-white mb-1">{metric.label}</div>
                  <div className="text-green-400 text-sm mb-2 font-semibold">{metric.change} this month</div>
                  <div className="text-gray-400 text-xs font-medium">{metric.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Pain Points */}
      <section className="py-20 bg-red-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
              <span className="text-red-600">Farmer Problems</span> हमने सुलझाई
            </h2>
            <p className="text-xl text-gray-600 font-medium">Real farmer interviews से पता चला - यही हैं actual problems</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {farmerChallenges.map((challenge, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <challenge.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <Badge variant={challenge.impact === 'Critical' ? 'destructive' : challenge.impact === 'High' ? 'secondary' : 'outline'}>
                      {challenge.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 font-medium leading-relaxed">{challenge.description}</p>
                  <div className="bg-red-100 p-3 rounded-lg">
                    <p className="text-red-800 font-bold text-sm">{challenge.affected} affected</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Algorithmic Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
              Advanced <span className="text-emerald-600">AI Algorithms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Cutting-edge machine learning और blockchain technology jo specifically Indian agriculture के लिए designed है
            </p>
          </div>
          <div className="space-y-12">
            {algorithmicSolutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                        <p className="text-emerald-600 font-mono text-sm">{solution.algorithm}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{solution.accuracy}</div>
                        <div className="text-sm text-green-700">Accuracy Rate</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{solution.processing}</div>
                        <div className="text-sm text-blue-700">Processing</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-emerald-600 text-emerald-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900 p-8 flex items-center">
                    <div className="font-mono text-green-400 text-sm space-y-2 w-full">
                      <div>// Algorithm Pipeline</div>
                      <div className="text-white">
                        input: satellite_imagery, gps_data
                      </div>
                      <div className="text-blue-400">
                        model = load_transformer_cnn()
                      </div>
                      <div className="text-yellow-400">
                        biomass = model.predict(preprocess(input))
                      </div>
                      <div className="text-green-300">
                        carbon_credits = calculate_sequestration(biomass)
                      </div>
                      <div className="text-purple-400">
                        blockchain.verify_and_transfer(farmer_id, credits)
                      </div>
                      <div className="text-gray-400">
                        // Real-time processing: ~2.3ms
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Journey with Tech Behind */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Farmer का Journey: <span className="text-emerald-600">Step by Step</span>
            </h2>
            <p className="text-xl text-gray-600">हर step में advanced AI working behind the scenes</p>
          </div>
          <div className="space-y-8">
            {farmerJourney.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-4 gap-6 p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-gray-900">{step.phase}</h3>
                    <p className="text-sm text-gray-600">{step.time}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Farmer ka Action</h4>
                    <p className="text-gray-700">{step.farmer_action}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Behind Scenes</h4>
                    <p className="text-blue-600 font-mono text-sm">{step.tech_behind}</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="border-red-500 text-red-600 text-xs">
                        Pain: {step.pain_point}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-emerald-600 font-medium">{step.our_solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Farmer Focused */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming? 🌾
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join 10,000+ farmers earning additional ₹25,000-50,000 annually through verified carbon credits. 
            AI technology + blockchain security + farmer-first design.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Smartphone className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Simple Mobile App</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Brain className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">AI Verification</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <IndianRupee className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Instant Payments</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8">
              Download Kisan App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
