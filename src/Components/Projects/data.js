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
    title: 'Projektas 1',
    description:
      'Variklio temperatūros vietoj autopiloto modas E60, E70, E90 automobiliams',
    pictures: [firstProjectImg3, firstProjectImg2, firstProjectImg1],
    install: firstInstallImg3,
    installDescription:
      'LCI modeliams reikalinga nedidelė spidometro modifikacija',
  },
  {
    mainImg: projectmain2,
    title: 'Projektas 2',
    description:
      'M3 stiliaus variklio temperatūra E90 serijos dyzeliniams automobiliams',
    pictures: [secondProjectImg1, secondProjectImg2],
  },
];
