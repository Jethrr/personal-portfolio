import { AspectRatio } from "@/components/ui/aspect-ratio";
import cat from "../../assets/images/cat.jpg";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src={cat}
        width={400}
        alt="Photo by Drew Beamer"
        className="rounded-md object-fit"
      />
    </AspectRatio>
  );
}
