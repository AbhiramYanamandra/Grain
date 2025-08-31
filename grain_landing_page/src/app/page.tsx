import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Apple,
  Activity,
  TreePine,
  Flower,
  Leaf,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: TreePine,
      title: "Grow Your Forest",
      description:
        "Plant virtual trees for every healthy meal tracked. Watch your nutrition forest flourish with consistent habits.",
    },
    {
      icon: Flower,
      title: "Bloom with Streaks",
      description:
        "Maintain daily nutrition tracking to grow beautiful flowers and unlock special garden features.",
    },
    {
      icon: Trophy,
      title: "Harvest Rewards",
      description:
        "Complete nutrition challenges and achieve milestones to earn points and unlock new garden elements.",
    },
    {
      icon: Leaf,
      title: "Seasonal Growth",
      description:
        "Track your progress through seasons as your virtual garden evolves with your nutrition journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#181008] via-black to-[#18101f]">
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-[#2ecc40]/20 text-[#2ecc40] border-[#2ecc40]/30 px-2 py-1 font-semibold text-sm shadow-md">
              🌱 Grow Your Nutrition Garden
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span
                className="block drop-shadow-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #ffe066 0%, #2ecc40 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Grow Healthy
              </span>
              <span
                className="block drop-shadow-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #2ecc40 0%, #6ee7b7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nutrition Habits
              </span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Plant seeds of good nutrition and watch your virtual garden flourish as you build consistent, healthy eating habits. Every meal tracked grows your forest of wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="text-lg px-10 py-6 font-semibold rounded-xl bg-gradient-to-r from-[#ff7e29] to-[#ffe066] text-black border-0 shadow-lg hover:opacity-90 transition"
              >
                <Apple className="w-5 h-5 mr-2" />
                Start Tracking
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 font-semibold rounded-xl bg-black border border-gray-600 text-white hover:bg-gray-800 transition"
              >
                <Activity className="w-5 h-5 mr-2" />
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Why Choose Our Tracker?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Simple, effective tools to help you build and maintain healthy eating habits that last.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#111] border border-gray-700 hover:shadow-lg transition"
            >
              <CardContent className="p-8 flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-black/40 text-green-400">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Habit Tracking Features */}
      <section className="bg-gradient-to-br from-[#0e1a13] via-[#181008] to-[#1a181f] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Watch Your Garden Grow
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Every healthy choice plants a seed. Track consistently to grow a beautiful virtual forest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0e1a13] border border-[#2ecc40] text-center shadow-lg">
              <CardContent className="p-8 space-y-4">
                <TreePine className="w-12 h-12 text-[#2ecc40] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Plant Trees Daily</h3>
                <p className="text-gray-400">Track meals to grow your nutrition forest</p>
                <Badge className="bg-[#2ecc40]/20 text-[#2ecc40] border-[#2ecc40]/30 px-4 py-2 font-semibold">
                  7 Trees Planted! 🌲
                </Badge>
              </CardContent>
            </Card>
            <Card className="bg-[#1f1c18] border border-[#ffe066] text-center shadow-lg">
              <CardContent className="p-8 space-y-4">
                <Flower className="w-12 h-12 text-[#ffe066] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Bloom with Streaks</h3>
                <p className="text-gray-400">Maintain streaks to unlock beautiful flowers</p>
                <Badge className="bg-[#ffe066]/20 text-[#ffe066] border-[#ffe066]/30 px-4 py-2 font-semibold">
                  Garden Blooming! 🌸
                </Badge>
              </CardContent>
            </Card>
            <Card className="bg-[#1a181f] border border-[#c4b5fd] text-center shadow-lg">
              <CardContent className="p-8 space-y-4">
                <Leaf className="w-12 h-12 text-[#c4b5fd] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Seasonal Growth</h3>
                <p className="text-gray-400">Watch your forest evolve through seasons</p>
                <Badge className="bg-[#c4b5fd]/20 text-[#c4b5fd] border-[#c4b5fd]/30 px-4 py-2 font-semibold">
                  Spring Season 🍃
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Ready to Build Better Habits?
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            Start building sustainable nutrition habits today with our simple tracking tools.
          </p>
          <Button
            size="lg"
            className="text-lg px-12 py-6 font-semibold rounded-xl bg-gradient-to-r from-[#ff7e29] to-[#e0c3fc] text-white border-0 shadow-lg hover:opacity-90 transition"
          >
            Start Tracking Today
          </Button>
          <p className="text-sm text-gray-400">
            Simple habit tracking for better nutrition
          </p>
        </div>
      </section>
    </div>
  );
}
