interface CardProps {
  id: number; // Replace with the actual type of id
  url: string; // Replace with the actual type of url
}

const Card: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[200px] w-[300px] lg:h-[300px] lg:w-[400px] rounded-lg overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
    </div>
  );
};
export default Card