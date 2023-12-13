import projectmain1 from '../../assets/projectmain1.png';
import projectmain2 from '../../assets/projectmain2.png';
import firstProjectImg1 from '../../assets/project1/project image.jpg';
import firstProjectImg2 from '../../assets/project1/project image 2.jpg';
import firstProjectImg3 from '../../assets/project1/project image 3.jpg';
import firstInstallImg3 from '../../assets/project1/install.jpg';
import secondProjectImg1 from '../../assets/project2/project image.jpg';
import secondProjectImg2 from '../../assets/project2/project image 2.jpg';

export const projects = [
  {
    mainImg: projectmain1,
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, reiciendis!',
    pictures: [firstProjectImg1, firstProjectImg2, firstProjectImg3],
    install: firstInstallImg3,
  },
  {
    mainImg: projectmain2,
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, reiciendis!',
    pictures: [secondProjectImg1, secondProjectImg2],
  },
];
