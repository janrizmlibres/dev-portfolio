const ProjectPanel = () => {
  return (
    <div className="project-entry relative">
      <div className="aspect-square"></div>
      <div className="aspect-square row-start-2"></div>
      <div className="aspect-square row-start-3"></div>

      <div className="project-entry absolute inset-0">
        <div className="relative rounded-4xl col-start-3 col-span-3 row-span-2 flex">
          <div className="absolute inset-0 bg-[url(./assets/temp.jpg)] bg-cover clip-path-top"></div>
          <div className="absolute inset-0 bg-[url(./assets/temp.jpg)] bg-cover clip-path-bottom"></div>
          <div className="absolute inset-0 bg-[url(./assets/temp.jpg)] bg-cover clip-path-center"></div>

          <div className="ml-auto mt-auto pt-4 pl-4 w-[calc(33.33%+0.33rem)] h-[calc(50%+0.5rem)] rounded-tl-[2.5rem] bg-dark-100 z-1">
            <div className="size-full rounded-4xl bg-gray-100"></div>
          </div>
        </div>
        <div className="rounded-4xl bg-gray-100 col-start-6"></div>
        <div className="rounded-4xl bg-gray-100 col-start-4 row-start-3"></div>
      </div>
    </div>
  );
};

export default ProjectPanel;
