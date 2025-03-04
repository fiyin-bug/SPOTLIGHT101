import { Sparkles, Target } from "lucide-react"

const SectionThree = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-8 md:px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-[#c5ac5a]" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg leading-relaxed">
              To be the premier platform where artistic brilliance meets innovation, fostering a vibrant community that
              propels Nigerian talent onto the global stage. We envision Spotlight Concert as the catalyst for a new era
              of creative expression and cultural exchange.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Target className="w-8 h-8 text-[#c5ac5a]" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed">
              To empower Nigerian youth through an electrifying blend of culture, lifestyle, and entertainment. We
              curate unforgettable experiences that showcase talent, inspire creativity, and ignite meaningful
              conversations, all while nurturing the next generation of artistic trailblazers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree

