import { Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "DevOps Tools",
    skills: ["Jenkins", "AWS - (S3, EC2, SSM)"],
  },
  {
    title: "Message Brokers",
    skills: ["Kafka"],
  },
  {
    title: "Monitoring",
    skills: ["NewRelic", "Uptime Robot", "Kibana"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Postman", "Robo3T", "Confluence", "Figma", "Compass", "GMap", "PM2", "NPM", "PgAdmin", "Bitbucket"],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Postgres", "Redis"],
  },
  {
    title: "Libraries",
    skills: ["Node.js", "React.js", "Redux", "Agenda"],
  },
  {
    title: "Frameworks",
    skills: ["Angular", "Express", "NestJs", "Loopback"],
  },
  {
    title: "Project Management",
    skills: ["Agile/Scrum", "JIRA"],
  },
  {
    title: "Testing",
    skills: ["Jest"],
  },
];

export const Skills = () => {
  return (
    <section className="animate-fade-up space-y-4 w-full">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-primary" size={24} />
        <h2 className="text-xl font-semibold text-dark">Skills</h2>
      </div>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h3 className="font-medium text-dark/80 text-sm">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};