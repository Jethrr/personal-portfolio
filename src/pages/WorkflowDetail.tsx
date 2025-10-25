import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { Spotlight } from "@/components/ui/Spotlight";

const WorkflowDetail = () => {
  const { slug } = useParams();

  // Sample workflow data - replace with your actual data
  const workflows = {
    "email-automation": {
      title: "Email Automation Workflow",
      description: "Automate email processing and responses using AI",
      category: "Business Automation",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      content: `# Email Automation Workflow

This automation workflow revolutionizes how businesses handle email communications. By leveraging AI and machine learning, this system can intelligently sort, prioritize, and respond to emails automatically.

## Key Features

- **Smart Email Sorting**: Automatically categorizes emails based on content and sender
- **AI-Powered Responses**: Generates contextual replies using natural language processing
- **Priority Detection**: Identifies urgent emails and flags them for immediate attention
- **Multi-Language Support**: Processes emails in multiple languages seamlessly

## How It Works

The system uses advanced NLP models to analyze email content, determine intent, and generate appropriate responses. It integrates with popular email platforms and can be customized for specific business needs.`,
    },
  };

  const workflow = workflows[slug as keyof typeof workflows];

  if (!workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Workflow not found</p>
      </div>
    );
  }

  return (
    <div className="relative w-full py-24">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full mx-4 xl:mx-60">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white dark:text-black hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Workflows</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              {workflow.category}
            </span>
            <h1 className="text-4xl xl:text-6xl font-bold text-white dark:text-black mb-4">
              {workflow.title}
            </h1>
            <p className="text-xl text-white/70 dark:text-black/70">
              {workflow.description}
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-black/10">
              <iframe
                className="w-full h-full"
                src={workflow.videoUrl}
                title={workflow.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 dark:border-black/10"
          >
            <div
              className="prose prose-invert max-w-none text-white/90 dark:text-black/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: workflow.content.replace(/\n/g, '<br />') }}
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              {workflow.content}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDetail;
