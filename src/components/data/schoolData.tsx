
export interface SchoolStat {
  value: string;
  label: string;
}

export interface SchoolProgram {
  title: string;
  slug: string;
  description: string;
  overview: string;
  highlights: string[];
}

export interface SchoolFacility {
  title: string;
  description: string;
}

export interface SchoolNews {
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  content: string[];
}

export const schoolData = {
  name: "Vadel British International School",

  shortName: "VBIS",

  tagline: "Inspiring Excellence. Building Futures.",

  description:
    "Vadel British International School provides a stimulating and supportive environment where students develop academically, socially and personally.",

  location: "Abuja, Nigeria",

  contact: {
    phone: "+234 803 896 4749",
    email: "info@vadelbritishinternationalschool.edu.ng",
    address: "House 58, B/W, Minfa 1 Estate, Lokogoma, FCT Abuja, Nigeria",
  },

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },

  stats: [
    {
      value: "850+",
      label: "Students",
    },
    {
      value: "7+",
      label: "Educators",
    },
    {
      value: "18+",
      label: "Years of Excellence",
    },
    {
      value: "1",
      label: "Campus",
    },
  ] satisfies SchoolStat[],

  programs: [
    {
      title: "Early Years",
      slug: "early-years",
      description:
        "A nurturing environment where children develop curiosity, confidence and a love for learning.",
      overview:
        "Our Early Years programme provides a warm, engaging and supportive environment where young learners can develop the foundations for a successful educational journey. Through age-appropriate activities, children are encouraged to explore, ask questions and develop confidence in their abilities.",
      highlights: [
        "Play-based learning",
        "Early literacy and numeracy",
        "Social and emotional development",
        "Creative activities",
        "Personal care and independence",
      ],
    },

    {
      title: "Primary School",
      slug: "primary-school",
      description:
        "A strong academic foundation combined with creativity, character development and discovery.",
      overview:
        "Our Primary School programme provides students with a strong academic foundation while encouraging creativity, curiosity and independent thinking. Students are supported by teachers who help them build confidence and develop the knowledge and skills they need for the next stage of their education.",
      highlights: [
        "Strong literacy and numeracy foundations",
        "Science and practical learning",
        "Creative and critical thinking",
        "Character development",
        "Sports and extracurricular activities",
      ],
    },

    {
      title: "Secondary School",
      slug: "secondary-school",
      description:
        "Preparing students for higher education and the opportunities of a rapidly changing world.",
      overview:
        "Our Secondary School programme prepares students for further education while helping them develop independence, confidence and strong academic habits. Students are encouraged to think critically, take responsibility for their learning and explore their interests.",
      highlights: [
        "Broad academic curriculum",
        "Examination preparation",
        "Technology and digital learning",
        "Leadership development",
        "Career and university preparation",
      ],
    },
  ] satisfies SchoolProgram[],

  facilities: [
    {
      title: "Modern Classrooms",
      description:
        "Bright, comfortable and technology-enabled learning spaces.",
    },
    {
      title: "Science Laboratories",
      description:
        "Purpose-built spaces for practical scientific learning.",
    },
    {
      title: "ICT Centre",
      description:
        "Modern technology facilities supporting digital learning.",
    },
    {
      title: "Sports Facilities",
      description:
        "Facilities designed to encourage fitness, teamwork and competition.",
    },
  ] satisfies SchoolFacility[],

  news: [
    {
      title:
        "Vadel British International School Students Shine at National Science Competition",
      slug: "students-shine-national-science-competition",
      category: "Achievement",
      date: "September 18, 2026",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
      content: [
        "Students of Vadel British International School have continued to demonstrate their commitment to academic excellence after taking part in a national science competition.",
        "The students represented the school in a series of challenging activities designed to test their scientific knowledge, creativity and problem-solving abilities.",
        "In preparation for the competition, the students worked closely with their teachers through practical activities, research and classroom discussions. Their dedication and teamwork played an important role throughout the preparation.",
        "The competition gave the students an opportunity to apply what they have learned in the classroom to real-world challenges while gaining valuable experience outside the school environment.",
        "Vadel British International School is proud of the students for their hard work and determination and looks forward to supporting them as they continue to develop their academic potential.",
      ],
    },

    {
      title: "New Academic Year Begins With Welcome Week",
      slug: "new-academic-year-begins",
      category: "School Life",
      date: "September 5, 2026",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
      content: [
        "Vadel British International School has welcomed students back for a new academic year filled with learning, growth and new opportunities.",
        "The opening week provided students with an opportunity to settle into their classrooms, meet their teachers and reconnect with friends after the holiday break.",
        "Teachers introduced students to their new subjects, learning expectations and activities for the term. Special welcome activities were also organised to help students feel comfortable and excited about the year ahead.",
        "The school has continued to prepare its learning environment to support students academically and personally throughout the new session.",
        "As the academic year gets underway, students are encouraged to remain curious, work together and make the most of every learning opportunity.",
      ],
    },

    {
      title: "Our Students Take Part in Inter-School Sports Festival",
      slug: "inter-school-sports-festival",
      category: "Sports",
      date: "August 21, 2026",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
      content: [
        "Students from Vadel British International School recently took part in an inter-school sports festival, bringing together young athletes from different schools for a day of competition and teamwork.",
        "The event featured a range of sporting activities that encouraged students to demonstrate their skills, determination and team spirit.",
        "Beyond competition, the festival gave students an opportunity to meet and interact with pupils from other schools while developing important values such as discipline, cooperation and respect.",
        "Teachers and school representatives supported the students throughout the event, encouraging them to participate positively and give their best effort.",
        "Vadel British International School continues to recognise the importance of sports in developing confident, active and well-rounded students.",
      ],
    },

    {
      title:
        "Vadel British International School Launches New Technology Learning Centre",
      slug: "new-technology-learning-centre",
      category: "Campus",
      date: "August 8, 2026",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
      content: [
        "Vadel British International School has introduced a new technology learning centre designed to provide students with greater opportunities to develop their digital skills.",
        "The centre provides a modern learning environment where students can explore technology through practical activities, guided lessons and collaborative projects.",
        "The new facility will support learning across different subjects while helping students develop skills in areas such as digital literacy, research, creativity and problem-solving.",
        "Teachers will also use the centre to introduce students to technology-based learning activities that complement their regular classroom lessons.",
        "The school believes that giving students access to modern technology and practical learning opportunities will help prepare them for an increasingly digital world.",
      ],
    },
  ] satisfies SchoolNews[],
};