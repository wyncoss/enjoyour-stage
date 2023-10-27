// next link
import Link from 'next/link';

const ProjectsBtnd = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={
          'https://github.com/EnjoyPet/DocumentacionEnjoy/tree/main/Documentaci%C3%B3n'
        }
        target="_blank"
        className="bg-yellow-300 p-3 rounded-[2px] hover:bg-yellow-200 transition-all duration-300"
      >
        Ver toda la documentación
      </Link>
    </div>
  );
};

export default ProjectsBtnd;
