type ProfileTabItemProps = {
  active: string;
  icon: React.ReactNode;
  label: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileTabItem: React.FC<ProfileTabItemProps> = ({active, icon, label, setActivePage}) => {
  const tabClasses = 'flex gap-1 px-4 py-1 items-center border-b-4 border-b-white cursor-pointer';
  const activeTabClasses = 'flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold cursor-pointer';

  return (
    <div
      className={active === label.toLowerCase() ? activeTabClasses : tabClasses}
      onClick={() => setActivePage(label.toLowerCase())}
    >
      <span className="text-[1.2rem]">
        {icon}
      </span>
      <span className="hidden sm:block">{label}</span>
    </div>
  )
}

export default ProfileTabItem