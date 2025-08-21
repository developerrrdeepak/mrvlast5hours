import PlaceholderPage from "@/components/PlaceholderPage";

export default function CaseStudies() {
  const comingSoonFeatures = [
    "Smallholder agroforestry project in Karnataka",
    "Rice methane reduction in West Bengal", 
    "Community forest restoration in Odisha",
    "Climate-smart agriculture in Punjab",
    "Mangrove restoration in Gujarat",
    "Bamboo plantation project in Assam",
    "Performance metrics and ROI analysis",
    "Farmer testimonials and impact stories"
  ];

  return (
    <PlaceholderPage
      title="Case Studies & Success Stories"
      description="Real-world examples of successful MRV implementations across India's diverse agricultural landscapes. Learn from proven projects and their impact on carbon sequestration."
      comingSoonFeatures={comingSoonFeatures}
    />
  );
}
