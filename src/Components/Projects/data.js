import projectmain1 from '../../assets/projectmain1.png';
import projectmain2 from '../../assets/projectmain2.png';
import firstProjectImg1 from '../../assets/project1/project image.jpg';
import firstProjectImg2 from '../../assets/project1/project image 2.jpg';
import firstInstallImg3 from '../../assets/project1/install.jpg';

export const projects = [
  {
    mainImg: projectmain1,
    title: 'projects.title1',
    description: 'projects.description1',
    pictures: [firstProjectImg2, firstProjectImg1],
    video: 'https://www.youtube.com/embed/IucMdOThtOk?si=JebmibTjVYR04HNK',
    install: firstInstallImg3,
    installTitle: 'projects.installTitle1',
    installDescription:
      'projects.installDescription1',
  },
  {
    mainImg: projectmain2,
    title: 'projects.title2',
    description: 'projects.description2',
    pictures: [],
    video: 'https://www.youtube.com/embed/WQB7uK6lsRw?si=m5uY8wIh45lGBKjB',
  },
];

