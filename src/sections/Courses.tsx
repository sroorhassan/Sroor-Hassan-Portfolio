import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import ShowCoursesCard from "../components/Courses/ShowCoursesCard";

const CourseSection = () => {
  const courseFields = [
    {
      id: "programming",
      title: "Programming",
      icon: <CodeIcon sx={{ fontSize: 50 }} />,
      link: "/education/programming",
    },
    {
      id: "languages",
      title: "Languages",
      icon: <LanguageIcon sx={{ fontSize: 50 }} />,
      link: "/education/languages",
    },
  ];

  return (
    <ShowCoursesCard title="Certificates & Education" cards={courseFields} />
  );
};

export default CourseSection;
