import projectmain1 from "../../assets/projectmain1.png";
import projectmain2 from "../../assets/projectmain2.png";
import firstProjectImg1 from "../../assets/project1/project image.jpg";
import firstProjectImg2 from "../../assets/project1/project image 2.jpg";
import firstInstallImg3 from "../../assets/project1/install.jpg";

export const projects = [
  {
    mainImg: projectmain1,
    title: "Modulis 1",
    description:
      "Variklio temperatūros vietoj autopiloto modas E60, E70, E90 automobiliams",
    pictures: [firstProjectImg2, firstProjectImg1],
    video: "https://www.youtube.com/embed/IucMdOThtOk?si=JebmibTjVYR04HNK",
    install: firstInstallImg3,
    installDescription:
      "LCI modeliams reikalinga nedidelė spidometro modifikacija",
  },
  {
    mainImg: projectmain2,
    title: "Modulis 2",
    description:
      "M3 stiliaus variklio temperatūra E90 serijos dyzeliniams automobiliams",
    pictures: [],
    video: "https://www.youtube.com/embed/WQB7uK6lsRw?si=m5uY8wIh45lGBKjB",
  },
];
