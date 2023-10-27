// next link
import Link from 'next/link';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/2'}
        className="bg-yellow-300 p-3 rounded-[2px] hover:bg-yellow-200 transition-all duration-300"
      >
        Comencemos
      </Link>
    </div>
  );
};

export default ProjectsBtn;
