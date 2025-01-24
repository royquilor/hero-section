import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-10 relative overflow-hidden">
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-0 h-full w-full text-neutral-200 [mask-image:radial-gradient(white,transparent_85%)]"
      />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-7xl font-medium text-center tracking-tight">Design. Code. Ship.</h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto text-center mt-4">
          We are a team of designers, developers, and marketers who are passionate about creating beautiful and functional websites.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Explore</Button>
        </div>
      </div>
    </section>
  );
}
