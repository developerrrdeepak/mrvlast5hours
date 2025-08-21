import PlaceholderPage from "@/components/PlaceholderPage";

export default function Tools() {
  const comingSoonFeatures = [
    "Mobile data collection app",
    "Satellite imagery analysis tools", 
    "IoT sensor integration platform",
    "Carbon calculation algorithms",
    "Field data validation system",
    "Real-time monitoring dashboard",
    "Automated reporting generator",
    "API documentation and SDKs"
  ];

  return (
    <PlaceholderPage
      title="MRV Tools & APIs"
      description="Comprehensive suite of monitoring, reporting, and verification tools designed for agroforestry and rice-based carbon projects. Access our APIs, mobile apps, and analytics platforms."
      comingSoonFeatures={comingSoonFeatures}
    />
  );
}
