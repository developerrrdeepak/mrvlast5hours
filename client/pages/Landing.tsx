import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Satellite, TreePine as TreeIcon, Cpu, FileLock2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const trendData = [
  { name: "2019", value: 20 },
  { name: "2020", value: 40 },
  { name: "2021", value: 75 },
  { name: "2022", value: 110 },
  { name: "2023", value: 170 },
  { name: "2024", value: 240 },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1f1a] via-[#0a1a15] to-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.1),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <Badge className="bg-emerald-500/10 border-emerald-400/30 text-emerald-300">Carbon Roots • AI Powered</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-white">Discover Your Path to </span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Carbon Income</span>
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300 text-lg">
            AI-powered tools to calculate, verify, and maximize carbon credits for farmers and organizations.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 text-slate-900 font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.55)]">
              <Link to="/tools">Estimate Credits</Link>
            </Button>
            <Button asChild variant="outline" className="border-emerald-400/50 text-emerald-300 hover:bg-emerald-500/10">
              <Link to="/solutions">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Satellite, title: "Satellite MRV", desc: "Vegetation, land cover, soil moisture" },
            { icon: TreeIcon, title: "Agroforestry", desc: "Tree growth, biomass, SOC" },
            { icon: Cpu, title: "IoT Sensors", desc: "Soil moisture, weather data" },
            { icon: FileLock2, title: "Audit Trails", desc: "Immutable logs, transparency" },
          ].map((f, i) => (
            <Card key={i} className="border-emerald-800/50 bg-gradient-to-b from-emerald-900/30 to-slate-900/40 text-slate-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <CardTitle className="mt-3 text-white">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "1,50,000+", v: "Farmers Onboarded" },
            { k: "₹50+", v: "Monthly Carbon Income" },
            { k: "15+", v: "Local Languages Supported" },
            { k: "24/7", v: "Customer Support" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-5 bg-emerald-500/10 border border-emerald-400/30">
              <div className="text-3xl font-extrabold text-emerald-300">{s.k}</div>
              <div className="text-slate-300 mt-1 text-sm font-medium">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 bg-slate-900/60 border border-emerald-800/40">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-300" />
                <span className="font-semibold">Verification Progress</span>
              </div>
              <span className="text-emerald-300 font-bold">60%</span>
            </div>
            <div className="relative h-3 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-emerald-500 to-green-400 animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
            <div className="grid grid-cols-4 text-xs mt-3 text-slate-300">
              <div className="flex items-center justify-between"><span>Profile</span><span>20%</span></div>
              <div className="flex items-center justify-between"><span>Data</span><span>55%</span></div>
              <div className="flex items-center justify-between"><span>Verification</span><span>75%</span></div>
              <div className="flex items-center justify-between"><span>Issued</span><span>90%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights / News + Trend */}
      <section className="py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          {/* News */}
          <div className="space-y-4">
            {[
              {
                img: "https://images.pexels.com/photos/1605270/pexels-photo-1605270.jpeg",
                title: "Remote Work is Here to Stay: Why",
                desc: "Exploring the lasting impact of remote work on the global job market and company culture.",
              },
              {
                img: "https://images.pexels.com/photos/28270760/pexels-photo-28270760.jpeg",
                title: "AI in Agriculture: The Next Frontier",
                desc: "How AI is improving diagnostics, field measurements, and yield forecasting.",
              },
              {
                img: "https://images.pexels.com/photos/9799712/pexels-photo-9799712.jpeg",
                title: "Renewable Energy and Carbon Markets",
                desc: "Opportunities in solar, wind, and green energy sectors for carbon financing.",
              },
            ].map((n, i) => (
              <Card key={i} className="overflow-hidden border-emerald-800/40 bg-slate-900/60">
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <img src={n.img} alt={n.title} className="h-28 w-full object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-white line-clamp-2">{n.title}</h4>
                    <p className="text-sm text-slate-300 line-clamp-2 mt-1">{n.desc}</p>
                    <Button variant="link" className="text-emerald-300 p-0 mt-1">Read More <ArrowRight className="w-4 h-4 ml-1" /></Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trend Chart (CSS-based) */}
          <Card className="border-emerald-800/40 bg-slate-900/60">
            <CardHeader>
              <CardTitle className="text-white">Carbon Credit Growth Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trendData.map((d) => (
                  <div key={d.name} className="grid grid-cols-[60px_1fr_50px] items-center gap-3">
                    <span className="text-slate-300 text-sm">{d.name}</span>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-400"
                        style={{ width: `${(d.value / Math.max(...trendData.map(t => t.value))) * 100}%` }}
                      />
                    </div>
                    <span className="text-emerald-300 font-semibold text-sm">{d.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
