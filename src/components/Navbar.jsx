export default function Navbar() {
  return (
    <nav
      className="
fixed 
top-0
w-full
z-50
backdrop-blur-md
bg-black/30
border-b
border-cyan-500/20
"
    >
      <div
        className="
max-w-6xl
mx-auto
flex
justify-between
items-center
p-5
"
      >
        <h1
          className="
text-2xl
font-bold
text-cyan-400
"
        >
          ANWAR.DEV
        </h1>

        <div
          className="
space-x-8
text-gray-300
"
        >
          <a>About</a>

          <a>Skills</a>

          <a>Projects</a>

          <a>Contact</a>
        </div>
      </div>
    </nav>
  );
}
