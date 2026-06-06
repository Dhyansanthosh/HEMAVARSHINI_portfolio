import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FiDownload, FiExternalLink, FiGithub, FiMail, FiPhone, FiChevronDown, FiLinkedin, FiCode } from 'react-icons/fi';
import { SiArduino, SiGithub, SiHackerrank, SiLeetcode, SiReact } from 'react-icons/si';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, Line } from '@react-three/drei';

const profileRoles = ['Embedded Systems Developer', 'IoT Enthusiast', 'Software Developer', 'ECE Student'];
const stats = [
  { label: 'Projects Delivered', value: 12 },
  { label: 'IoT Systems Built', value: 7 },
  { label: 'Certified Courses', value: 3 },
];

const skills = [
  { group: 'Programming', items: ['C', 'Python', 'Java', 'JavaScript'] },
  { group: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'Spring Boot'] },
  { group: 'Database', items: ['MySQL'] },
  { group: 'Embedded & IoT', items: ['ESP32', 'Arduino', 'MQTT', 'IoT Systems'] },
  { group: 'Engineering Tools', items: ['VS Code', 'LTSpice', 'Proteus', 'Multisim', 'Keil', 'KiCad', 'ModelSim', 'Canva', 'Excel', 'PowerPoint'] },
  { group: 'Core Concepts', items: ['Data Structures', 'Algorithms', 'DBMS', 'Embedded Systems', 'IoT Communication'] },
];

const codingProfiles = [
  { name: 'LeetCode', icon: SiLeetcode, detail: '70+ Problems Solved', extra: 'Global Rank: 1,738,057' },
  { name: 'SkillRack', icon: FiCode, detail: '1000+ Problems Solved', extra: '14 Tests Completed' },
  { name: 'HackerRank', icon: SiHackerrank, detail: '2 Star C • 5 Star SQL • 2 Star Java • 2 Star Problem Solving', extra: 'Active Problem Solver' },
];

const projects = [
  {
    title: 'TravelMate',
    subtitle: 'Smart Tourist Guide Application',
    description: 'Personalized travel planning with destination discovery, hotel and restaurant suggestions, map navigation, and itinerary assistance.',
    tags: ['React', 'TypeScript', 'Maps', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Blind Stick',
    subtitle: 'Bluetooth & Google Maps Integration',
    description: 'Assistive device with ESP32, ultrasonic obstacle detection, Bluetooth communication, voice guidance and map-based routing.',
    tags: ['ESP32', 'Bluetooth', 'Google Maps', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    demo: '#',
  },
];

const certifications = ['C for Beginners', 'Data Structures in C', 'Arduino Programming for Absolute Beginners'];
const achievements = ['3rd Prize in Project Expo', "Udhayam'25 Paper Presentation Participant", "Kriya'26 Participant"];

function FloatingParticles() {
  const particles = useMemo(() => Array.from({ length: 50 }, (_, index) => ({
    id: index,
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 12,
    z: (Math.random() - 0.5) * 10,
    scale: Math.random() * 0.8 + 0.2,
    color: Math.random() > 0.5 ? 'cyan' : 'violet',
    size: Math.random() * 30 + 10
  })), []);
  
  const shapes = useMemo(() => Array.from({ length: 8 }, (_, index) => ({
    id: index,
    x: (Math.random() - 0.5) * 25,
    y: (Math.random() - 0.5) * 15,
    rotation: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'square' : 'triangle',
    size: Math.random() * 20 + 15
  })), []);

  return (
    <>
      {particles.map(({ id, x, y, z, scale, color, size }) => (
        <motion.div
          key={id}
          className={`absolute rounded-full blur-2xl ${color === 'cyan' ? 'bg-cyanGlow' : 'bg-violetGlow'}`}
          style={{
            width: size * scale,
            height: size * scale,
            left: `calc(50% + ${x}rem)`,
            top: `calc(50% + ${y}rem)`,
            opacity: Math.random() * 0.6 + 0.2
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: id * 0.1
          }}
        />
      ))}
      {shapes.map(({ id, x, y, rotation, shape, size }) => (
        <motion.div
          key={id}
          className={`absolute blur-xl ${shape === 'square' ? 'bg-cyanGlow/10' : 'bg-violetGlow/10'}`}
          style={{
            width: size,
            height: size,
            left: `calc(50% + ${x}rem)`,
            top: `calc(50% + ${y}rem)`,
            clipPath: shape === 'square' ? 'none' : 'polygon(50% 0%, 0% 100%, 100% 100%)',
            borderRadius: shape === 'square' ? '8px' : '0'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            rotate: [rotation, rotation + 360, rotation],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: id * 0.2
          }}
        />
      ))}
    </>
  );
}

function MeshNetwork() {
  const nodes = useMemo(() => {
    const nodeCount = 30;
    const nodes: Array<{
      position: [number, number, number];
      connections: number[];
    }> = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8
        ] as [number, number, number],
        connections: [] as number[]
      });
    }
    // Create connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        if (dist < 4) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }
    return nodes;
  }, []);

  const groupRef = useRef<any>();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render lines between connected nodes */}
      {nodes.map((node, i) => 
        node.connections.map((connIndex) => {
          if (connIndex > i) {
            const connectedNode = nodes[connIndex];
            return (
              <Line
                key={`${i}-${connIndex}`}
                points={[node.position, connectedNode.position] as any}
                color="#5ecfff"
                opacity={0.3}
                lineWidth={0.5}
              />
            );
          }
          return null;
        })
      )}
      
      {/* Render nodes as glowing spheres */}
      {nodes.map((node, i) => (
        <Sphere
          key={i}
          args={[0.08, 16, 16]}
          position={node.position as any}
        >
          <meshStandardMaterial
            color="#5ecfff"
            emissive="#5ecfff"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
          <pointLight
            color="#5ecfff"
            intensity={0.5}
            distance={2}
          />
        </Sphere>
      ))}
    </group>
  );
}

