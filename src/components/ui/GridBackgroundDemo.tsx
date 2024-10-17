export function GridBackgroundDemo() {
  return (
    <div className=" w-full absolute inset-0 dark:bg-white bg-black dark:bg-grid-black/[0.0] bg-grid-white/[0.0]">
      <div className="absolute pointer-events-none inset-1 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
    </div>
  );
}
