export function GridBackgroundDemo() {
  return (
    <div className="h-screen w-full absolute inset-0 dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
