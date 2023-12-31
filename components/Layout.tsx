import Navigation from "./Navigation"

type LayoutProps = {
  hideNavigation: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ hideNavigation, children }) => {
  let rightColumnClasses = '';
  if (hideNavigation) rightColumnClasses += 'w-full'
  if (!hideNavigation) rightColumnClasses += 'md:mx-0 md:w-9/12 md:px-0 px-4';

  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0 md:px-4">
      {!hideNavigation && (
        <div className="fixed w-full md:sticky md:top-0 bottom-0 md:w-3/12 -mb-5 z-50">
          <Navigation />
        </div>
      )}
      <div className={rightColumnClasses}>
        {children}
      </div>
    </div>
  )
}

export default Layout