function MeshBackground() {
  const ref = useRef<any>();
  const ref2 = useRef<any>();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x = Math.sin(clock.elapsedTime / 6) * 0.15;
      ref.current.rotation.z = Math.cos(clock.elapsedTime / 8) * 0.1;
    }
    if (ref2.current) {
      ref2.current.rotation.y -= 0.0008;
      ref2.current.rotation.x = Math.cos(clock.elapsedTime / 7) * 0.12;
    }
  });
  return (
    <group>
      <group ref={ref}>
        <Sphere args={[2.3, 64, 64]} scale={1.5} position={[0, 0, 0]}>
          <meshStandardMaterial color="#6933ff" transparent opacity={0.12} roughness={0.2} metalness={0.8} emissive="#4ecfff" emissiveIntensity={0.4} />
        </Sphere>
      </group>
      <group ref={ref2}>
        <Sphere args={[1.8, 48, 48]} scale={1.2} position={[1.5, 0.5, -1]}>
          <meshStandardMaterial color="#4ecfff" transparent opacity={0.08} roughness={0.3} metalness={0.7} emissive="#6933ff" emissiveIntensity={0.3} />
        </Sphere>
      </group>
    </group>
  );
}

function App() {
  const [activeRole, setActiveRole] = useState(0);
  const [cursorHover, setCursorHover] = useState(false);
  const [profileSrc, setProfileSrc] = useState('/profile.jpg');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [gradientPosition, setGradientPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [colorShift, setColorShift] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActiveRole((value) => (value + 1) % profileRoles.length), 3600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
      setColorShift((prev) => (prev + 1) % 360);
    }, 50);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const move = (event: MouseEvent) => {
      if (cursor && ring) {
        cursor.setAttribute('style', `left:${event.clientX}px;top:${event.clientY}px;`);
        ring.setAttribute('style', `left:${event.clientX}px;top:${event.clientY}px;`);
      }
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div data-cursor className={cursorHover ? 'cursor-hover' : ''}>
      <div className="fixed left-0 top-0 h-1 w-full bg-cyanGlow/20 backdrop-blur-xl">
        <div className="h-full bg-cyanGlow/80" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 transition-all duration-[3000ms] ease-in-out"
          style={{
            background: `
              radial-gradient(circle at ${50 + Math.sin(gradientPosition * 0.02) * 30}% ${50 + Math.cos(gradientPosition * 0.02) * 30}%, rgba(${94 + Math.sin(colorShift * 0.05) * 20}, ${189 + Math.cos(colorShift * 0.05) * 20}, 255, 0.18), transparent 28%),
              radial-gradient(circle at ${50 + Math.cos(gradientPosition * 0.015) * 40}% ${50 + Math.sin(gradientPosition * 0.015) * 40}%, rgba(${132 + Math.cos(colorShift * 0.05) * 20}, ${65 + Math.sin(colorShift * 0.05) * 20}, 255, 0.12), transparent 25%),
              linear-gradient(180deg, rgba(5,9,22,0.94), rgba(7,14,40,0.92))
            `
          }}
        />
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${94 + Math.sin(colorShift * 0.1) * 30}, ${189 + Math.cos(colorShift * 0.1) * 30}, 255, 0.08) 0%, transparent 50%)`
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 30%, rgba(${94 + Math.sin(colorShift * 0.05) * 20}, ${189 + Math.cos(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(${132 + Math.cos(colorShift * 0.05) * 20}, ${65 + Math.sin(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 30%, rgba(${94 + Math.sin(colorShift * 0.05) * 20}, ${189 + Math.cos(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(${132 + Math.cos(colorShift * 0.05) * 20}, ${65 + Math.sin(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 50% 50%, rgba(${94 + Math.sin(colorShift * 0.05) * 20}, ${189 + Math.cos(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(${132 + Math.cos(colorShift * 0.05) * 20}, ${65 + Math.sin(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 30%, rgba(${94 + Math.sin(colorShift * 0.05) * 20}, ${189 + Math.cos(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(${132 + Math.cos(colorShift * 0.05) * 20}, ${65 + Math.sin(colorShift * 0.05) * 20}, 255, 0.05) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#7c6aff" />
            <pointLight position={[-5, -5, 5]} intensity={0.7} color="#5ecfff" />
            <Stars radius={60} depth={25} count={1500} factor={4} saturation={0.3} fade />
            <MeshNetwork />
            <MeshBackground />
          </Canvas>
        </div>
      </div>

      <div className="relative overflow-hidden z-10">
        <section className="relative min-h-screen px-6 pb-20 pt-8 md:px-12 lg:px-20">

          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12">
            <FloatingParticles />

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
              <motion.div initial={{ opacity: 0, x: -42 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="section-title"
                >
                  Meet Hemavarshini G S
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                  HEMAVARSHINI <motion.span 
                    className="bg-gradient-to-r from-cyanGlow via-blue-400 to-violetGlow bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%']
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    style={{ backgroundSize: '200% auto' }}
                  >G S</motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
                >
                  <span className="inline-block">
                    Passionate Electronics and Communication Engineering student specializing in Embedded Systems, IoT solutions, and software development.
                  </span>
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-cyanGlow ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
                  />
                </motion.p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Embedded Systems Developer', 'IoT Enthusiast', 'Software Developer', 'ECE Student'].map((role, idx) => (
                    <span key={role} className={`rounded-2xl border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${idx === activeRole ? 'border-cyanGlow bg-cyanGlow/10 text-white shadow-glow' : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyanGlow/70 hover:bg-cyanGlow/5 hover:text-white'}`}>
                      {role}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <motion.a
                    href="/resume.pdf"
                    download="Hemavarshini_GS_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyanGlow to-blue-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                    <span className="relative z-10"><FiDownload /> Download Resume</span>
                  </motion.a>
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-cyanGlow hover:bg-cyanGlow/10 hover:text-white overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyanGlow/10 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                    <span className="relative z-10"><FiExternalLink /> View Projects</span>
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-violetGlow hover:bg-violetGlow/10 hover:text-white overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-violetGlow/10 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                    <span className="relative z-10"><FiMail /> Contact Me</span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-soft backdrop-blur-xl">
                <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-cyanGlow/20 blur-3xl" />
                <div className="absolute -right-8 top-14 h-28 w-28 rounded-full bg-violetGlow/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-glow">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%)]" />
                  <div className="relative flex items-center justify-center py-10">
                    <div className="relative h-72 w-72 rounded-full border-2 border-cyanGlow/40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent)] p-1 shadow-glow">
                      <div className="absolute inset-0 rounded-full border border-cyanGlow/20 blur-[2px]" />
                      <img 
                        src={profileSrc} 
                        onError={() => setProfileSrc('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80')} 
                        alt="Hemavarshini profile" 
                        className="relative h-full w-full rounded-full object-cover"
                        style={{ objectPosition: 'center 10%' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-soft">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>College</span>
                    <span>Sri Eshwar College of Engineering</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Email</span>
                    <span>hemavarshini.g2024ece@sece.ac.in</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Phone</span>
                    <span>6382688945</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-10 flex justify-center">
            <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300 shadow-soft backdrop-blur-xl">
              <FiChevronDown className="text-cyanGlow" /> Scroll to explore
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(94,189,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(132,65,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(94,189,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(94,189,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <div className="mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <p className="section-title">About</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Education Journey & Achievements</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                A polished timeline that highlights academic success, technical maturity, and achievement momentum.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2 }} className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
                {[
                  { title: 'B.E. ECE', subtitle: 'Sri Eshwar College of Engineering', label: 'CGPA: 8.0', date: '2024 - Present' },
                  { title: 'HSC', subtitle: 'St. Joseph of Cluny', label: '86.6%', date: '2022' },
                  { title: 'SSLC', subtitle: 'St. Joseph of Cluny', label: '92.6%', date: '2020' },
                ].map((entry) => (
                  <div key={entry.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow transition-all duration-300 hover:border-cyanGlow/30">
                    <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-violetGlow/20 blur-3xl" />
                    <div className="relative">
                      <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow/80 font-medium">{entry.date}</p>
                      <h3 className="mt-3 text-2xl font-bold text-white">{entry.title}</h3>
                      <p className="mt-2 text-slate-300">{entry.subtitle}</p>
                      <p className="mt-3 inline-flex rounded-full bg-cyanGlow/10 border border-cyanGlow/20 px-4 py-2 text-sm font-medium text-cyanGlow">{entry.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
                <div className="space-y-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow transition-all duration-300 hover:border-cyanGlow/30">
                      <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                      <motion.p whileInView={{ scale: [0.95, 1], opacity: [0.6, 1] }} viewport={{ once: true }} className="mt-3 text-5xl font-bold text-white">
                        {stat.value}+
                      </motion.p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">Achievements are driven by a blend of disciplined engineering, creative problem solving, and hands-on embedded systems experience.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(132,65,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(94,189,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(132,65,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 40%, rgba(132,65,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <div className="mx-auto max-w-7xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-title">Technical Skills</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Advanced Interactive Skill Dashboard</h2>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 180, delay: index * 0.1 }}
                  key={skill.group}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyanGlow/0 via-transparent to-violetGlow/0"
                    animate={{
                      opacity: [0, 0.03, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <h3 className="text-xl font-bold text-white relative z-10">{skill.group}</h3>
                  <div className="mt-6 grid gap-3">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyanGlow hover:bg-cyanGlow/10 hover:text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="internship" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-title">Internship</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Embedded Systems & IoT Case Study</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="section-title mb-2">Role</p>
                    <h3 className="text-2xl font-bold text-white">Embedded Systems and IoT Intern</h3>
                    <p className="mt-2 text-slate-300">NIELIT Calicut</p>
                  </div>
                  <div className="rounded-3xl border border-cyanGlow/30 bg-cyanGlow/10 px-5 py-2.5 text-sm font-semibold text-cyanGlow">Live Case Study</div>
                </div>

                <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow">
                  <p className="text-slate-300 leading-relaxed">Developed an attendance monitoring system using ESP32 and MQTT communication. Attendance data was transmitted through Mosquitto Broker and visualized using Adafruit IO for real-time tracking and monitoring.</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {['ESP32', 'Arduino', 'MQTT', 'Adafruit IO', 'Real-time Monitoring', 'Embedded Dashboard'].map((tech) => (
                      <span key={tech} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyanGlow hover:bg-cyanGlow/10 hover:text-white">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft backdrop-blur-xl">
                <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow">
                  <p className="section-title">Architecture</p>
                  <div className="grid gap-5 rounded-3xl border border-cyanGlow/10 bg-cyanGlow/5 p-6 text-slate-200">
                    <div className="flex items-center justify-between text-sm text-slate-300"><span>ESP32 Device</span><span>MQTT Broker</span></div>
                    <div className="flex items-center justify-between text-sm text-slate-300"><span>Attendance Sensor</span><span>Adafruit IO</span></div>
                    <div className="flex items-center justify-between text-sm text-slate-300"><span>Real-time Dashboard</span><span>Data Analytics</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{
              background: [
                'radial-gradient(circle at 40% 30%, rgba(94,189,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 70%, rgba(132,65,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(94,189,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 30%, rgba(94,189,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <div className="mx-auto max-w-7xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-title">Projects</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Premium Project Showcase</h2>
            </motion.div>

            <div className="mt-12 grid gap-8 xl:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 180, delay: index * 0.2 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow"
                >
                  <div className="relative h-72 bg-[radial-gradient(circle_at_top,_rgba(93,196,255,0.18),_transparent_34%)]">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center opacity-90 transition duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-cyanGlow">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1 }}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-medium transition-all duration-300 hover:border-cyanGlow hover:bg-cyanGlow/10"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <h3 className="mt-6 text-3xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-slate-300">{project.subtitle}</p>
                    <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-cyanGlow hover:bg-cyanGlow/10 hover:text-white"
                      >
                        <FiGithub /> GitHub
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-violetGlow/10 px-5 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-violetGlow hover:bg-violetGlow/20 hover:text-white"
                      >
                        <FiExternalLink /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-title">Certifications</p>
                <h2 className="mt-4 text-4xl font-bold text-white">Modern Achievement Cards</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div
                  whileHover={{ y: -6, scale: 1.02, rotate: 1 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 160, delay: index * 0.15 }}
                  key={cert}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-cyanGlow font-medium">Certification</p>
                  <h3 className="mt-5 text-xl font-bold text-white">{cert}</h3>
                  <p className="mt-4 text-slate-300 leading-relaxed">Verified training focused on strong fundamentals and applied embedded programming.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-title">Achievements</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Recognition and Awards</h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {achievements.map((award, index) => (
                <motion.div
                  key={award}
                  whileHover={{ y: -6, scale: 1.05, rotate: 2 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyanGlow/10 text-2xl text-cyanGlow"
                  >
                    ★
                  </motion.div>
                  <h3 className="mt-5 text-xl font-bold text-white">{award}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="relative px-6 pb-24 pt-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-title">Coding Profile</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Coding Dashboard</h2>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {codingProfiles.map((profile, index) => {
                const Icon = profile.icon;
                return (
                  <motion.div
                    key={profile.name}
                    whileHover={{ y: -6, scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 160, delay: index * 0.15 }}
                    className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyanGlow/10 text-2xl text-cyanGlow"
                      >
                        <Icon />
                      </motion.div>
                      <div>
                        <p className="text-sm text-slate-400 font-medium">{profile.name}</p>
                        <h3 className="text-xl font-bold text-white">{profile.detail}</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-slate-300 leading-relaxed">{profile.extra}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="relative px-6 pb-32 pt-16 md:px-12 lg:px-20">
          <motion.div 
            className="absolute inset-0 opacity-5"
            animate={{
              background: [
                'radial-gradient(circle at 50% 30%, rgba(132,65,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 70%, rgba(94,189,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(132,65,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 30%, rgba(132,65,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <div className="mx-auto max-w-7xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-title">Contact</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Premium Contact Experience</h2>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_0.95fr]">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 150 }}
                className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow"
              >
                <p className="text-lg text-slate-300 leading-relaxed">Let's build the next generation of intelligent systems together. Reach out for internships, projects, or collaborations.</p>
                <div className="mt-8 space-y-4 text-slate-200">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-sm font-medium transition-all duration-300"><FiMail className="text-cyanGlow" /> hemavarshini.g2024ece@sece.ac.in</motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-sm font-medium transition-all duration-300"><FiPhone className="text-cyanGlow" /> 6382688945</motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-sm font-medium transition-all duration-300"><FiLinkedin className="text-cyanGlow" /> linkedin.com/in/hemavarshini</motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 text-sm font-medium transition-all duration-300"><SiGithub className="text-cyanGlow" /> github.com/hemavarshini</motion.div>
                </div>
                <div className="mt-10 flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-cyanGlow hover:bg-cyanGlow/10 hover:text-white"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-violetGlow hover:bg-violetGlow/10 hover:text-white"
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>

              <motion.form
                whileHover={{ y: -6, scale: 1.01 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 150 }}
                className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-cyanGlow/30 hover:shadow-glow"
              >
                <div className="grid gap-5">
                  <label className="space-y-2 text-sm text-slate-300 font-medium">
                    <span>Name</span>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 focus:border-cyanGlow/60 focus:ring-2 focus:ring-cyanGlow/10"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300 font-medium">
                    <span>Email</span>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 focus:border-cyanGlow/60 focus:ring-2 focus:ring-cyanGlow/10"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300 font-medium">
                    <span>Message</span>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      rows={5}
                      placeholder="How can I help?"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 focus:border-cyanGlow/60 focus:ring-2 focus:ring-cyanGlow/10"
                    />
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyanGlow to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </div>

      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </div>
  );
}

export default App;
