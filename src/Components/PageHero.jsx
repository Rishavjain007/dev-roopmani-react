export default function PageHero({
  title,
  subtitle,
  bgImage = "https://t3.ftcdn.net/jpg/03/32/19/96/360_F_332199658_ku0Jh5LRu0IGkHSQSiYqvFs2h3UIMxew.jpg",
}) {
  return (
    <section
      className="h-[60vh] flex items-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(26,37,47,0.7), rgba(26,37,47,0.7)), url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
