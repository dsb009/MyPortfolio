/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Senior DevOps Engineer Portfolio",
  description:
    "Portfolio of a Senior DevOps Engineer. Showcasing expertise in CI/CD, IaC, Cloud Infrastructure, and Automation.",
  og: {
    title: "Senior DevOps Engineer Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/", // This will be replaced by the user
  },
};

//Home Page
const greeting = {
  title: "[Your Name]",
  logo_name: "[YourLogoName]",
  nickname: "",
  subTitle:
    "A seasoned DevOps engineer passionate about automating and streamlining development pipelines, enhancing system reliability, and scaling infrastructure efficiently. Expertise in CI/CD, Infrastructure as Code, containerization, cloud platforms, and monitoring.",
  resumeLink: "",
  portfolio_repository: "[Your Portfolio Repo Link]",
  githubProfile: "[Your GitHub Profile Link]",
};

const socialMediaLinks = [];

const skills = {
  data: [
    {
      title: "CI/CD & Automation",
      fileName: "FullStackImg", // Can reuse an existing image or suggest a new one
      skills: [
        "⚡ Expertise in designing and implementing robust CI/CD pipelines",
        "⚡ Automating build, test, and deployment processes",
        "⚡ Experience with tools like Jenkins, GitLab CI, CircleCI, ArgoCD",
      ],
      softwareSkills: [
        { skillName: "Jenkins", fontAwesomeClassname: "simple-icons:jenkins", style: { color: "#D24939" } },
        { skillName: "GitLab CI", fontAwesomeClassname: "simple-icons:gitlab", style: { color: "#FC6D26" } },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
        { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } },
        { skillName: "ArgoCD", fontAwesomeClassname: "simple-icons:argo", style: { color: "#EF7B4D" } },
      ],
    },
    {
      title: "Infrastructure as Code (IaC) & Configuration Management",
      fileName: "CloudInfraImg", // Can reuse an existing image
      skills: [
        "⚡ Proficient in defining and managing infrastructure using code",
        "⚡ Automating server provisioning and configuration",
        "⚡ Experience with Terraform, Ansible, CloudFormation",
      ],
      softwareSkills: [
        { skillName: "Terraform", fontAwesomeClassname: "simple-icons:terraform", style: { color: "#7B42BC" } },
        { skillName: "Ansible", fontAwesomeClassname: "simple-icons:ansible", style: { color: "#EE0000" } },
        { skillName: "AWS CloudFormation", fontAwesomeClassname: "simple-icons:awscloudformation", style: { color: "#FF9900" } },
      ],
    },
    {
      title: "Cloud Platforms & Services",
      fileName: "DataScienceImg", // Can reuse an existing image or suggest a new one for cloud
      skills: [
        "⚡ Extensive experience with AWS, Azure, and/or GCP",
        "⚡ Designing scalable, resilient, and cost-effective cloud architectures",
        "⚡ Managing services like EC2, S3, RDS, VPC, IAM (AWS specific examples)",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
        { skillName: "Azure", fontAwesomeClassname: "simple-icons:microsoftazure", style: { color: "#0089D6" } },
        { skillName: "Google Cloud", fontAwesomeClassname: "simple-icons:googlecloud", style: { color: "#4285F4" } },
      ],
    },
    {
      title: "Monitoring, Logging & Scripting",
      fileName: "DesignImg", // Can reuse an existing image or suggest a new one
      skills: [
        "⚡ Implementing and managing monitoring and logging solutions (Prometheus, Grafana, ELK)",
        "⚡ Strong scripting skills for automation (Python, Bash)",
        "⚡ Proactive problem identification and resolution",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
        { skillName: "Bash", fontAwesomeClassname: "simple-icons:gnubash", style: { color: "#4EAA25" } },
        { skillName: "Prometheus", fontAwesomeClassname: "simple-icons:prometheus", style: { color: "#E6522C" } },
        { skillName: "Grafana", fontAwesomeClassname: "simple-icons:grafana", style: { color: "#F46800" } },
        { skillName: "ELK Stack", fontAwesomeClassname: "simple-icons:elasticsearch", style: { color: "#005571" } }, // Note: This is for Elasticsearch, common in ELK
      ],
    },
  ]
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Work History",
  description:
    "Details about my roles and responsibilities as a Senior DevOps Engineer. ([Your Experience Summary Here])",
  header_image_path: "experience.svg",
  sections: [],
};

// Projects Page
const projectsHeader = {
  title: "DevOps Projects",
  description:
    "Showcase of my work in automation, infrastructure, and CI/CD. ([Your Projects Summary Here])",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications & Articles",
  description: "[Your Publications Summary Here - if any]",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "developerActivity.svg",
    description:
      "Feel free to reach out for collaborations or inquiries. You can add your preferred contact methods here later.",
  },
  blogSection: {
    title: "Blog / Articles",
    subtitle: "[Link to your blog or articles - if any]",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "[Your City, State, Country]",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
