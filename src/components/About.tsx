interface Service {
  title: string;
  description: string;
  skills: string; 
}
export default function About() {

  const services: Service[] = [
    {
      title: "Programming",
      description: "Building dynamic and interactive applications with modern JavaScript and TypeScript.",
      skills: "JavaScript, TypeScript",
    },
    {
      title: "Web & Database",
      description: "Creating responsive and accessible web experiences with HTML and CSS.",
      skills: "HTML, CSS",
    },
    {
      title: "Frameworks",
      description: "Developing scalable applications using modern frameworks and libraries.",
      skills: "React.JS, Next.js, Bootstrap, Express.js",
    },
    {
      title: "Tech",
      description: "Streamlining workflow with Git version control and modern development tools.",
      skills: "Git, Visual Studio, Cursor",
    }
  ]
  
  return (
    <section id="about" className="min-h-screen  py-16 md:py-24 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* Hand-drawn Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Indie Flower', cursive" }}>
            Michael Kim
          </h2>
          {/* Underline scribble */}
          <svg className="mx-auto" width="200" height="12" viewBox="0 0 200 12">
            <path d="M5 6 Q 50 9, 100 6 T 195 6" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Profile label */}
        <div className="text-center mb-8">
          <span className="inline-block text-2xl font-bold text-gray-800 border-b-3 border-gray-800 pb-1 px-4 bg-white shadow-sm" style={{ fontFamily: "'Indie Flower', cursive" }}>
            Profile
          </span>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {/* Image 1 - 6xs.jpg (spans 2 columns) */}
          <div className="col-span-2 bg-white p-3 shadow-lg" style={{ transform: 'rotate(-0.5deg)' }}>
            <img src="/img/about/6xs.jpg" alt="Profile" className="w-full aspect-4/3 object-cover"/>
          </div>

          {/* Image 2 - newyork1.jpg */}
          <div className="bg-white p-2 shadow-lg" style={{ transform: 'rotate(1deg)' }}>
            <img src="/img/about/newyork1.jpg" alt="New York" className="w-full aspect-square object-cover"/>
          </div>

          {/* Image 3 - newyork2.jpg */}
          <div className="bg-white p-2 shadow-lg" style={{ transform: 'rotate(-1.5deg)' }}>
            <img src="/img/about/newyork2.jpg" alt="New York" className="w-full aspect-square object-cover"/>
          </div>

          {/* Image 4 - maru.jpg */}
          <div className="bg-white p-2 shadow-lg" style={{ transform: 'rotate(0.5deg)' }}>
            <img src="/img/about/maru.jpg" alt="Coffee" className="w-full aspect-square object-cover"/>
          </div>

          {/* Image 5 - star.jpg */}
          <div className="bg-white p-2 shadow-lg" style={{ transform: 'rotate(-1deg)' }}>
            <img src="/img/about/star.jpg" alt="Star" className="w-full aspect-square object-cover"/>
          </div>

          {/* Image 6 - chicago1.jpg */}
          <div className="bg-white p-2 shadow-lg" style={{ transform: 'rotate(1.5deg)' }}>
            <img src="/img/about/chicago1.jpg" alt="Chicago" className="w-full aspect-square object-cover"/>
          </div>

          {/* Image 7 - chicago2.jpg */}
          <div className="bg-white p-2 shadow-lg" style={{ transform: 'rotate(-0.5deg)' }}>
            <img src="/img/about/chicago2.jpg" alt="Chicago" className="w-full aspect-square object-cover"/>
          </div>
        </div>

        {/* Bio text section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-white/80 p-8 md:p-10 rounded-lg border-2 border-gray-300 shadow-md" style={{ transform: 'rotate(0.5deg)' }}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-700 pb-2" style={{ fontFamily: "'Indie Flower', cursive" }}>
              About Me
            </h3>
            
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                My journey into web development started behind an espresso machine. As a barista, 
                I was passionate about coffee and wanted to share that knowledge with others, so I 
                built my own coffee community website—and that's when I fell in love with coding.
              </p>
              <p>
                What began as a simple project turned into a full-blown passion. When I became a manager 
                at the coffee shop, I took on building a website for the business, diving deeper into 
                web development and discovering how powerful it is to create digital experiences that 
                bring people together.
              </p>
              <p>
                Now, I combine my love for creating meaningful connections with my technical skills to 
                build modern, user-friendly web applications. Whether it's a coffee community or a 
                business website, I'm all about crafting experiences that matter.
              </p>
            </div>
          </div>
        </div>

        {/* Skills as sticky notes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((item, index) => {
            const colors = ['#fef3c7', '#dbeafe', '#fce7f3', '#d1fae5'];
            const rotations = ['-2deg', '1deg', '-1deg', '1.5deg'];
            return (
              <div 
                key={index}
                className="relative p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ 
                  backgroundColor: colors[index],
                  transform: `rotate(${rotations[index]})`,
                  fontFamily: "'Indie Flower', cursive"
                }}
              >
                {/* Tape effect at top */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-white/60 border border-gray-300 shadow-sm"></div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-gray-600 pb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-gray-600 text-xs font-semibold">
                  {item.skills}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
    </section>
  )
}