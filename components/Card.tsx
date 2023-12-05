type CardProps = {
  noPadding: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ noPadding, children }) => {
  let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5';

  if (!noPadding) classes += ' p-4';

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card