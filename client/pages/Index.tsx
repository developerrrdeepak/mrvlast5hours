import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TreePine,
  Wheat,
  Smartphone,
  Shield,
  ArrowRight,
  CheckCircle,
  MapPin,
  IndianRupee,
  Globe,
  Mic,
  CreditCard,
  Users,
  Award,
  BarChart3,
  TrendingUp,
  Languages,
  Leaf,
  Zap,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSelector, { useLanguage } from "@/components/LanguageSelector";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function Index() {
  const { language, changeLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const features = [
    {
      icon: Smartphone,
      title: "सरल मोबाइल ऐप",
      description: "आसान interface के साथ हिंदी में carbon farming track करें",
      color: "blue",
    },
    {
      icon: IndianRupee,
      title: "कार्बन आय",
      description: "अपनी farming practices से carbon credits earn करें",
      color: "green",
    },
    {
      icon: TreePine,
      title: "पेड़ लगाएं",
      description: "Agroforestry projects में participate करें",
      color: "emerald",
    },
    {
      icon: Wheat,
      title: "Rice Farming",
      description: "Rice cultivation में methane reduction से income पाएं",
      color: "amber",
    },
    {
      icon: Shield,
      title: "सुरक्षित",
      description: "Blockchain technology से transparent payments",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Global Market",
      description: "अपने carbon credits को international market में बेचें",
      color: "teal",
    },
  ];

  const benefits = [
    "प्रति एकड़ ₹5,000-15,000 अतिरिक्त आय",
    "Sustainable farming practices",
    "Government incentives के साथ support",
    "Free training और technical guidance",
    "Real-time income tracking",
    "Community support network",
  ];

  const stats = [
    {
      number: "1,46,000+",
      label: "किसान साझीदार",
      description: "भारत भर में"
    },
    {
      number: "₹50 करोड़+",
      label: "Carbon Income",
      description: "किसानों को मिली"
    },
    {
      number: "15+",
      label: "भाषाएं",
      description: "Local language support"
    },
    {
      number: "24/7",
      label: "सहायता",
      description: "Customer support"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-amber-500/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200 text-lg px-6 py-3 font-bold tracking-wide shadow-lg">
              🌱 Carbon Farming India
            </Badge>
            <h1 className="text-hero font-display font-black text-gray-900 leading-none mb-8">
              <span className="text-green-600">किसानों के लिए</span> <br />
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-amber-500 bg-clip-text text-transparent">
                Carbon Income
              </span>{" "}
              का नया रास्त���
            </h1>
            <p className="text-subtitle text-gray-700 font-medium mb-8 max-w-4xl mx-auto">
              अपनी farming practices से{" "}
              <span className="font-bold text-emerald-600">
                carbon credits earn करें
              </span>{" "}
              और महीने में{" "}
              <span className="font-bold text-amber-600">
                ₹5,000-15,000 extra income
              </span>{" "}
              पाएं। सबसे आसान तरीका sustainable farming का।
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur"
                >
                  <CardContent className="p-4 text-center">
                    <div className="stat-number text-3xl text-emerald-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="stat-label text-gray-900 mb-1 text-sm font-bold">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Language Selector */}
            <div className="mb-8">
              <Card className="border-2 border-green-200 bg-green-50/80 backdrop-blur max-w-2xl mx-auto">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Languages className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-bold text-green-800">
                      अपनी भाषा चुनें / Choose Your Language
                    </h3>
                  </div>
                  <p className="text-green-700 mb-4 text-sm">
                    किसानों के लिए - अपनी सुविधाजनक भाषा में जानकारी पाएं
                  </p>
                  <LanguageSelector
                    selectedLanguage={language}
                    onLanguageChange={changeLanguage}
                    showModal={showLanguageModal}
                    onModalChange={setShowLanguageModal}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => setShowAuthModal(true)}
                className="bg-gradient-to-r from-green-600 via-emerald-600 to-amber-500 hover:from-green-700 hover:via-emerald-700 hover:to-amber-600 text-lg px-8 font-bold tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                आज ही शुरू करें
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 font-semibold tracking-wide hover:shadow-lg transition-all duration-200"
                >
                  और जानें
                </Button>
              </Link>
            </div>

            {/* Hero Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.pexels.com/photos/20527463/pexels-photo-20527463.jpeg"
                  alt="भारतीय महिला किसान गेहूं की फसल के साथ"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">पारंपरिक ज्ञान</p>
                  <p className="text-sm opacity-90">आधुनिक तकनीक</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.pexels.com/photos/20527455/pexels-photo-20527455.jpeg"
                  alt="भारतीय महिला किसान हरी सब्जियों के साथ"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">महिला किसान</p>
                  <p className="text-sm opacity-90">बदलाव की अगुआई</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.pexels.com/photos/7782861/pexels-photo-7782861.jpeg"
                  alt="हाथों में बीज - कृषि और विकास का प्रतीक"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">बदलाव के बीज</p>
                  <p className="text-sm opacity-90">जलवायु समाधान</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
              क्यों चुनें <span className="text-emerald-600">Carbon Farming?</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              आसान, फायदेमंद, और पर्यावरण के लिए बेहतर
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon
                      className={`h-8 w-8 text-${feature.color}-600`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
                <span className="text-emerald-600">फायदे</span> जो आपको मिलेंगे
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                Carbon farming से न केवल आपकी आय बढ़ेगी, बल्कि पर्यावरण भी बेहतर होगा।
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-lg px-8 font-bold tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  अभी Registration करें
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8">
                <div className="h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                  <TrendingUp className="h-20 w-20 text-emerald-600 mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    ₹12,000
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    औसत मासिक अतिर��क्त आय
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold mt-2">
                    प्रति एकड़ carbon farming से
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-tight">
            शुरू करने के लिए तैयार हैं?
          </h2>
          <p className="text-xl text-green-100 font-medium max-w-3xl mx-auto mb-8">
            आज ही carbon farming की शुरुआत करें और sustainable income पाना शुरू करें
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowAuthModal(true)}
              className="bg-white text-emerald-600 hover:bg-green-50 text-lg px-8 font-bold tracking-wide shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              अभी Sign Up करें
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 font-semibold tracking-wide hover:shadow-lg transition-all duration-200"
              >
                हमारे बारे में जानें
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </div>
  );
}
