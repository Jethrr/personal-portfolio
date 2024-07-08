import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  footerIconClass,
  githubLink,
  imageUrl,
}) => {
  return (
    <div>
      <Card className="text-white mb-5 flex items-center justify-between">
        <div className="card-nav">
          <CardHeader className="flex justify-between">
            <div className="header">
              <CardTitle className="mb-2">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>{content}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-center gap-2">
              <span
                className={`flex h-4 w-4 rounded-full ${footerIconClass}`}
              />
              <p className="mr-5">{footerText}</p>
            </div>
            <div className="github-nav">
              <Link to={githubLink}>
                <Button
                  variant="outline"
                  className="hover:bg-opacity-50 bg-gray-50 text-black"
                >
                  <FaGithub size={20} className="mr-1" />
                  Github
                </Button>
              </Link>
            </div>
          </CardFooter>
        </div>

        <div className="img-div p-5">
          <img
            src={imageUrl}
            alt={title}
            className="md:w-56 md:h-36 object-cover rounded md:block hidden"
          />
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
