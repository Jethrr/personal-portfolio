import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { FaGithub } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  content: string;
  footerText: string;
  footerIconClass: string;
  githubLink: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  content,
  footerText,
  // footerIconClass,
  // githubLink,
  imageUrl,
}) => {
  return (
    <div>
      <Card className="text-white mb-5  flex-row items-center justify-between dark:text-black cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
        <div className="w-full h-72 p-5 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded dark:outline"
          />
        </div>

        <div className="card-nav w-full ">
          <CardHeader className="flex justify-between">
            <div className="header">
              <CardTitle className="text-3xl">{title}</CardTitle>
              <CardDescription className="font-semibold">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>{content}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-center gap-2">
              {footerText.split(" / ").map((text, index) => (
                <button
                  key={index}
                  className="bg-white dark:bg-black text-xs px-3 py-1 text-black dark:text-white font-semibold rounded-md"
                >
                  {text}
                </button>
              ))}
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
